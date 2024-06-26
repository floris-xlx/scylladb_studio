'use client';
// user logged in card mainly used in the manager page

import React, { useState, useEffect } from 'react';
import handleSignOut from '@/app/auth/hooks/HandleSignOut';
import { Tooltip as ToolTipNext } from '@nextui-org/react';
import SkeletonLoader from '@/app/packages/ui/Loading/SkeletonLoader';
import {
  BriefcaseIcon,
  BarsArrowDownIcon,
  Cog8ToothIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';
import CapitalizeFirstLetter from '@/app/packages/hooks/formatting/CapitalizeLetter';
import { ProfilePicTiny } from '@/app/packages/ui/User/User';
import handleOrganizationChange from '@/app/packages/hooks/organizations/handleOrganizationUpdate';
import { GetAutoApprovalState } from '@/app/packages/supabase/SupabaseOrgData';
import SwitchInBlock from '@/app/packages/ui/Switches/SwitchInBlock';
import OrganizationTab from '@/app/packages/ui/Tabs/OrganizationTab';

// caching local storage
import {
  GetKeyLocalStorage,
  SetKeyLocalStorage,
  RemoveKeyLocalStorage,
} from '@/app/packages/caching/LocalStorageRouter';

// next button
import { Button } from '@nextui-org/react';

// da modal component
import { Modal, useModal } from '@/app/packages/ui/Modals/ModalHelper';
import TabVertical from '@/app/packages/ui/Tabs/TabVertical';
import { refreshPage } from '@/app/packages/hooks/refreshPage';
import { IsUserIdGlobalAdmin } from '@/app/packages/supabase/SupabaseOrgData';

const LoggedInUserCard = ({
  username,
  profilePicture,
  organization,
  isEditingMode,
  desktopView,
}) => {
  const { modalRef: modalRef_changeOrganization, handleOpenModal: handleOpenModal_changeOrganization } = useModal(); // organization change modal
  const { modalRef: modalRef_filterBy, handleOpenModal: handleOpenModal_filterBy } = useModal(); // filter by modal
  const { modalRef: modalRef_settings, handleOpenModal: handleOpenModal_settings } = useModal(); // settings modal
  const { modalRef: modalRef_customization, handleOpenModal: handleOpenModal_customization } = useModal(); // customization modal



  // settings page state
  const [isAutoApproval, setAutoApproval] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const userId = GetKeyLocalStorage('userId');
  const route = '/manage'


  useEffect(() => {
    const fetchData = async () => {
      await IsUserIdGlobalAdmin(userId).then((data) => {
        setIsAdmin(data.global_admin);
      });
    };

    fetchData();
  }, [userId]);

  //get the pre-set auto approval state from the database
  useEffect(() => {
    const organization = GetKeyLocalStorage('organization');
    const fetchData = async () => {
      const autoApproval = await GetAutoApprovalState(organization);
      setAutoApproval(autoApproval);
    };
    fetchData();
  }, []);

  // handle filter by button press
  const handleFilterBy = () => {
    const cachedKey = GetKeyLocalStorage('cachedFilterTradesByKey');


    // if there is a cached key, set it to the filter key and remove the cached key
    if (cachedKey) {
      SetKeyLocalStorage('filterTradesByKey', cachedKey);
      RemoveKeyLocalStorage('cachedFilterTradesByKey');
      refreshPage();

      
    }
  };

  // loading state
  const [isLoading, setLoading] = useState(true);

  // check if all data is loaded
  useEffect(() => {
    if (username && profilePicture && organization) {
      setLoading(false);
    }
  }, [username, profilePicture, organization]);

  return (
    <>
      <Modal
        ref={modalRef_customization}
        buttonText={'Apply'}
        title={'Customize layout'}
        onButtonPress={refreshPage}
      >
        <SwitchInBlock
          label={'Show timeframe on trades'}
          subText={'Adds a chip to the trades to show the timeframe of the trade'}
          cacheKey={'showTimeframe'}
          supabaseKey={'show_tf_on_pending_trade'}
        />
        <SwitchInBlock
          label={'Show risk-to-reward on trades'}
          subText={'Adds a chip behind levels to show the RR of the level'}
          cacheKey={'showRr'}
          supabaseKey={'show_rr_on_pending_trade'}
        />
        <SwitchInBlock
          label={'Show time on trades'}
          subText={'Adds an extra row to show the time of the trade in the card'}
          cacheKey={'showTime'}
          supabaseKey={'show_time_on_pending_trade'}
        />
        <SwitchInBlock
          label={'Show pips away on trades'}
          subText={'Adds an extra row to show the pips away of the trade in the card'}
          cacheKey={'showPipsAway'}
          supabaseKey={'show_pips_away_on_pending_trade'}
        />
        <SwitchInBlock
          label={'Show current price on trades'}
          subText={'Adds an extra row to show the current price of the trade in the card'}
          cacheKey={'showCurrentPrice'}
          supabaseKey={'show_current_price_on_pending_trade'}
        />
      </Modal>
      <Modal
        ref={modalRef_changeOrganization}
        buttonText={'Change organization'}
        title={'Change organization'}
        onButtonPress={handleOrganizationChange}
      >
        <OrganizationTab
          organizationNames={['Xylex', 'Diamant Capital', 'Trades By Rob']}
        />
      </Modal>

      <Modal
        ref={modalRef_filterBy}
        buttonText={'Filter'}
        title={'Filter trades by trade status'}
        onButtonPress={handleFilterBy}
      >
        <TabVertical
          label={'Pick a trade status to filter by'}
          options={['All', 'Unapproved', 'Pending', 'Entry', 'TP1', 'TP2', 'TP3', 'Invalid']}
          cacheValueKey={'cachedFilterTradesByKey'}
        />
      </Modal>

      <Modal
        ref={modalRef_settings}
        buttonText={'Save settings'}
        title={'Organization settings'}
        onButtonPress={refreshPage}
      >
        <SwitchInBlock
          label={'Enable auto-approval'}
          subText={'Automatically approves the trades without needing manual approval'}
          supabaseKey={'auto_approval'}
          cacheKey={'autoApproval'}
          organizationData={true}
        />
      </Modal>

      <div className="ml-[11px] z-0">
        {isLoading ? (
          <div className="h-[60px] w-[135px]">
            <SkeletonLoader width={'full'} />
          </div>
        ) : (
          <div className="ml-[5px] flex flex-row gap-3 items-center">
            {!desktopView && (
              <ToolTipNext
                className="font-normal bg-secondary text-primary rounded-md text-sm px-2 border-primary border"
                content={'Click to sign out'}
              >
                <button
                  className={`rounded-md p-2 flex flex-row items-center gap-3 hover:bg-accent transition cursor-pointer bg-primary -ml-[10px] select-none`}
                  onClick={handleSignOut}
                >
                  <ProfilePicTiny profilePicture={profilePicture} />

                  <div className="text-left">
                    <p className="text-primary font-semibold">
                      {CapitalizeFirstLetter(username)}
                    </p>
                    <p className="text-secondary text-xs select-none">
                      {organization}
                    </p>
                  </div>
                </button>
              </ToolTipNext>
            )}

            <div>
              <Button
                type="button"
                isIconOnly={true}
                id="change-organization"
                className={`items-center justify-center text-sm font-semibold text-primary border-primary ${desktopView ? 'bg-secondary' : 'bg-primary'
                  } hover:bg-accent transition focus:outline-none focus:ring-2 focus:ring-primary rounded-md  w-[40px]`}
                variant="flat"
                color="warning"
                onPress={() => handleOpenModal_customization()}
              >
                <div>
                  <PaintBrushIcon className="w-6 h-6 text-accent" />
                </div>
              </Button>

              {isAdmin && (
                <Button
                  type="button"
                  isIconOnly={true}
                  id="change-organization"
                  className={`items-center justify-center text-sm font-semibold text-primary border-primary ml-[13px] ${desktopView ? 'bg-secondary' : 'bg-primary'
                    } hover:bg-accent transition focus:outline-none focus:ring-2 focus:ring-primary rounded-md  w-[40px]`}
                  variant="flat"
                  color="warning"
                  onPress={() => handleOpenModal_changeOrganization()}
                >
                  <div>
                    <BriefcaseIcon className="w-6 h-6 text-accent" />
                  </div>
                </Button>
              )}

              <Button
                type="button"
                isIconOnly={true}
                id="change-organization"
                className={`items-center justify-center text-sm font-semibold text-primary border-primary ml-[13px] ${desktopView ? 'bg-secondary' : 'bg-primary'
                  } hover:bg-accent transition focus:outline-none focus:ring-2 focus:ring-primary rounded-md  w-[40px]`}
                variant="flat"
                color="warning"
                onPress={() => handleOpenModal_filterBy()}
              >
                <div>
                  <BarsArrowDownIcon className="w-6 h-6 text-accent" />
                </div>
              </Button>

              <Button
                type="button"
                id="change-organization"
                isIconOnly={true}
                className={`items-center justify-center text-sm font-semibold text-primary border-primary ${desktopView ? 'bg-secondary' : 'bg-primary'
                  } hover:bg-accent transition focus:outline-none focus:ring-2 focus:ring-primary rounded-md  w-[40px] ml-[13px]`}
                variant="flat"
                color="warning"
                onPress={() => handleOpenModal_settings()}
              >
                <div>
                  <Cog8ToothIcon className="w-6 h-6 text-accent" />
                </div>
              </Button>
            </div>

            {desktopView && (
              <div className="mr-[4px] pl-[10px]">
                <ToolTipNext
                  className="font-normal bg-secondary text-primary rounded-md text-sm px-2 border-primary border select-none"
                  content={'Click to sign out'}
                >
                  <button
                    className={`rounded-md p-2 flex flex-row items-center gap-3 hover:bg-accent transition cursor-pointer ${desktopView ? 'bg-secondary' : 'bg-primary'
                      } -ml-[10px] select-none`}
                    onClick={handleSignOut}
                  >
                    <ProfilePicTiny profilePicture={profilePicture} />

                    <div className="text-left">
                      <p className="text-primary font-semibold">
                        {CapitalizeFirstLetter(username)}
                      </p>
                      <p className="text-secondary text-xs select-none">
                        {organization}
                      </p>
                    </div>
                  </button>
                </ToolTipNext>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default LoggedInUserCard;
