

  export interface IBlogCategory {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  }
  
  export interface IBlog {
    id: string;
    title: string;
    slug: string;
    content: string;
    categoryId: string;
    featuredImage: string | null;
    status: 'draft' | 'published'; // Add more if applicable
    userId: string | null;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    category: IBlogCategory;
  }
  