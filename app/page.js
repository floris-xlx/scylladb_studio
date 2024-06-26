'use client';


import React, { useState, useEffect, Fragment } from 'react';

import HeaderIcons from '@/app/packages/ui/Headers/HeaderIcons';
import VerticalNavigation from '@/app/packages/ui/NavigationBar/VerticalNavigation';


export default function Home() {
  const [isDesktopView, setIsDesktopView] = useState(false);

  // keep the selected auto complete value for the keyspaces
  const [keyspace, setKeyspace] = useState('');


  return (
    <main className="flex min-h-screen min-w-screen bg-secondary">

      < HeaderIcons />

      <div className="flex flex-row   w-full pt-[70px] fixed">

        <div className="sm:w-[270px] w-full sm:border-r sm:border-primary">
          <VerticalNavigation
            setKeyspace={setKeyspace}
          >


          </VerticalNavigation>
        </div>
        <div className="hidden sm:w-full">

        </div>

      </div>

    </main>
  );
}
