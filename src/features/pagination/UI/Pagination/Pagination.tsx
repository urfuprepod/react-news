import { IPaginationProps } from "../../model";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

interface Props {
    children: React.ReactNode;
    top?: boolean;
    bottom?: boolean;
}

const Pagination = (props: Props & IPaginationProps) => {
    const { top, bottom, children, ...other } = props;

    return (
        <>
            {top && <PaginationButtons {...other} />}
            {children}
            {bottom && <PaginationButtons {...other} />}
        </>
    );
};

export default Pagination;
