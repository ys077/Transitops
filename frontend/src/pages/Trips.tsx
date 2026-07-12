import React, { useEffect, useState } from 'react';
import { Plus, Search, MapPin, CheckCircle2, XCircle, Navigation, Eye } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Modal } from '../components/ui/modal';
import { Label } from '../components/ui/label';

interface Trip {
  id: string;
  source: string;
  destination: string;
  vehicle: { id: string; registrationNumber: string; nameModel: string | null };
  driver: { id: string; name: string };
  cargoWeightKg: number | null;
  status: string;
  createdAt: string;
  dispatchedAt: string | null;
  completedAt: string | null;
}

export function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    vehicleId: '',
    driverId: '',
    cargoWeightKg: '',
  });

  const [completeData, setCompleteData] = useState({
    finalOdometerKm: '',
    fuelConsumedLiters: '',
  });

  const fetchData = async () => {
    try {
      const [tripsRes, vehiclesRes, driversRes] = await Promise.all([
        apiFetch('/trips'),
        apiFetch('/vehicles'),
        apiFetch('/drivers')
      ]);
      setTrips(tripsRes);
      setVehicles(vehiclesRes.data);
      setDrivers(driversRes.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateTrip = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch('/trips', { data: formData });
      setIsAddModalOpen(false);
      fetchData();
    } catch (error: any) {
      alert(error.message || 'Failed to create trip');
    }
  };

  const handleDispatch = async (id: string) => {
    if (!confirm('Dispatch this trip?')) return;
    try {
      await apiFetch(`/trips/${id}/dispatch`, { method: 'POST' });
      fetchData();
    } catch (error: any) {
      alert(error.message || 'Failed to dispatch trip');
    }
  };

  const handleCancel = async (id: string) => {
    if (!confirm('Cancel this trip?')) return;
    try {
      await apiFetch(`/trips/${id}/cancel`, { method: 'POST' });
      fetchData();
    } catch (error: any) {
      alert(error.message || 'Failed to cancel trip');
    }
  };

  const openCompleteModal = (trip: Trip) => {
    setSelectedTrip(trip);
    setCompleteData({
      finalOdometerKm: '',
      fuelConsumedLiters: '',
    });
    setIsCompleteModalOpen(true);
  };

  const handleCompleteTrip = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTrip) return;
    
    try {
      await apiFetch(`/trips/${selectedTrip.id}/complete`, { 
        data: {
          finalOdometerKm: Number(completeData.finalOdometerKm),
          fuelConsumedLiters: completeData.fuelConsumedLiters ? Number(completeData.fuelConsumedLiters) : undefined
        },
        method: 'POST'
      });
      setIsCompleteModalOpen(false);
      fetchData();
    } catch (error: any) {
      alert(error.message || 'Failed to complete trip');
    }
  };

  const filteredTrips = trips.filter(t => {
    const matchesSearch = 
      t.vehicle.registrationNumber.toLowerCase().includes(search.toLowerCase()) || 
      t.driver.name.toLowerCase().includes(search.toLowerCase());
    const matchesTab = activeTab === 'all' || t.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trips</h1>
          <p className="text-muted-foreground mt-1">Manage dispatch, track progress, and log completions.</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" /> Create Trip
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex space-x-1 rounded-lg bg-muted/50 p-1">
          {['all', 'draft', 'dispatched', 'completed', 'cancelled'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all capitalize
                ${activeTab === tab ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search vehicle or driver..." 
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
            <TableHead>Driver</TableHead>
            <TableHead>Cargo (kg)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading trips...</TableCell>
            </TableRow>
          ) : filteredTrips.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No trips found.</TableCell>
            </TableRow>
          ) : (
            filteredTrips.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-primary/10 p-1.5 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div>{trip.vehicle.registrationNumber}</div>
                      <div className="text-xs text-muted-foreground">{trip.vehicle.nameModel}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{trip.driver.name}</TableCell>
                <TableCell>{trip.cargoWeightKg || '-'}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize
                    ${trip.status === 'completed' ? 'bg-fleet-available/10 text-fleet-available border border-fleet-available/20' : 
                      trip.status === 'dispatched' ? 'bg-fleet-on_trip/10 text-fleet-on_trip border border-fleet-on_trip/20' : 
                      trip.status === 'cancelled' ? 'bg-fleet-suspended/10 text-fleet-suspended border border-fleet-suspended/20' : 
                      'bg-muted text-muted-foreground border border-border'
                    }`}>
                    {trip.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(trip.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {trip.status === 'draft' && (
                      <>
                        <Button variant="outline" size="sm" onClick={() => handleDispatch(trip.id)}>
                          <Navigation className="h-4 w-4 mr-1" /> Dispatch
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleCancel(trip.id)}>
                          <XCircle className="h-4 w-4 text-destructive/70 hover:text-destructive" />
                        </Button>
                      </>
                    )}
                    {trip.status === 'dispatched' && (
                      <Button variant="default" size="sm" onClick={() => openCompleteModal(trip)} className="bg-fleet-available text-fleet-available-foreground hover:bg-fleet-available/90">
                        <CheckCircle2 className="h-4 w-4 mr-1" /> Complete
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Create Trip Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Create New Trip"
      >
        <form onSubmit={handleCreateTrip} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Vehicle <span className="text-destructive">*</span></Label>
            <select
              required
              className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background"
              value={formData.vehicleId}
              onChange={e => setFormData({...formData, vehicleId: e.target.value})}
            >
              <option value="" disabled>Select a vehicle</option>
              {vehicles.filter(v => v.status === 'available').map(v => (
                <option key={v.id} value={v.id}>{v.registrationNumber} ({v.nameModel})</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label>Driver <span className="text-destructive">*</span></Label>
            <select
              required
              className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background"
              value={formData.driverId}
              onChange={e => setFormData({...formData, driverId: e.target.value})}
            >
              <option value="" disabled>Select a driver</option>
              {drivers.filter(d => d.status === 'available').map(d => (
                <option key={d.id} value={d.id}>{d.name} ({d.licenseNumber})</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label>Cargo Weight (kg)</Label>
            <Input 
              type="number"
              value={formData.cargoWeightKg} 
              onChange={e => setFormData({...formData, cargoWeightKg: e.target.value})} 
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="ghost" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button type="submit">Create Draft</Button>
          </div>
        </form>
      </Modal>

      {/* Complete Trip Modal */}
      <Modal 
        isOpen={isCompleteModalOpen} 
        onClose={() => setIsCompleteModalOpen(false)} 
        title="Complete Trip"
        description="Enter final metrics to log completion."
      >
        <form onSubmit={handleCompleteTrip} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Final Odometer (km) <span className="text-destructive">*</span></Label>
            <Input 
              required
              type="number"
              step="0.1"
              value={completeData.finalOdometerKm} 
              onChange={e => setCompleteData({...completeData, finalOdometerKm: e.target.value})} 
            />
          </div>
          <div className="space-y-2">
            <Label>Fuel Consumed (Liters)</Label>
            <Input 
              type="number"
              step="0.1"
              value={completeData.fuelConsumedLiters} 
              onChange={e => setCompleteData({...completeData, fuelConsumedLiters: e.target.value})} 
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="ghost" onClick={() => setIsCompleteModalOpen(false)}>Cancel</Button>
            <Button type="submit">Mark Completed</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
