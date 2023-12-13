import { NextResponse } from 'next/server';

import { getSupabaseRouteHandlerClient } from '@utils/supabase';

import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const supabase = getSupabaseRouteHandlerClient();

  await supabase.auth.signOut();

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  });
}
