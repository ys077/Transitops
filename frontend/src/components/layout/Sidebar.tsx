import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Truck, 
  Users, 
  MapPin, 
  Wrench, 
  BarChart3,
  Bot,
  Send
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Modal } from '../ui/modal';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Vehicles', path: '/vehicles', icon: Truck },
  { name: 'Drivers', path: '/drivers', icon: Users },
  { name: 'Trips', path: '/trips', icon: MapPin },
  { name: 'Maintenance', path: '/maintenance', icon: Wrench },
  { name: 'Reports', path: '/reports', icon: BarChart3 },
];

export function Sidebar() {
  const location = useLocation();
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Hello! I am TransitOps Copilot. How can I assist you with your fleet today?' }
  ]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setChatHistory([...chatHistory, { role: 'user', text: chatMessage }]);
    const userMsg = chatMessage.toLowerCase();
    setChatMessage('');

    setTimeout(() => {
      let aiResponse = "I'm analyzing your request. Our full AI model is being integrated!";
      if (userMsg.includes('report') || userMsg.includes('cost')) {
        aiResponse = "Based on recent data, maintenance costs are up 12% this month. I recommend checking the vehicles in shop on the Maintenance page.";
      } else if (userMsg.includes('driver')) {
        aiResponse = "You have one driver whose license is expiring in less than 30 days. You might want to notify them soon.";
      }
      
      setChatHistory(prev => [...prev, { role: 'ai', text: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card/50 backdrop-blur-xl">
        <div className="flex h-full flex-col px-3 py-4">
          <div className="mb-8 flex items-center px-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Truck className="h-6 w-6" />
            </div>
            <span className="ml-3 text-xl font-bold tracking-tight text-foreground">
              TransitOps<span className="text-primary">.ai</span>
            </span>
          </div>

          <div className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          {/* AI Assistant Promo Card */}
          <div className="mt-auto rounded-xl border border-primary/20 bg-primary/5 p-4 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary/20 p-1">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">Ask TransitOps</h4>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Get instant AI insights on your fleet utilization and costs.
            </p>
            <button 
              onClick={() => setIsCopilotOpen(true)} 
              className="mt-3 block text-center w-full rounded-md bg-primary/10 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              Open Copilot
            </button>
          </div>
        </div>
      </aside>

      <Modal 
        isOpen={isCopilotOpen} 
        onClose={() => setIsCopilotOpen(false)} 
        title="TransitOps AI Copilot"
        description="Ask questions about your fleet, maintenance costs, and driver statuses."
      >
        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto space-y-4 p-2 mb-4 rounded-md border border-border/50 bg-background/50">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendChat} className="flex gap-2">
            <Input 
              value={chatMessage} 
              onChange={e => setChatMessage(e.target.value)} 
              placeholder="Ask me anything..." 
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
