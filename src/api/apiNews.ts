import axios from "axios";
import {
    Status,
    ParamsType,
} from "../shared/interfaces";
import { CategoriesApiResponse } from "@/entities/category";
import { NewsApiResponse } from "@/entities/news";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// с подключением RTK Query потерял актуальность

export const getNews = async (
    params?: ParamsType
): Promise<NewsApiResponse> => {
    try {
        const { page_number, page_size, category, keywords } = params || {};
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
        return { news: [], page: 1, status: Status.Error };
    }
};

export const getLatestNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
    try {
        const response = await axios.get<CategoriesApiResponse>(
            `${BASE_URL}available/categories`,
            {
                params: {
                    apiKey: API_KEY,
                },
            }
        );
        return response.data;
    } catch (err) {
        return { categories: [], description: "", status: "error" };
    }
};
