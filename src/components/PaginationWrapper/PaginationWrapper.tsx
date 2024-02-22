import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";

interface Props {
    children: React.ReactNode;
    top?: boolean;
    bottom?: boolean;
}

const PaginationWrapper = (props: Props & IPaginationProps) => {
    const { top, bottom, children, ...other } = props;

    return (
        <>
            {top && <Pagination {...other} />}
            {children}
            {bottom && <Pagination {...other} />}
        </>
    );
};

export default PaginationWrapper;
