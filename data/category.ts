import { createSupabaseServerClient } from '@utils/supabase';

import type { Category } from '@typings/category';

export const fetchCategories = async (): Promise<Category[]> => {
  const supabase = await createSupabaseServerClient();
  const { data: categories } = await supabase
    .from('Categories')
    .select('*')
    .returns<Category[]>();
  return categories || [];
};
