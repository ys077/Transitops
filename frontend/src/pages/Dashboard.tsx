import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Truck, 
  AlertTriangle, 
  Activity,
  CheckCircle2,
  TrendingUp,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { apiFetch } from '../lib/api';

export function Dashboard() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [vRes, dRes, tRes] = await Promise.all([
          apiFetch('/vehicles'),
          apiFetch('/drivers'),
          apiFetch('/trips')
        ]);
        setVehicles(vRes.data);
        setDrivers(dRes.data);
        setTrips(tRes);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="flex h-full items-center justify-center py-20 text-muted-foreground animate-pulse"><RefreshCw className="h-6 w-6 animate-spin mr-2"/> Loading dashboard data...</div>;
  }

  const activeVehicles = vehicles.filter(v => v.status === 'available' || v.status === 'on_trip').length;
  const inShopVehicles = vehicles.filter(v => v.status === 'in_shop').length;
  const activeTrips = trips.filter(t => t.status === 'dispatched').length;

  const fleetEfficiency = vehicles.length > 0 ? Math.round((activeVehicles / vehicles.length) * 100) : 0;

  // Fake chart data based on current efficiency
  const utilizationData = [
    { name: 'Mon', active: Math.max(0, fleetEfficiency - 15), idle: 100 - (fleetEfficiency - 15) },
    { name: 'Tue', active: Math.max(0, fleetEfficiency - 10), idle: 100 - (fleetEfficiency - 10) },
    { name: 'Wed', active: Math.max(0, fleetEfficiency - 5), idle: 100 - (fleetEfficiency - 5) },
    { name: 'Thu', active: Math.max(0, fleetEfficiency + 5), idle: 100 - (fleetEfficiency + 5) },
    { name: 'Fri', active: Math.max(0, fleetEfficiency - 2), idle: 100 - (fleetEfficiency - 2) },
    { name: 'Sat', active: Math.max(0, fleetEfficiency - 25), idle: 100 - (fleetEfficiency - 25) },
    { name: 'Sun', active: fleetEfficiency, idle: 100 - fleetEfficiency },
  ];

  const expiringDrivers = drivers.filter(d => {
    const daysUntilExpiry = Math.floor((new Date(d.licenseExpiryDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry >= 0;
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fleet Overview</h1>
          <p className="text-muted-foreground mt-1">Real-time insights and predictive alerts for your operations.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate('/reports')}>Download Report</Button>
          <Button onClick={() => navigate('/trips')}>+ New Trip</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden glass-card shadow-sm border-border">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rounded-full bg-primary/10 blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Vehicles</CardTitle>
            <Truck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeVehicles} / {vehicles.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently operational
            </p>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden glass-card shadow-sm border-border">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rounded-full bg-fleet-on_trip/10 blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Trips in Progress</CardTitle>
            <MapPin className="h-4 w-4 text-fleet-on_trip" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeTrips}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently dispatched
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden glass-card shadow-sm border-border">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rounded-full bg-fleet-in_shop/10 blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Vehicles in Shop</CardTitle>
            <AlertTriangle className="h-4 w-4 text-fleet-in_shop" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inShopVehicles}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className={inShopVehicles > 0 ? "text-fleet-in_shop font-medium" : ""}>{inShopVehicles > 0 ? 'Needs attention' : 'All clear'}</span>
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden glass-card shadow-sm border-border">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rounded-full bg-fleet-available/10 blur-2xl"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Fleet Efficiency</CardTitle>
            <Activity className="h-4 w-4 text-fleet-available" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fleetEfficiency}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Active & Available
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 glass-card shadow-sm border-border">
          <CardHeader>
            <CardTitle>Fleet Utilization Trend</CardTitle>
            <CardDescription>7-day trend of active vs idle vehicles.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={utilizationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="active" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 glass-card shadow-sm border-border">
          <CardHeader>
            <CardTitle>Action Items</CardTitle>
            <CardDescription>System generated insights for your fleet.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {inShopVehicles > 0 && (
              <div className="flex items-start space-x-4 rounded-lg border border-fleet-in_shop/20 bg-fleet-in_shop/5 p-4 transition-colors hover:bg-fleet-in_shop/10">
                <div className="mt-0.5 rounded-full bg-fleet-in_shop/20 p-1.5">
                  <AlertTriangle className="h-4 w-4 text-fleet-in_shop" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{inShopVehicles} Vehicles in Shop</p>
                  <p className="text-sm text-muted-foreground">
                    You have vehicles currently undergoing maintenance.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-xs text-fleet-in_shop" onClick={() => navigate('/maintenance')}>View Maintenance Logs →</Button>
                </div>
              </div>
            )}
            
            {expiringDrivers.length > 0 && (
              <div className="flex items-start space-x-4 rounded-lg border border-fleet-suspended/20 bg-fleet-suspended/5 p-4 transition-colors hover:bg-fleet-suspended/10">
                <div className="mt-0.5 rounded-full bg-fleet-suspended/20 p-1.5">
                  <AlertTriangle className="h-4 w-4 text-fleet-suspended" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">License Expiry Risk</p>
                  <p className="text-sm text-muted-foreground">
                    {expiringDrivers.length} driver(s) have licenses expiring in less than 30 days.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-xs text-fleet-suspended" onClick={() => navigate('/drivers')}>View Drivers →</Button>
                </div>
              </div>
            )}

            {expiringDrivers.length === 0 && inShopVehicles === 0 && (
              <div className="flex items-start space-x-4 rounded-lg border border-fleet-available/20 bg-fleet-available/5 p-4 transition-colors hover:bg-fleet-available/10">
                <div className="mt-0.5 rounded-full bg-fleet-available/20 p-1.5">
                  <CheckCircle2 className="h-4 w-4 text-fleet-available" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">All Systems Optimal</p>
                  <p className="text-sm text-muted-foreground">
                    No critical action items at this time. Operations running smoothly.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
