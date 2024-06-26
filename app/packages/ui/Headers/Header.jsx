import React, { useState } from 'react';

import {
  GetKeyLocalStorage,
  RemoveKeyLocalStorage
} from '@/app/packages/caching/LocalStorageRouter';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';

import LoggedInUserCard from '@/app/packages/ui/Cards/LoggedInUserCard';

import XylexLogo from '@/app/packages/ui/Logos/Xylex';

const Header = () => {
  const [mobileProfileDropdown, setMobileProfileDropdown] = useState(false);

  const username = GetKeyLocalStorage('username');
  const profilePicUrl = GetKeyLocalStorage('profilePic');
  const organization = GetKeyLocalStorage('organization');

  const strategyName = GetKeyLocalStorage('strategyName');

  function reloadPageAndClearStorage() {
    RemoveKeyLocalStorage('strategyName');
    RemoveKeyLocalStorage('strategyHash');
    window.location.reload();
  }

  return (
    <header
      id="page-header"
      className="z-50 flex flex-none items-center border-b border-primary bg-secondary backdrop-blur-sm lg:fixed lg:end-0 lg:start-0 lg:top-0 lg:h-20"
    >
      {!mobileProfileDropdown && strategyName && (
        <button
          className="px-1.5 ml-4 py-2 bg-secondary hover:bg-accent transition rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:-mr-[60px]"
          onClick={reloadPageAndClearStorage}
        >
          <ArrowLeftEndOnRectangleIcon className="h-6 w-6 text-primary" />
        </button>
      )}

      <div className="w-[1415px] mx-auto px-[75px]">
        <div className="flex justify-between py-5 lg:py-0">
          <div className="flex items-center gap-2 lg:gap-6 header-offset">
            <a
              // href="/dashboard/"
              className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
            >
              <XylexLogo size={'md'} />
            </a>

            {/* <nav className="hidden items-center gap-2 lg:flex">
              <a
                href="/dashboard/"
                className={getHighlightClass("/dashboard")}
              >
                <span>Dashboard</span>
              </a>
              <a
                href="/dashboard/journal"
                className={getHighlightClass("/dashboard/journal")}
                onClick={reloadPageAndClearStorage}
              >
                <span>Journal</span>
              </a>
              <a
                href="/dashboard/studio"
                className={getHighlightClass("/dashboard/studio")}

              >
                <span>Studio</span>
              </a>
              <a
                href="/dashboard/charts"
                className={getHighlightClass("/dashboard/charts")}
              >
                <span>Charts</span>
              </a>
              <a
                href="/dashboard/settings"
                className={getHighlightClass("/dashboard/settings")}
              >
                <span>Settings</span>
              </a>
              <a
                href="/dashboard/support"
                className={getHighlightClass("/dashboard/support")}
              >
                <span>Support</span>
              </a>
            </nav> */}
          </div>

          <div className="flex items-center">
            <div className="relative inline-block">
              <LoggedInUserCard
                username={username}
                organization={organization}
                profilePicture={profilePicUrl}
                isAdmin={true}
                desktopView={true}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
