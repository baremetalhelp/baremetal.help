import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "From Scratch with Best Practices",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        There are lots of things you need to do to bring up a cloud
        infrastructure from scratch. Our goal is to assume as little as possible
        about where you are. And to start off on the right foot with best
        practices built in.
      </>
    ),
  },
  {
    title: "Configurable, Repeatable, Consistent",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        We don't like click-ops where we can avoid it. We have created
        infrastructure-as-code scripts for as much as we can. There will always
        be boxes to check in a web console. But the rest has to be easy to
        deploy and redeploy.
      </>
    ),
  },
  {
    title: "Make These and More",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        AWS Single Sign-On, Azure AD directory, a super-duper documentation
        website like this, Content Delivery Network.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
