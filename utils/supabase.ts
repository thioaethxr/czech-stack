'use server';

import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { createServerClient } from '@supabase/ssr';

/**
 * Creates a Supabase server client for server-side rendering.
 */
export const createSupabaseServerClient = async () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value || '';
        },
      },
    }
  );
};

/**
 * Gets the Supabase route handler client.
 */
export const getSupabaseRouteHandlerClient = () => {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });
  return supabase;
};

/**
 * Gets the user session from Supabase using the route handler client.
 */
export const getUserSession = () => {
  const supabase = getSupabaseRouteHandlerClient();
  return supabase.auth.getSession();
};
