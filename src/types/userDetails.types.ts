interface KycDocument {
    id: string;
    userId: string;
    documentType: string;
    documentUrl: string;
    documentUrlBack: string;
    uploadedAt: string;
    vettingStatus: string;
    reason: string | null;
    vettedBy: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface UserAdminData {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
    gender: string | null;
    phoneNumber: string;
    dateOfBirth: string;
    educationalLevel: string | null;
    schoolId: string | null;
    professionalSkill: string;
    industry: string;
    jobTitle: string | null;
    referralCode: string;
    photo: string;
    evToken: string | null;
    accountType: string;
    status: string;
    verified: boolean;
    reason: string | null;
    createdAt: string;
    updatedAt: string;
    kyc_docs: KycDocument[];
    kyc_verification: any[];
    wallet: any | null;
    withdrawalAccount: any | null;
}



