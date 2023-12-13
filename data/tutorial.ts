import { createClient } from '@supabase/supabase-js';

import type { Tutorial } from '@typings/tutorial';
import type { Category } from '@typings/category';

/**
 * Fetches tutorials from the Supabase database.
 *
 * @param {Category['id']} [categoryId] - The optional category ID to filter tutorials by.
 * @returns {Promise<Tutorial[]>} A promise resolving to an array of tutorials.
 */
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
        display_name
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

/**
 * Fetches a tutorial based on its slug from the Supabase database.
 *
 * @param {string} slug - The slug of the tutorial to fetch.
 * @returns {Promise<Tutorial | null>} A promise resolving to the fetched tutorial or null if not found.
 */
export const fetchTutorialBySlug = async (
  slug: string
): Promise<Tutorial | null> => {
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
