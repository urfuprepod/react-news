import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";

interface Props {
    news?: INews[]
}

const NewsList = ({ news }: Props) => {
    console.log(news);
    return (
        <ul className={styles.list}>
            {news?.map((item: INews)  => (
                <NewsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
