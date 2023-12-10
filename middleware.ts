import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

import type { NextRequest } from 'next/server';

/**
 * Middleware function for Supabase authentication in Next.js.
 *
 * @param {NextRequest} req - The Next.js request object.
 * @returns {Promise<NextResponse>} A promise resolving to the Next.js response object.
 */
export async function middleware(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
