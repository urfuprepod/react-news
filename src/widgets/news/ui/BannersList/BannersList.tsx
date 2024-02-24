import { INews, NewsBanner } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.css";


interface Props {
    banners?: INews[];
}

const BannersList = ({ banners }: Props) => {
    return (
        <ul className={styles.banner}>
            {banners?.map((banner) => (
                <NewsBanner key={banner.id} item={banner} />
            ))}
        </ul>
    );
};

const BannerListWithSkeleton = withSkeleton<Props>(
    BannersList,
    "banner",
    10,
    "row"
);

export default BannerListWithSkeleton;
