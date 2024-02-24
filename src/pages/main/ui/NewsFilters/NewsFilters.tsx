import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import Categories from "@/features/category/ui/Categories/Categories";
import Slider from "@/features/slider/ui/Slider/Slider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/slice";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/api";
import { Search } from "@/features/search";

interface Props {
    filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
    const { isDark } = useTheme();
    const { data } = useGetCategoriesQuery(null);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.filters}>
            {data?.categories && (
                <Slider step={150} isDark={isDark}>
                    <Categories
                        categories={data.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) =>
                            dispatch(
                                setFilters({
                                    key: "category",
                                    value: category,
                                })
                            )
                        }
                    />
                </Slider>
            )}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) =>
                    dispatch(setFilters({ key: "keywords", value: keywords }))
                }
            />
        </div>
    );
};

export default NewsFilters;
