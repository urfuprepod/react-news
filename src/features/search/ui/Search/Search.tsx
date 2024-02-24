import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

const Search = (props: Props) => {
    const { keywords, setKeywords } = props;
    const { isDark } = useTheme();

    return (
        <div className={classNames(styles.search, { [styles.dark]: isDark })}>
            <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className={styles.input}
                placeholder="JavaScript"
            />
        </div>
    );
};

export default Search;
