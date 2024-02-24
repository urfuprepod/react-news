import { CategoryType } from "@/entities/category";

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters>;

export enum Status {
    Error = "error",
    Ok = "ok",
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";
