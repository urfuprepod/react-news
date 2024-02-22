import { themeIcons } from "../../assets";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header
            className={classNames(styles.header, { [styles.dark]: isDark })}
        >
            <div className={styles.info}>
                <h1 className={styles.title}>NEWS REACTIFY</h1>
                <p className={styles.date}>{formatDate(new Date())}</p>
            </div>
            <img
                src={isDark ? themeIcons.light : themeIcons.dark}
                width={30}
                alt="theme"
                onClick={toggleTheme}
            />
        </header>
    );
};

export default Header;
