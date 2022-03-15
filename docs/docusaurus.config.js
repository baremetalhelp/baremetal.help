// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "BareMetal Help",
    tagline: '"Zero to Hero" for enterprise-grade cloud infrastructure',
    url: "https://baremetal.help",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "baremetal.help", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/baremetalhelp/baremetal.help",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: "BareMetal Help",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [{
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "Tutorials",
                },
                {
                    href: "https://github.com/baremetalhelp/baremetal.help",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [{
                    title: "Docs",
                    items: [{
                        label: "Tutorials",
                        to: "/docs/intro",
                    }, ],
                },
                {
                    title: "More",
                    items: [{
                        label: "GitHub",
                        href: "https://github.com/baremetalhelp/baremetal.help",
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} BareMetal Help. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;