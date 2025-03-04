export interface IJob {
    id: string;
    creatorId: string;
    categoryId: string;
    title: string;
    slug: string;
    company: string;
    logo: string;
    workplaceType: "remote" | "onsite" | "hybrid";
    location: string;
    jobType: "full-time" | "part-time" | "contract" | "internship";
    description: string | null;
    skills: string[] | null;
    views: number;
    applyLink: string | null;
    applicantCollectionEmailAddress: string | null;
    rejectionEmails: boolean;
    status: "active" | "inactive" | "closed";
    createdAt: string; // ISO date format
    updatedAt: string; // ISO date format
  }