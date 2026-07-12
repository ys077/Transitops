import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { apiFetch } from '../lib/api';
import { useAuthStore } from '../store/authStore';

export function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'dispatcher', // Default role for registration
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const res = await apiFetch('/auth/login', { data: { email: formData.email, password: formData.password } });
        setAuth(res.data, res.token);
        navigate('/');
      } else {
        const res = await apiFetch('/auth/register', { data: formData });
        // Automatically log them in by fetching token
        const loginRes = await apiFetch('/auth/login', { data: { email: formData.email, password: formData.password } });
        setAuth(loginRes.data, loginRes.token);
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 animate-in fade-in duration-1000">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[20%] top-[20%] h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[20%] h-96 w-96 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="z-10 w-full max-w-md">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-lg ring-1 ring-primary/20 backdrop-blur-md">
            <Truck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            TransitOps<span className="text-primary">.ai</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Next-generation intelligent fleet management
          </p>
        </div>

        <Card className="glass-panel">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{isLogin ? 'Welcome back' : 'Create an account'}</CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Enter your credentials to access your dashboard' 
                : 'Enter your details below to create your account'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <select
                    id="role"
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="fleet_manager">Fleet Manager</option>
                    <option value="dispatcher">Dispatcher</option>
                    <option value="maintenance_tech">Maintenance Tech</option>
                  </select>
                </div>
              )}

              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
              </Button>
            </form>
            
            <div className="mt-4 text-center text-sm">
              <span className="text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button 
                type="button"
                onClick={() => { setIsLogin(!isLogin); setError(''); }}
                className="font-medium text-primary hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
