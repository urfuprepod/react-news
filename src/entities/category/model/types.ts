export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string;
}

export type CategoryType = string;
