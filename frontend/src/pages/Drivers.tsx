import React, { useEffect, useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Modal } from '../components/ui/modal';
import { Label } from '../components/ui/label';

interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  licenseCategory: string | null;
  licenseExpiryDate: string;
  contactNumber: string | null;
  safetyScore: number;
  status: string;
}

export function Drivers() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    licenseCategory: '',
    licenseExpiryDate: '',
    contactNumber: '',
    status: 'available',
  });

  const fetchDrivers = async () => {
    try {
      const res = await apiFetch('/drivers');
      setDrivers(res.data);
    } catch (error) {
      console.error('Failed to fetch drivers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const openAddModal = () => {
    setEditingDriver(null);
    setFormData({
      name: '',
      licenseNumber: '',
      licenseCategory: '',
      licenseExpiryDate: '',
      contactNumber: '',
      status: 'available',
    });
    setIsModalOpen(true);
  };

  const openEditModal = (driver: Driver) => {
    setEditingDriver(driver);
    setFormData({
      name: driver.name,
      licenseNumber: driver.licenseNumber,
      licenseCategory: driver.licenseCategory || '',
      licenseExpiryDate: driver.licenseExpiryDate ? new Date(driver.licenseExpiryDate).toISOString().split('T')[0] : '',
      contactNumber: driver.contactNumber || '',
      status: driver.status,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };

    try {
      if (editingDriver) {
        await apiFetch(`/drivers/${editingDriver.id}`, { data: payload, method: 'PATCH' });
      } else {
        await apiFetch('/drivers', { data: payload });
      }
      setIsModalOpen(false);
      fetchDrivers();
    } catch (error: any) {
      alert(error.message || 'Failed to save driver');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this driver?')) return;
    try {
      await apiFetch(`/drivers/${id}`, { method: 'DELETE' });
      fetchDrivers();
    } catch (error: any) {
      alert(error.message || 'Failed to delete driver');
    }
  };

  const filteredDrivers = drivers.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.licenseNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Drivers</h1>
          <p className="text-muted-foreground mt-1">Manage your fleet drivers, licenses, and availability.</p>
        </div>
        <Button onClick={openAddModal} className="gap-2">
          <Plus className="h-4 w-4" /> Add Driver
        </Button>
      </div>

      <div className="flex items-center space-x-2 max-w-sm">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search name or license..." 
            className="pl-9" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>License #</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Safety Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading drivers...</TableCell>
            </TableRow>
          ) : filteredDrivers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No drivers found.</TableCell>
            </TableRow>
          ) : (
            filteredDrivers.map((driver) => {
              const expiryDate = new Date(driver.licenseExpiryDate);
              const daysUntilExpiry = Math.floor((expiryDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
              const isExpiringSoon = daysUntilExpiry <= 30 && daysUntilExpiry >= 0;
              const isExpired = daysUntilExpiry < 0;

              return (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{driver.licenseNumber} <span className="text-xs text-muted-foreground ml-1">({driver.licenseCategory || '-'})</span></TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center ${isExpired ? 'text-destructive font-bold' : isExpiringSoon ? 'text-yellow-500 font-medium' : ''}`}>
                      {expiryDate.toLocaleDateString()}
                    </span>
                  </TableCell>
                  <TableCell>{driver.safetyScore}/100</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize
                      ${driver.status === 'available' ? 'bg-fleet-available/10 text-fleet-available border border-fleet-available/20' : 
                        driver.status === 'on_trip' ? 'bg-fleet-on_trip/10 text-fleet-on_trip border border-fleet-on_trip/20' : 
                        driver.status === 'suspended' ? 'bg-fleet-suspended/10 text-fleet-suspended border border-fleet-suspended/20' : 
                        'bg-muted text-muted-foreground border border-border'
                      }`}>
                      {driver.status.replace('_', ' ')}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => openEditModal(driver)}>
                        <Edit2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(driver.id)}>
                        <Trash2 className="h-4 w-4 text-destructive/70 hover:text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingDriver ? 'Edit Driver' : 'Add New Driver'}
      >
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Full Name <span className="text-destructive">*</span></Label>
            <Input 
              required 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>License Number <span className="text-destructive">*</span></Label>
              <Input 
                required
                value={formData.licenseNumber} 
                onChange={e => setFormData({...formData, licenseNumber: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <Label>License Category</Label>
              <Input 
                value={formData.licenseCategory} 
                placeholder="e.g. CDL-A"
                onChange={e => setFormData({...formData, licenseCategory: e.target.value})} 
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Expiry Date <span className="text-destructive">*</span></Label>
              <Input 
                type="date" 
                required
                value={formData.licenseExpiryDate} 
                onChange={e => setFormData({...formData, licenseExpiryDate: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <Label>Contact Number</Label>
              <Input 
                value={formData.contactNumber} 
                onChange={e => setFormData({...formData, contactNumber: e.target.value})} 
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
              <option value="off_duty">Off Duty</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">{editingDriver ? 'Save Changes' : 'Add Driver'}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
