import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import classNames from "classnames";
import { IPaginationProps } from "../../model";

const PaginationButtons = (props: IPaginationProps) => {
    const {
        totalPages,
        handlePrevPage,
        handleNextPage,
        handlePageClick,
        currentPage,
    } = props;

    const { isDark } = useTheme();
    return (
        <div
            className={classNames(styles.pagination, { [styles.dark]: isDark })}
        >
            <button
                disabled={currentPage <= 1}
                onClick={handlePrevPage}
                className={styles.arrow}
            >
                {"<"}
            </button>
            <div className={styles.list}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        onClick={() => handlePageClick(index + 1)}
                        className={styles["page-number"]}
                        key={index}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <button
                disabled={currentPage >= totalPages}
                onClick={handleNextPage}
                className={styles.arrow}
            >
                {">"}
            </button>
        </div>
    );
};

export default PaginationButtons;
