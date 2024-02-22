import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";

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
