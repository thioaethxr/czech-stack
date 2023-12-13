import type { Category } from './category';
import type { UserInfo } from '@typings/user';

/**
 * Represents a tutorial with its properties.
 */
export interface Tutorial {
  id: number;
  name: string;
  slug: string;
  description: string;
  date_created: string;
  content: string;
  author_id: number | null;
  category_id: Category['id'] | null;
  author?: UserInfo;
}
