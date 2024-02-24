import { useGetLatestNewsQuery } from "@/entities/news/api/api";
import styles from "./styles.module.css";
import BannerList from "@/widgets/news/ui/BannersList/BannersList";


const LatestNews = () => {
    // const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
    const { data, isLoading } = useGetLatestNewsQuery(null);

    return (
        <section className={styles.section}>
            <BannerList banners={data?.news} isLoading={isLoading} />
        </section>
    );
};

export default LatestNews;
