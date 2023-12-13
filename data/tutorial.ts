import { createClient } from '@supabase/supabase-js';

import type { Tutorial } from '@typings/tutorial';
import type { Category } from '@typings/category';

export const fetchTutorials = async (
  categoryId?: Category['id']
): Promise<Tutorial[]> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  let query = supabase.from('tutorials').select(
    `
      *,
      author:users (
        email
      )
    `
  );
  if (categoryId !== undefined && categoryId !== null) {
    query = query.eq('category_id', categoryId);
  }
  const { data: tutorials, error } = await query.returns<Tutorial[]>();
  if (error) {
    console.error(error);
    return [];
  }
  return tutorials || [];
};

export const fetchTutorial = async (slug: string): Promise<Tutorial | null> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: category } = await supabase
    .from('tutorials')
    .select('*')
    .eq('slug', slug)
    .single<Tutorial>();
  return category || null;
};
