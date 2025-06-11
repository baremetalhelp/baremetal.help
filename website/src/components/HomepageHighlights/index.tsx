import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type HighlightItem = {
    highlight: string;
};

const HighlightList: HighlightItem[] = [
    {
        highlight: "Deploy Docker containers with GitHub Actions",
    },
];

function Highlight({ highlight }: HighlightItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
                <p>{highlight}</p>
            </div>
        </div>
    );
}

export default function BareMetalHighlights(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {HighlightList.map((props, idx) => (
                        <Highlight key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
