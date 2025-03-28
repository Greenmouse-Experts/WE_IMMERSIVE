interface ICategoryChildren {
  id: string;
  name: string;
  description: string;
  parentId: string;
  isActive: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  parentId: string;
  isActive: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
  children?: ICategoryChildren[];
}
