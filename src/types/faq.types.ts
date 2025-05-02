export interface IFaqCategory {
    id: string;
    name: string;
    description: string | null;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  }


export interface IFaq {
    id: string;
    question: string;
    slug: string;
    answer: string;
    categoryId: string;
    status: 'draft' | 'published'; // Add more if applicable
    userId: string | null;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    category: IFaqCategory;
  }