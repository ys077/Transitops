import React, { useEffect, useState } from 'react';
import { Plus, Search, Wrench, CheckCircle2 } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Modal } from '../components/ui/modal';
import { Label } from '../components/ui/label';

interface MaintenanceLog {
  id: string;
  type: string;
  description: string | null;
  cost: number | null;
  status: string;
  scheduledDate: string;
  closedDate: string | null;
  odometerAtService: number | null;
  vehicle: { id: string; registrationNumber: string; nameModel: string | null };
}

export function Maintenance() {
  const [logs, setLogs] = useState<MaintenanceLog[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    vehicleId: '',
    type: '',
    description: '',
    cost: '',
    scheduledDate: '',
    odometerAtService: '',
  });

  const fetchData = async () => {
    try {
      const [logsRes, vehiclesRes] = await Promise.all([
        apiFetch('/maintenance'),
        apiFetch('/vehicles')
      ]);
      setLogs(logsRes);
      setVehicles(vehiclesRes.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateMaintenance = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch('/maintenance', { 
        data: {
          ...formData,
          cost: formData.cost ? Number(formData.cost) : undefined,
          odometerAtService: formData.odometerAtService ? Number(formData.odometerAtService) : undefined,
          scheduledDate: new Date(formData.scheduledDate).toISOString(),
        }
      });
      setIsAddModalOpen(false);
      fetchData();
    } catch (error: any) {
      alert(error.message || 'Failed to schedule maintenance');
    }
  };

  const handleCloseMaintenance = async (id: string) => {
    if (!confirm('Mark this maintenance as completed?')) return;
    try {
      await apiFetch(`/maintenance/${id}/close`, { method: 'PATCH' });
      fetchData();
    } catch (error: any) {
      alert(error.message || 'Failed to close maintenance');
    }
  };

  const filteredLogs = logs.filter(l => 
    l.vehicle.registrationNumber.toLowerCase().includes(search.toLowerCase()) || 
    l.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Maintenance</h1>
          <p className="text-muted-foreground mt-1">Schedule and track vehicle services and repairs.</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="gap-2 bg-fleet-in_shop text-fleet-in_shop-foreground hover:bg-fleet-in_shop/90">
          <Plus className="h-4 w-4" /> Schedule Service
        </Button>
      </div>

      <div className="flex items-center space-x-2 max-w-sm">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search vehicle or type..." 
            className="pl-9" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vehicle</TableHead>
            <TableHead>Service Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Cost ($)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading maintenance logs...</TableCell>
            </TableRow>
          ) : filteredLogs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No maintenance logs found.</TableCell>
            </TableRow>
          ) : (
            filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-fleet-in_shop/10 p-1.5 text-fleet-in_shop">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <div>
                      <div>{log.vehicle.registrationNumber}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{log.type}</TableCell>
                <TableCell>
                  {new Date(log.scheduledDate).toLocaleDateString()}
                  {log.closedDate && (
                    <div className="text-xs text-muted-foreground">
                      Closed: {new Date(log.closedDate).toLocaleDateString()}
                    </div>
                  )}
                </TableCell>
                <TableCell>{log.cost || '-'}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize
                    ${log.status === 'closed' ? 'bg-fleet-available/10 text-fleet-available border border-fleet-available/20' : 
                      'bg-fleet-in_shop/10 text-fleet-in_shop border border-fleet-in_shop/20'
                    }`}>
                    {log.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {log.status === 'active' && (
                      <Button variant="outline" size="sm" onClick={() => handleCloseMaintenance(log.id)}>
                        <CheckCircle2 className="h-4 w-4 mr-1 text-fleet-available" /> Complete
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Create Maintenance Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Schedule Maintenance"
      >
        <form onSubmit={handleCreateMaintenance} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Vehicle <span className="text-destructive">*</span></Label>
            <select
              required
              className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background"
              value={formData.vehicleId}
              onChange={e => setFormData({...formData, vehicleId: e.target.value})}
            >
              <option value="" disabled>Select a vehicle</option>
              {vehicles.map(v => (
                <option key={v.id} value={v.id}>{v.registrationNumber} ({v.nameModel})</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Service Type <span className="text-destructive">*</span></Label>
              <Input 
                required
                placeholder="e.g. Oil Change, Tire Rotation"
                value={formData.type} 
                onChange={e => setFormData({...formData, type: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <Label>Scheduled Date <span className="text-destructive">*</span></Label>
              <Input 
                required
                type="date"
                value={formData.scheduledDate} 
                onChange={e => setFormData({...formData, scheduledDate: e.target.value})} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Input 
              value={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Estimated Cost ($)</Label>
              <Input 
                type="number"
                value={formData.cost} 
                onChange={e => setFormData({...formData, cost: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <Label>Odometer at Service</Label>
              <Input 
                type="number"
                value={formData.odometerAtService} 
                onChange={e => setFormData({...formData, odometerAtService: e.target.value})} 
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="ghost" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button type="submit">Schedule Service</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
