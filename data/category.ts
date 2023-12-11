import { createClient } from '@supabase/supabase-js';

import type { Category } from '@typings/category';

export const fetchCategories = async (): Promise<Category[]> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: categories } = await supabase
    .from('Categories')
    .select('*')
    .returns<Category[]>();
  return categories || [];
};

export const fetchCategory = async (slug: string): Promise<Category | null> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: category } = await supabase
    .from('Categories')
    .select('*')
    .eq('slug', slug)
    .returns<Category[]>();
  return category?.[0] || null;
};
