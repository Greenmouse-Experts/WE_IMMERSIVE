interface AssetCategory {
    id: string;
    name: string;
}

interface User {
    id: string;
    accountType: string;
    name: string;
    email: string;
}

export interface IAsset {
    id: string;
    creatorId: string;
    categoryId: string;
    assetName: string;
    assetDetails: string;
    assetUpload: string;
    assetThumbnail: string;
    specificationSubjectMatter: string;
    specification: string;
    specificationMedium: string;
    specificationSoftwareUsed: string;
    specificationTags: string[];
    specificationVersion: string;
    pricingType: string;
    currency: string;
    amount: number;
    status: string;
    adminNote: string | null;
    createdAt: string;
    updatedAt: string;
    assetCategory: AssetCategory;
    user: User;
    admin: string | null;
}