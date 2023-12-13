import { createClient } from '@supabase/supabase-js';

import type { UserInfo } from '@typings/user';

/**
 * Fetches user information for all users from the Supabase database.
 *
 * @returns {Promise<UserInfo[]>} A promise resolving to an array of user information.
 */
export const fetchUsers = async (): Promise<UserInfo[]> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: users } = await supabase
    .from('users')
    .select('*')
    .returns<UserInfo[]>();
  return users || [];
};

/**
 * Fetches user information from the Supabase database based on user ID.
 *
 * @param {UserInfo['id']} id - The user ID to fetch information for.
 * @returns {Promise<UserInfo | null>} A promise resolving to the fetched user information or null if not found.
 */
export const fetchUserById = async (
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
    .limit(1)
    .single<UserInfo>();
  return userInfo || null;
};

/**
 * Fetches user information from the Supabase database based on the display name (username).
 *
 * @param {UserInfo['display_name']} username - The display name (username) to fetch information for.
 * @returns {Promise<UserInfo | null>} A promise resolving to the fetched user information or null if not found.
 */
export const fetchUserByUsername = async (
  username: UserInfo['display_name']
): Promise<UserInfo | null> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: userInfo } = await supabase
    .from('users')
    .select('*')
    .eq('display_name', username)
    .limit(1)
    .single<UserInfo>();
  return userInfo || null;
};
