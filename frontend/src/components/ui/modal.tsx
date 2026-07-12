import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from './button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, description, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative z-50 w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-lg sm:p-8 glass-card animate-in fade-in zoom-in-95 duration-200">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-6">
          <h2 className="text-xl font-semibold leading-none tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
