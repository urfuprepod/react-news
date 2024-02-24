import Header from "@/widgets/header/ui/Header/Header";
import { useTheme } from "@/app/providers/ThemeProvider";
import classNames from "classnames";
import Main from "@/pages/main/ui/Page";


const BaseLayout = () => {
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

export default BaseLayout;