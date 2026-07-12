import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search vehicles, drivers, or trips..."
            className="h-9 w-full rounded-full border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative rounded-full text-muted-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive border border-background"></span>
        </Button>
        <div className="flex items-center space-x-3 pl-4 border-l border-border">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium leading-none text-foreground">Fleet Manager</span>
            <span className="text-xs text-muted-foreground mt-1">Admin</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
