// SupabaseUserData.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, SUPABASE_ANON_KEY);

export async function IsUserIdGlobalAdmin(userId) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('global_admin')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user settings:', error);
      return { global_admin: false }; // Return default false on error
    }

    return data;
  } catch (error) {
    console.error('Unexpected error:', error);
    return { global_admin: false }; // Return default false on error
  }
}


export async function GetUserSettings(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;

  return data[0];
}

export async function UpdateUserPreferences(
  userId, 
  preferenceKey, 
  preferenceValue
) {
  if (preferenceKey === 'organization') {
    throw new Error('Updating organization is not allowed.');
  }

  const { data, error } = await supabase
    .from('users')
    .update({
      [preferenceKey]: preferenceValue
    })
    .eq('user_id', userId);

  if (error) throw error;

  return data;
}

export async function UpdateOrgPreferences(
  organization, 
  preferenceKey, 
  preferenceValue
) {
  if (preferenceKey === 'organization') {
    throw new Error('Updating organization is not allowed.');
  }

  const { data, error } = await supabase
    .from('organizations')
    .update({
      [preferenceKey]: preferenceValue
    })
    .eq('organization_name', organization);

  if (error) throw error;

  return data;
}

export async function UpdateTradePreferences(
  tradeHash, 
  preferenceKey, 
  preferenceValue
) {
  if (preferenceKey === 'trade_hash') {
    throw new Error('Updating trade_hash is not allowed.');
  } else if (preferenceKey === 'organization') {
    throw new Error('Updating organization is not allowed.');
  }

  const { data, error } = await supabase
    .from('trades')
    .update({
      [preferenceKey]: preferenceValue
    })
    .eq('trade_hash', tradeHash);

  if (error) throw error;

  return data;
}


export async function GetTradePreferences(tradeHash, preferenceKey) {
  const { data, error } = await supabase
    .from('trades')
    .select(preferenceKey)
    .eq('trade_hash', tradeHash);

  if (error) throw error;

  return data[0];
}



export async function ChangeOrganizationByUserId(userId, organization) {
  const { data, error } = await supabase
    .from('users')
    .update({ organization: organization })
    .eq('user_id', userId);

  if (error) throw error;

  return data;
}


export async function ChangeAutoApprovalByUserId(organization, autoApproval) {
  const { data, error } = await supabase
    .from('organizations')
    .update({ 
      auto_approval: autoApproval 
    })
    .eq('organization_name', organization);

  if (error) throw error;

  return data;
}


export async function GetAutoApprovalState(organization) {
  const { data, error } = await supabase
    .from('organizations')
    .select('auto_approval')
    .eq('organization_name', organization);

  if (error) throw error;

  if (data.length === 0) {
    return false;
  }

  return data[0].auto_approval;
}


export async function AddAuditLogEntry(username, userId, route, action) {
  const current_unixtime = Math.floor(Date.now() / 1000);

  const { data, error } = await supabase
    .from('audit_log')
    .insert([
      {
        username: username,
        user_id: userId,
        action: action,
        unix_time: current_unixtime,
        route: route
      }
    ]);

  if (error) throw error;

  return data;
}