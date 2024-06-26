import React, { useState, useEffect } from 'react';
import { TrashIcon, EyeIcon, CheckIcon } from '@heroicons/react/24/outline';
import { copyToClipboard } from '@/app/packages/hooks/copytoClipboard';
import DirectionChip from '@/app/packages/ui/Chips/DirectionChip';
import SwitchInBlock from '@/app/packages/ui/Switches/SwitchInBlock';
import {
  GetAlertStatusByTradeHash,
  UpdateTradeStatus
} from '@/app/packages/supabase/SupabaseTradeData';
import {
  GetKeyLocalStorage,
  RemoveKeyLocalStorage
} from '@/app/packages/caching/LocalStorageRouter';
import ButtonPrimary from '@/app/packages/ui/Buttons/ButtonPrimary';
import TabHorizontal from '@/app/packages/ui/Tabs/TabHorizontal';
import SendTp from '@/app/packages/api/SendTp';
import { ValueCopyChipInlineLabel } from '@/app/packages/ui/Chips/ValueCopyChip';
import ButtonIcon from '@/app/packages/ui/Buttons/ButtonIcon';
import TradeStatusChip from '@/app/packages/ui/Chips/TradeStatusChip';
import { refreshPage } from '@/app/packages/hooks/refreshPage';
import { ApproveSignalTradesByRob } from '@/app/packages/api/ApproveTrade';
import { TimeframeChip } from '@/app/packages/ui/XylexUI';


import { Modal, useModal } from '@/app/packages/ui/Modals/ModalHelper';

import { AddAuditLogEntry } from '@/app/packages/supabase/SupabaseOrgData';

const PendingTradeCard = ({
  trade,
  index,
  triggerNotification,
  setCurrentDrilldownTradeHash,
  marginTop = null,
  setIsEditingMode
}) => {
  // create the modal ref instances
  const { modalRef: modalRef_manualTp, handleOpenModal: handleOpenModal_manualTp } = useModal(); // manual tp modal
  const { modalRef: modalRef_invalidate, handleOpenModal: handleOpenModal_invalidate } = useModal(); // invalidate modal
  const { modalRef: modalRef_approve, handleOpenModal: handleOpenModal_approve } = useModal(); // approve modal

  // editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [isSelectedTradeAlerts, setSelectedTradeAlerts] = useState(false);

  const organization = GetKeyLocalStorage('organization');
  const username = GetKeyLocalStorage('username');
  const userId = GetKeyLocalStorage('userId');
  const route = '/manage'

  // handle approve trade
  const handleApproveTrade = async () => {
    try {
      await UpdateTradeStatus(trade.trade_hash, 'pending');
      // calling the signal sending api LEGACY

      
      const action = 'approved trade signal with hash ' + trade.trade_hash;
      await AddAuditLogEntry(username, userId, route, action);

      if (organization === 'trades_by_rob') {
        const status = await ApproveSignalTradesByRob(trade.trade_hash);
        if (status === 200) {
          refreshPage();
        }
      } 
    } catch (error) {
      console.error('Error approving trade:', error);
    }
  };

  // handle invalidate trade
  const handleButtonInvalidate = async () => {
    try {
      await UpdateTradeStatus(trade.trade_hash, 'invalid', false);
      
      // call audit log
      const action = 'invalidated trade with hash ' + trade.trade_hash;
      await AddAuditLogEntry(username, userId, route, action);


      refreshPage();
    } catch (error) {
      console.error('Error updating trade status:', error);
    }
  };

  // fetch the alert status
  useEffect(() => {
    const fetchAlertStatus = async () => {
      if (isEditing) {
        try {
          const alertStatus = await GetAlertStatusByTradeHash(trade.trade_hash);
          setSelectedTradeAlerts(alertStatus);

        } catch (error) {
          console.error('Error fetching alert status:', error);
        }
      }
    };
    fetchAlertStatus();
  }, [trade.trade_hash, isEditing]);

  // handle manual alert
  const handleManualAlert = async () => {
    try {
      const tp_type = GetKeyLocalStorage(
        'cachedManualAlertTradeTp'
      ).toLowerCase();
      await SendTp(trade.trade_hash, tp_type);
      RemoveKeyLocalStorage('cachedManualAlertTradeTp');

      // call audit log
      const action = 'called manual tp ' + tp_type + ' for trade with hash ' + trade.trade_hash;
      await AddAuditLogEntry(username, userId, route, action);

    } catch (error) {
      console.error('Error sending manual alert:', error);
    }
  };

  // handle edit click
  const handleEditClick = () => {
    setCurrentDrilldownTradeHash(trade.trade_hash);
    setIsEditing((prevState) => !prevState);
    setIsEditingMode((prevState) => !prevState);

    if (isEditing) {
      setCurrentDrilldownTradeHash(null);
    }
  };

  // show timeframe and rr state by default
  const [isShowTimeframe, setShowTimeframe] = useState(false);
  const [isShowRr, setShowRr] = useState(false);
  const [isShowTime, setShowTime] = useState(false);
  const [isShowPipsAway, setShowPipsAway] = useState(false);
  const [isShowCurrentPrice, setShowCurrentPrice] = useState(false);

  useEffect(() => {
    // set the preferences
    setShowTimeframe(GetKeyLocalStorage('showTimeframe') === 'true');
    setShowRr(GetKeyLocalStorage('showRr') === 'true');
    setShowTime(GetKeyLocalStorage('showTime') === 'true');
    setShowPipsAway(GetKeyLocalStorage('showPipsAway') === 'true');
    setShowCurrentPrice(GetKeyLocalStorage('showCurrentPrice') === 'true');

  }, []);


  // useEffect(() => {
  //   const handleMetadataRefresh = () => {
  //     try {
  //       RefreshMetadata(trade.trade_hash);
  //     } catch (error) {
  //       console.error('Error refreshing metadata:', error);
  //     }
  //   };
  //   handleMetadataRefresh();
  // }, [trade.trade_hash]);

  
  return (
    <div className={`${isEditing ? '' : marginTop}`}>
      <Modal
        ref={modalRef_invalidate}
        buttonText={'Invalidate alert'}
        title={'Trade invalidation confirmation'}
        onButtonPress={handleButtonInvalidate}
      >
        <div>
          <p>Are you sure you want to invalidate this trade?</p>

          <p>
            Invalidation is irreversible and will remove this trade from the
            list of pending trades, accompanied by a notification to the channel
            members.
          </p>

          <p className="text-yellow-500 bg-red-accent rounded-md p-3 border-yellow-400 border-2 font-bold">
            Trade messages for invalidation are not yet implemented !!!
            <br></br>It WILL update the status however!!
          </p>

          <p className="rounded-md bg-input-primary text-accent p-1 text-center text-[14px] cursor-default mt-2 select-none">
            {trade.trade_hash}
          </p>
        </div>
      </Modal>

      <Modal
        ref={modalRef_manualTp}
        buttonText={'Send alert'}
        title={'Call manual alert'}
        onButtonPress={handleManualAlert}
      >
        <TabHorizontal
          options={['TP1', 'TP2', 'TP3', 'SLE']}
          cacheValueKey={'cachedManualAlertTradeTp'}
        />
      </Modal>

      <Modal
        ref={modalRef_approve}
        buttonText={'Approve trade'}
        title={'Approve trade'}
        onButtonPress={handleApproveTrade}
      >
        <p className="text-secondary">
          Are you sure you want to approve this trade?
        </p>
      </Modal>

      <div
        key={index}
        className={`transition-all duration-500 ease-in-out z-10 ${isEditing ? ' !h-[98vh] !z-50 p-[20px]  !overflow-hidden w-full' : `w-96  h-fit   p-4 border border-primary`
          } text-primary rounded-md mb-4 flex mx-auto flex-col `}
      >
        
        <div>
          <div className={`flex flex-row 0 ${isEditing ? 'mt-[80px]' : ''}`}>
            <div className="pl-2 pt-1 text-nowrap w-[200px] ">
              <div className="font-semibold text-md flex flex-row justify-between ">
                <span className="text-lg select-none ">{trade.pairname}</span>

                <div className="flex">
                  <DirectionChip direction={trade.direction} />
                </div>
              </div>

              <div className="w-[350px]">
                {/* render 5x ValueCopyChipInlineLabel components */}
                {[
                  {
                    value: trade.entry_level,
                    notificationType: 'EntryLevelCopied',
                    label: 'Entry Level',
                    showRr: false,
                  },
                  {
                    value: trade.stoploss_level,
                    notificationType: 'StoplossLevelCopied',
                    label: 'Stoploss Level',
                    showRr: false,
                  },
                  {
                    value: trade.tp1_level,
                    notificationType: 'TP1LevelCopied',
                    label: 'TP1 Level',
                    showRr: true,
                    Rr: trade.tp1_rr,
                  },
                  {
                    value: trade.tp2_level,
                    notificationType: 'TP2LevelCopied',
                    label: 'TP2 Level',
                    showRr: true,
                    Rr: trade.tp2_rr,
                  },
                  {
                    value: trade.tp3_level,
                    notificationType: 'TP3LevelCopied',
                    label: 'TP3 Level',
                    showRr: true,
                    Rr: trade.tp3_rr,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-row items-center">
                    <ValueCopyChipInlineLabel
                      value={item.value}
                      copy={true}
                      triggerNotification={triggerNotification}
                      notificationType={item.notificationType}
                      label={item.label}
                      Rr={item.Rr}
                      showRr={item.showRr && isShowRr}
                    />
                  </div>
                ))}

                {isShowPipsAway && (
                  <div className="flex flex-row items-center">
                    <ValueCopyChipInlineLabel
                      value={trade.pips_away}
                      copy={false}
                      label={'Pips away'}
                    />
                  </div>
                )}

                {isShowCurrentPrice && (
                  <div className="flex flex-row items-center">
                    <ValueCopyChipInlineLabel
                      value={trade.current_price}
                      copy={false}
                      label={'Current price'}
                    />
                  </div>
                )}


                {isShowTime && (
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row justify-between items-center">
                      <p className="select-none w-[110px]">Time</p>
                      <span
                        className={`rounded-md bg-input-primary p-[3px] text-accent text-center text-[14px] cursor-pointer hover:bg-accent mt-2 select-none transition ml-[22px] px-2 w-[60px] h-[27px] flex items-center`}
                      >
                        {(() => {
                          const date = new Date(trade.created_at);
                          const now = new Date();
                          return date.getFullYear() === now.getFullYear()
                            ? date.toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                            })
                            : date.toLocaleDateString();
                        })()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div>
                <div className="flex justify-end ">
                  <div className="flex flex-col ">
                    <ButtonIcon onPress={handleEditClick}>
                      <EyeIcon className="h-6 w-6 text-accent" />
                    </ButtonIcon>

                    <ButtonIcon onPress={handleOpenModal_invalidate}>
                      <TrashIcon className="h-6 w-6 text-accent" />
                    </ButtonIcon>

                    {trade.trade_status === 'unapproved' && (
                      <ButtonIcon onPress={handleOpenModal_approve}>
                        <CheckIcon className="h-6 w-6 text-accent" />
                      </ButtonIcon>
                    )}
                  </div>
                </div>
              </div>

              <div className=" flex  flex-row justify-end h-full">
                <div className="flex flex-col justify-end">
                  <div
                    className={`flex ${trade.trade_status === 'unapproved' ? 'flex-col' : 'flex-row'} gap-1`}
                  >

                    {trade.trade_status === 'unapproved' || trade.trade_status === 'pending' ? (
                      <div className="flex justify-end flex-col items-end gap-1">
                        {isShowTimeframe && (
                          <TimeframeChip timeframe={trade.timeframe} />
                        )}
                        <TradeStatusChip tradeStatus={trade.trade_status} />
                      </div>
                    ) : (
                      <>
                        <TradeStatusChip tradeStatus={trade.trade_status} />
                        {isShowTimeframe && (
                          <TimeframeChip timeframe={trade.timeframe} />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <p
              className={`rounded-md bg-input-primary text-accent p-1 text-center text-[14px] cursor-pointer hover:bg-accent transition  ${isEditing ? 'mt-[20px]' : 'mt-2'
                } select-none`}
              onClick={() =>
                copyToClipboard(trade.trade_hash, triggerNotification)
              }
            >
              {trade.trade_hash}
            </p>
          </div>
        </div>

        {/* in settings mode */}
        {isEditing && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-[25px] gap-2">
            <SwitchInBlock
              label="Toggle automatic alerts"
              subText="Enabled by default, this only affects the current trade"
              cacheKey="cachedTradeAlerts"
              supabaseKey={'alerting'}
              tradeHash={trade.trade_hash}
            />

            <div className="flex items-start gap-2 text-nowrap">
              <ButtonPrimary
                label={'Call manual alert'}
                setValue={handleOpenModal_manualTp}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingTradeCard;