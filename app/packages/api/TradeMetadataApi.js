const XYLEX_API_URL = process.env.NEXT_PUBLIC_XYLEX_API_URL;

import axios from 'axios';

import { UpdateMetadataBool } from '@/app/packages/supabase/SupabaseTradeData';
import { SetKeyLocalStorage, GetKeyLocalStorage } from '../caching/LocalStorageRouter';

function RefreshMetadata(tradeHash) {
    const disabledMetadataHashes = JSON.parse(GetKeyLocalStorage('disabledMetadataHashes')) || [];

    if (disabledMetadataHashes.includes(tradeHash)) {
        console.log(`Metadata streaming is disabled for trade hash: ${tradeHash}`);
        return Promise.resolve({ message: `Metadata streaming is disabled for trade hash: ${tradeHash}` });
    }

    const data = {
        tradeHash: tradeHash
    }
    const url = `${XYLEX_API_URL}/hash/trade/update_metadata`;
    console.log('url', url);
    const params = new URLSearchParams();
    params.append('trade_hash', data.tradeHash);

    const urlWithParams = `${url}?${params.toString()}`;

    // Wait at least 5 seconds for a response
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(urlWithParams, { mode: 'no-cors' })
                .then(response => {
                    console.log(response);
                    if (response.data.message === "trade metadata streaming is disabled for this hash") {
                        const tradeHash = response.data.trade_hash;
                        const updatedDisabledMetadataHashes = [...disabledMetadataHashes, tradeHash];

                        SetKeyLocalStorage('disabledMetadataHashes', JSON.stringify(updatedDisabledMetadataHashes));
                        resolve(response.data);
                    } else if (response.status !== 200) {
                        
                        reject(response.data);
                    } else {
                        resolve(response.data['status']);
                    }
                })
                
                .catch(async error => {
                    if (error.response && error.response.data && error.response.data.error_message === "Incorrect usage of endpoint or requested resource was not present on the remote") {
                        await UpdateMetadataBool(tradeHash, false);
                    }
                    reject(error);
                });
        }, 5000);
    });
}

export default RefreshMetadata;
