import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { CategoryType } from "../../interfaces";

interface Props {
    categories: CategoryType[];
    setSelectedCategory: (category: CategoryType | null) => void;
    selectedCategory: CategoryType | null;
}

const Categories = forwardRef(
    (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
        const { categories, setSelectedCategory, selectedCategory } = props;

        return (
            <div ref={ref} className={styles.categories}>
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={classNames({
                        [styles.active]: !selectedCategory,
                        [styles.item]: !!selectedCategory,
                    })}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        onClick={() => setSelectedCategory(category)}
                        className={classNames({
                            [styles.active]: selectedCategory === category,
                            [styles.item]: selectedCategory !== category,
                        })}
                        key={category}
                    >
                        {category}
                    </button>
                ))}
            </div>
        );
    }
);

Categories.displayName = "Categories";

export default Categories;
