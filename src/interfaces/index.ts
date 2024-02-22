export interface INews {
    author: string;
    category: CategoryType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export type CategoryType = string;

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords: string
}

export type ParamsType = Partial<IFilters>;

export enum Status {
    Error = "error",
    Ok = "ok",
}


export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: Status;
}

export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string;
}

export interface IPaginationProps {
    totalPages: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
    handlePageClick: (page: number) => void;
    currentPage: number;
}

export type SkeletonType = "banner" | 'item';
export type DirectionType = 'row' | 'column';