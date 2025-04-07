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

export interface IBankDetails {
  id: string;
  userId: string;
  accountNumber: string;
  bankName: string;
  routingNumber: string;
  accountType: string;
  country: string;
  countryCode: string;
  currency: string;
  accountName: string;
  bankCode: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
