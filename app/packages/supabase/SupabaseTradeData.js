// SupabaseUserData.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, SUPABASE_ANON_KEY);

import { openDB } from 'idb';

async function getDB() {
  return openDB('tradeDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('trades')) {
        db.createObjectStore('trades', { keyPath: 'organization_id' });
      }
    },
  });
}

export async function GetPendingTradesByOrganization(organization) {
  const db = await getDB();
  const cachedData = await db.get('trades', organization);

  if (cachedData) {
    // Background fetch to update the indexedDb data

    fetchAndUpdateTrades(organization, db);

    console.log('Using indexedDb cached data:', cachedData.data);
    return cachedData.data;
  }

  const { data, error } = await supabase
    .from('trades')
    .select('*')
    .eq('organization_id', organization);

  if (error) throw error;

  if (data.length === 0) {
    return null;
  }

  console.log('Updating indexedDb with new data:', data);
  await db.put('trades', { organization_id: organization, data });

  return data;
}

async function fetchAndUpdateTrades(organization, db) {
  try {
    const { data, error } = await supabase
      .from('trades')
      .select('*')
      .eq('organization_id', organization);

    if (error) throw error;

    if (data.length > 0) {
      console.log('Updating indexedDb with new data:', data);
      await db.put('trades', { organization_id: organization, data });
    }
  } catch (error) {
    console.error('Error fetching and updating trades:', error);
  }
}


export async function GetAlertStatusByTradeHash(tradeHash) {
  const { data, error } = await supabase
    .from('trades')
    .select('alerting')
    .eq('trade_hash', tradeHash);

  if (error) throw error;

  if (data.length === 0) {
    return null;
  }

  return data[0].alerting;
}

export async function UpdateTradeAlertStatus(tradeHash, alertStatus) {
  const { data, error } = await supabase
    .from('trades')
    .update({ alerting: alertStatus })
    .eq('trade_hash', tradeHash);

  if (error) throw error;

  return data;
}


export async function UpdateTradeStatus(tradeHash, tradeStatus, pending = true) {
  const { data, error } = await supabase
    .from('trades')
    .update({ 
      trade_status: tradeStatus,
      pending: pending
    })
    .eq('trade_hash', tradeHash);

  if (error) throw error;

  return data;
}

export async function UpdateMetadataBool(tradeHash, metadataBool) {
  const { data, error } = await supabase
    .from('trades')
    .update({ metadata_updating: metadataBool })
    .eq('trade_hash', tradeHash);

  if (error) throw error;

  return data;
}