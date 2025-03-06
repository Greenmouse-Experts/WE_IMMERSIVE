interface ILesson {
    id: string;
    moduleId: string;
    title: string;
    videoUrl: string;
    duration: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
  }
  
  // Define the Module interface
  interface IModule {
    id: string;
    courseId: string;
    title: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    lessons?: ILesson[]; // Optional array of lessons
  }
  
  // Define the Creator interface
  interface ICreator {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
    gender: string | null;
    phoneNumber: string;
    dateOfBirth: string | null;
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
    createdAt: string;
    updatedAt: string;
  }
  
  // Define the Course interface
  export interface ICourse {
    id: string;
    creatorId: string;
    categoryId: string;
    title: string;
    subtitle: string;
    description: string;
    language: string;
    image: string;
    level: string;
    currency: string;
    price: string;
    requirement: string;
    whatToLearn: string;
    published: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    creator: ICreator;
    modules: IModule[];
  }

  export interface ICourseCategory{
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }