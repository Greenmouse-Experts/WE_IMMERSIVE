export interface ILesson {
    id: string;
    moduleId: string;
    courseId: string;
    title: string;
    content: string;
    contentType: string;
    contentUrl: string;
    duration: string;
    sortOrder: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    completed: boolean | null;
}

export interface IModule {
    id: string;
    courseId: string;
    title: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    lessons: ILesson[];
}

interface CourseCategory {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

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
    modules: IModule[];
    courseCategory: CourseCategory;
    progress: any; // Adjust type if needed
}

export interface ICourseData {
    id: string;
    userId: string;
    courseId: string;
    createdAt: string;
    updatedAt: string;
    course: ICourse;
}
