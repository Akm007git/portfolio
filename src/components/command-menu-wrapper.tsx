'use client';

import * as React from 'react';
import { Navbar } from '@/components/navbar';
import { CommandMenu } from '@/components/command-menu';

export function CommandMenuWrapper({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = React.useState(false);

  return (
    <>
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      {children}
    </>
  );
}
