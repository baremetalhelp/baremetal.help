import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "We Have the Code",
        image: "img/code.png",
        description: (
            <>
                Wherever possible, we include Infrastructure-as-Code for all the
                things. Sometimes the cloud provider does not give you APIs to
                do what's necessary. We'll make up for that with words and
                pictures.
            </>
        ),
    },
    {
        title: "Careful Instructions",
        image: "img/words.png",
        description: (
            <>
                Our standard for documentation is that you don't have to guess
                what to do at any point. We rehearsed these tutorials multiple
                times to make sure everything's explained. No guesswork.
            </>
        ),
    },
    {
        title: "Step-by-Step Pictures",
        image: "img/pictures.png",
        description: (
            <>
                While we link to existing documentation whenever we can,
                sometimes it's wrong or out of date. We have lots of
                step-by-step pictures if it's easier to explain and validate
                that way.
            </>
        ),
    },
];

function Feature({ title, image, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
            </div>
            <div className="text--center padding-horiz--md">
                <p>{description}</p>
            </div>
            <div className="text--center">
                <img src={image} />
            </div>
        </div>
    );
}

export default function BareMetalFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
