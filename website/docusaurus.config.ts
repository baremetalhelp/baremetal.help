// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "BareMetal Help™",
    tagline:
        "Enterprise-grade cloud infrastructure from nothing ... that's bare metal!",
    url: "https://baremetal.help",
    baseUrl: "/",
    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "baremetalhelp", 
    projectName: "baremetal.help", 
    trailingSlash: false,

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    remarkPlugins: [require("mdx-mermaid")],
                    editUrl: "https://github.com/baremetalhelp/baremetal.help",
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: "BareMetal Help",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "Tutorials",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/baremetalhelp/baremetal.help",
                    label: "GitHub",
                    position: "right",
                },
                {
                    type: "search",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorials",
                            to: "/docs/intro",
                        },
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/baremetalhelp/",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/in/stephenharrison/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} BareMetal Help. Built with Docusaurus. Made with ❤️ by Stephen Harrison, BareMetal Help, support@baremetal.help`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            appId: "6P0T5GAAI7",
            apiKey: "81e3686a4f1be770df30809857f54689",
            indexName: "baremetal",
        },
    },
};

module.exports = config;
