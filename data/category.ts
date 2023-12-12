import { createClient } from '@supabase/supabase-js';

import type { Category } from '@typings/category';

/**
 * Fetches all categories from the Supabase database.
 *
 * @returns {Promise<Category[]>} A promise resolving to an array of categories.
 */
export const fetchCategories = async (): Promise<Category[]> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .returns<Category[]>();
  return categories || [];
};

/**
 * Fetches a category based on its slug from the Supabase database.
 *
 * @param {string} slug - The slug of the category to fetch.
 * @returns {Promise<Category | null>} A promise resolving to the fetched category or null if not found.
 */
export const fetchCategory = async (slug: string): Promise<Category | null> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single<Category>();
  return category || null;
};
