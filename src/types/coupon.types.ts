export interface ICoupon{
    id: string;
    creatorId: string;
    code: string;
    discountType: "fixed" | "percentage";
    discountValue: string | null;
    maxUses: number | null;
    currentUses: number;
    validFrom: string;
    validUntil: string;
    minPurchaseAmount: string | null;
    isActive: boolean;
    applicableCourses: string[] | null;
    applicableAccountTypes: string[] | null;
    createdAt: string;
    updatedAt: string;
    couponId: string | null;

}
