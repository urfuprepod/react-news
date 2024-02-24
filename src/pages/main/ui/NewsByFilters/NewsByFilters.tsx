import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import PaginationWrapper from "@/features/pagination/UI/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/api";
import { setFilters } from "@/entities/news/model/slice";
import styles from "./styles.module.css";

import { useAppSelector, useAppDispatch } from "@/app/appStore";

const NewsByFilters = () => {
    

    const filters = useAppSelector((state) => state.news.filters);
    const news = useAppSelector((state) => state.news.news);
    const dispatch = useAppDispatch();

    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    
    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    });

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES)
            dispatch(
                setFilters({
                    key: "page_number",
                    value: filters.page_number + 1,
                })
            );
    };
    const handlePrevPage = () => {
        if (filters.page_number > 1)
            dispatch(
                setFilters({
                    key: "page_number",
                    value: filters.page_number - 1,
                })
            );
        // changeFilters("page_number", filters.page_number - 1);
    };

    const handlePageClick = (pageNumber: number) => {
        dispatch(
            setFilters({
                key: "page_number",
                value: pageNumber,
            })
        );
        // changeFilters("page_number", pageNumber);
    };

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />

            <PaginationWrapper
                top
                bottom
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={news} />
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;
