import React from 'react';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center animate-in fade-in duration-500">
      <div className="rounded-full bg-primary/10 p-4 mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
      </div>
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-2 max-w-sm text-center">
        This module is under construction. It will feature the {title.toLowerCase()} management tools described in the blueprint.
      </p>
    </div>
  );
}
