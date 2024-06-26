const LEGACY_XYLEX_API_URL = process.env.NEXT_PUBLIC_LEGACY_API_URL;
const LEGACY_XYLEX_API_KEY = process.env.NEXT_PUBLIC_LEGACY_API_KEY;

import axios from 'axios';

async function ApproveSignalTradesByRob(tradeHash) {
    const data = {
        trade_hash: tradeHash,
        api_key: LEGACY_XYLEX_API_KEY,
        approved: 'True'
    }

    const url = `${LEGACY_XYLEX_API_URL}/trades/trb/fetch`;

    const params = new URLSearchParams();
    params.append('api_key', data.api_key);
    params.append('tradehash', data.trade_hash);
    params.append('approved', data.approved);

    const urlWithParams = `${url}?${params.toString()}`;

    const response = await axios.get(urlWithParams, { mode: 'no-cors' });

    if (response.status !== 200) {
        throw new Error(`Failed to send signal: ${response.status}`);
    }

    return response.data['status_code'];
}

export {
    ApproveSignalTradesByRob
}