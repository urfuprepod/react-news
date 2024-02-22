import styles from "./styles.module.css";
import NewsList from "../NewsList/NewsList";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

const NewsByFilters = () => {
    // const { filters, changeFilters } = useFilters({
    //     page_number: 1,
    //     page_size: PAGE_SIZE,
    //     category: null,
    //     keywords: "",
    // });

    const filters = useAppSelector((state) => state.news.filters);
    const news = useAppSelector((state) => state.news.news);
    const dispatch = useAppDispatch();

    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    // const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    //     ...filters,
    //     keywords: debouncedKeywords,
    // });
    const { data, error, isLoading } = useGetNewsQuery({
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
