import { NextResponse } from 'next/server';

import { getSupabaseRouteHandlerClient } from '@utils/supabase';

import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = getSupabaseRouteHandlerClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin);
}
