import { CategoryType } from "@/entities/category";
import { Status } from "@/shared/interfaces";

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: Status;
}

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
