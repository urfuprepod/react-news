import Header from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main/Main";
import classNames from "classnames";

const App = () => {
    const { isDark } = useTheme();

    return (
        <div className={classNames("app", { dark: isDark })}>
            <Header />
            <div className="container">
                <Main />
            </div>
        </div>
    );
};

export default App;
