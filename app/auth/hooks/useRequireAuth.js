import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SetKeyLocalStorage } from '@/app/packages/caching/LocalStorageRouter';
import { GetProfilePicById } from '@/app/packages/supabase/SupabaseUserData';
import stripNameFromEmail from '@/app/packages/hooks/formatting/StripNameFromEmail';

export function useRequireAuth() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  const supabaseClient = createClientComponentClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: session } = await supabaseClient.auth.getSession();
        if (session.session === null) {
          setLoading(false);
          return;
        }

        const user = session.session.user;
        const provider_type = user.app_metadata.provider;

        if (provider_type === 'google') {
          const username = user.user_metadata.full_name;
          const profilePic = user.user_metadata.avatar_url;

          SetKeyLocalStorage('username', username);
          SetKeyLocalStorage('profilePic', profilePic);
        } else if (provider_type === 'discord') {
          const username = user.user_metadata.custom_claims.global_name;
          const profilePic = user.user_metadata.avatar_url;
          SetKeyLocalStorage('username', username);
          SetKeyLocalStorage('profilePic', profilePic);
        } else {
          const username = user.user_metadata.full_name || stripNameFromEmail(user.email);
          SetKeyLocalStorage('username', username);
          
          // this is for getting pfp when the oauth2 provider doesnt provide it
          const profilePic = await GetProfilePicById(user.id);
          SetKeyLocalStorage('profilePic', profilePic);
        }

        const userId = user.id;
        setUserId(userId);
        SetKeyLocalStorage('userId', userId);
        setLoading(false);
      } catch (error) {
        console.error('Error checking auth', error);
        setLoading(false);
      }
    };

    checkAuth();
  });

  return {
    loading,
    userId,
  };
}
