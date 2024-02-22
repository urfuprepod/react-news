import { DirectionType, SkeletonType } from "../../interfaces";
import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
    type?: SkeletonType;
    count?: number;
    direction?: DirectionType;
}

const Skeleton = ({
    count = 1,
    type = "banner",
    direction = "column",
}: Props) => {
    return (
        <>
            {count > 1 ? (
                <ul
                    className={classNames({
                        [styles.columnList]: direction === "column",
                        [styles.rowList]: direction !== "column",
                    })}
                >
                    {Array.from({ length: count }, (_, index) => index).map(
                        (_, index) => (
                            <li
                                key={index}
                                className={classNames({
                                    [styles.banner]: type === "banner",
                                    [styles.item]: type !== "banner",
                                })}
                            ></li>
                        )
                    )}
                </ul>
            ) : (
                <li
                    className={classNames({
                        [styles.banner]: type === "banner",
                        [styles.item]: type !== "banner",
                    })}
                ></li>
            )}
        </>
    );
};

export default Skeleton;
