// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Plane Wiki",
    tagline: "Your one-time flight to plane wiki!",
    favicon: "img/logo.png",

    url: "https://planewiki.lory.dev",
    baseUrl: "/",

    organizationName: "Plane-Wiki",
    projectName: "website",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en", "it"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    editUrl: "null",
                },
                blog: {
                    showReadingTime: true,
                    editUrl: "null",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: "Logo",
                    src: "img/logo.png",
                },
                items: [
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        type: "doc",
                        position: "right",
                        docId: "index",
                        label: "Wiki",
                    },
                    {
                        href: "https://lory.dev",
                        label: "lory.dev",
                        position: "right",
                    },
                    {
                        type: 'localeDropdown',
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.vsDark,
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,    
            },
        }),

    markdown: {
        format: "detect",
    },
};

export default config;