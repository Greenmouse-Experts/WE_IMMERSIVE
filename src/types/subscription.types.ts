export interface ISubscription {
  id: string;
  name: string;
  duration: number;
  price: string;
  currency: string;
  period: string;
  features: string[] | null;
  createdAt: string;
  updatedAt: string;
}
