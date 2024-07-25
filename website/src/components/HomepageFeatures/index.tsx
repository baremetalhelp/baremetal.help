import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function BareMetalFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col col--4">
                        <h1>Careful Instructions</h1>
                    </div>
                    <div className="col col--4">
                        <img src="img/words.png" />
                    </div>
                    <div className="col col--4">
                        <p>
                            Our standard for documentation is that you don't
                            have to guess what to do at any point.
                        </p>
                        <p>
                            If you're staring at your keyboard and have to ask
                            "which key do I press next", we're not done with the
                            documentation.
                        </p>
                        <p>
                            We rehearsed these tutorials exhaustively to make
                            sure everything's explained.
                        </p>
                        <p> So there is no guesswork.</p>
                    </div>
                </div>
                <hr />
                <div className="row padding-top-lg">
                    <div className="col col--4">
                        <h1>We Have the Code</h1>
                    </div>
                    <div className="col col--4">
                        <p>
                            Wherever possible, we include Infrastructure-as-Code
                            for all the things.
                        </p>
                        <p>
                            Infrastructure-as-Code guarantees repeatable
                            deployments for BareMetal architectures. We start
                            with a secure-by-default baseline and show you how
                            to extend the code to suit your needs.
                        </p>
                    </div>
                    <div className="col col--4">
                        <img src="img/code.png" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col col--4">
                        <h1>Step-by-Step Pictures</h1>
                    </div>
                    <div className="col col--4">
                        <img src="img/pictures.png" />
                    </div>
                    <div className="col col--4">
                        <p>We're huge fans of not reinventing the wheel.</p>
                        <p>
                            There's tons of existing documentation on all the
                            things covered in BareMetal. It's just that often
                            it's wrong, incomplete, old, or only part of the
                            story.
                        </p>
                        <p>
                            So while we use and gladly refer to what's already
                            written, BareMetal is your definitive guide for how
                            to put everything together. We give you the exact
                            instructions with carefully chosen illustrations and
                            simple-to-follow text.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
