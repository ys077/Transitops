import React, { useEffect, useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Modal } from '../components/ui/modal';
import { Label } from '../components/ui/label';

interface Vehicle {
  id: string;
  registrationNumber: string;
  nameModel: string | null;
  type: string | null;
  maxLoadCapacityKg: number | null;
  status: string;
  region: string | null;
}

export function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    registrationNumber: '',
    nameModel: '',
    type: '',
    maxLoadCapacityKg: '',
    region: '',
    status: 'available',
  });

  const fetchVehicles = async () => {
    try {
      const res = await apiFetch('/vehicles');
      setVehicles(res.data);
    } catch (error) {
      console.error('Failed to fetch vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const openAddModal = () => {
    setEditingVehicle(null);
    setFormData({
      registrationNumber: '',
      nameModel: '',
      type: '',
      maxLoadCapacityKg: '',
      region: '',
      status: 'available',
    });
    setIsModalOpen(true);
  };

  const openEditModal = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setFormData({
      registrationNumber: vehicle.registrationNumber,
      nameModel: vehicle.nameModel || '',
      type: vehicle.type || '',
      maxLoadCapacityKg: vehicle.maxLoadCapacityKg?.toString() || '',
      region: vehicle.region || '',
      status: vehicle.status,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      maxLoadCapacityKg: formData.maxLoadCapacityKg ? parseFloat(formData.maxLoadCapacityKg) : null,
    };

    try {
      if (editingVehicle) {
        await apiFetch(`/vehicles/${editingVehicle.id}`, { data: payload, method: 'PATCH' });
      } else {
        await apiFetch('/vehicles', { data: payload });
      }
      setIsModalOpen(false);
      fetchVehicles();
    } catch (error: any) {
      alert(error.message || 'Failed to save vehicle');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this vehicle?')) return;
    try {
      await apiFetch(`/vehicles/${id}`, { method: 'DELETE' });
      fetchVehicles();
    } catch (error: any) {
      alert(error.message || 'Failed to delete vehicle');
    }
  };

  const filteredVehicles = vehicles.filter(v => 
    v.registrationNumber.toLowerCase().includes(search.toLowerCase()) || 
    (v.nameModel && v.nameModel.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vehicles</h1>
          <p className="text-muted-foreground mt-1">Manage your fleet inventory and statuses.</p>
        </div>
        <Button onClick={openAddModal} className="gap-2">
          <Plus className="h-4 w-4" /> Add Vehicle
        </Button>
      </div>

      <div className="flex items-center space-x-2 max-w-sm">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search registration or model..." 
            className="pl-9" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Registration</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Capacity (kg)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading vehicles...</TableCell>
            </TableRow>
          ) : filteredVehicles.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No vehicles found.</TableCell>
            </TableRow>
          ) : (
            filteredVehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="font-medium">{vehicle.registrationNumber}</TableCell>
                <TableCell>{vehicle.nameModel || '-'}</TableCell>
                <TableCell>{vehicle.type || '-'}</TableCell>
                <TableCell>{vehicle.maxLoadCapacityKg || '-'}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize
                    ${vehicle.status === 'available' ? 'bg-fleet-available/10 text-fleet-available border border-fleet-available/20' : 
                      vehicle.status === 'on_trip' ? 'bg-fleet-on_trip/10 text-fleet-on_trip border border-fleet-on_trip/20' : 
                      vehicle.status === 'in_shop' ? 'bg-fleet-in_shop/10 text-fleet-in_shop border border-fleet-in_shop/20' : 
                      'bg-muted text-muted-foreground border border-border'
                    }`}>
                    {vehicle.status.replace('_', ' ')}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => openEditModal(vehicle)}>
                      <Edit2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(vehicle.id)}>
                      <Trash2 className="h-4 w-4 text-destructive/70 hover:text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
      >
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Registration Number <span className="text-destructive">*</span></Label>
            <Input 
              required 
              value={formData.registrationNumber} 
              onChange={e => setFormData({...formData, registrationNumber: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Make/Model</Label>
              <Input 
                value={formData.nameModel} 
                onChange={e => setFormData({...formData, nameModel: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <Label>Vehicle Type</Label>
              <Input 
                value={formData.type} 
                placeholder="e.g. Truck, Van"
                onChange={e => setFormData({...formData, type: e.target.value})} 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Load Capacity (kg)</Label>
              <Input 
                type="number" 
                value={formData.maxLoadCapacityKg} 
                onChange={e => setFormData({...formData, maxLoadCapacityKg: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <Label>Region</Label>
              <Input 
                value={formData.region} 
                onChange={e => setFormData({...formData, region: e.target.value})} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background"
              value={formData.status}
              onChange={e => setFormData({...formData, status: e.target.value})}
            >
              <option value="available">Available</option>
              <option value="on_trip">On Trip</option>
              <option value="in_shop">In Shop</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">{editingVehicle ? 'Save Changes' : 'Add Vehicle'}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
