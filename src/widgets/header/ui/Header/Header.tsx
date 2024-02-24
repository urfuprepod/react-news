import { useTheme } from "@/app/providers/ThemeProvider";
import { formatDate } from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";
import classNames from "classnames";
import { ThemeButton } from "@/features/theme";

const Header = () => {
    const { isDark } = useTheme();

    return (
        <header
            className={classNames(styles.header, { [styles.dark]: isDark })}
        >
            <div className={styles.info}>
                <h1 className={styles.title}>NEWS REACTIFY</h1>
                <p className={styles.date}>{formatDate(new Date())}</p>
            </div>
            <ThemeButton />
        </header>
    );
};

export default Header;
