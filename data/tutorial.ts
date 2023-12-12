import { createClient } from '@supabase/supabase-js';

import type { Tutorial } from '@typings/tutorial';
import type { Category } from '@typings/category';

export const fetchTutorials = async (
  categoryId: Category['id']
): Promise<Tutorial[]> => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );
  const { data: tutorials, error } = await supabase
    .from('tutorials')
    .select(
      `
        *,
        author:users (
          email
        )
      `
    )
    .returns<Tutorial[]>();
  if (error) {
    console.error(error);
    return [];
  }
  console.log(tutorials);
  return tutorials || [];
};
