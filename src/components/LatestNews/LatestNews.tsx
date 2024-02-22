import styles from "./styles.module.css";
import BannerList from "../BannersList/BannersList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";
import { NewsApiResponse } from "../../interfaces";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

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
