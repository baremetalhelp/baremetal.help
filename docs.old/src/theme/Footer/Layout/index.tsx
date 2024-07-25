import Layout from "@theme-original/Footer/Layout";
import React from "react";

export default function LayoutWrapper(props: any) {
    const overrideProps = Object.assign({}, props, {
        style: "light",
    });
    return (
        <>
            <Layout {...overrideProps} />
        </>
    );
}
