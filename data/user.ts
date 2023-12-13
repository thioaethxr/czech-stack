import { createClient } from '@supabase/supabase-js';

import type { UserInfo } from '@typings/user';

/**
 * Fetches user information from the Supabase database based on user ID.
 *
 * @param {UserInfo['id']} id - The user ID to fetch information for.
 * @returns {Promise<UserInfo | null>} A promise resolving to the fetched user information or null if not found.
 */
export const fetchUser = async (
  id: UserInfo['id']
): Promise<UserInfo | null> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: userInfo } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single<UserInfo>();
  return userInfo || null;
};
