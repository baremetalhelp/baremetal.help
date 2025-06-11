// eslint.config.js
module.exports = [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            // Consistent code formatting
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],

            // Best practices
            "no-console": "warn",
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "max-lines": ["warn", 800], // Warn on files over 800 lines to encourage refactoring
        },
    },
    {
        // TypeScript-specific rules
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: require("@typescript-eslint/parser"),
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
        },
        rules: {
            // Enforce strong typing in TypeScript
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
        },
    },
    {
        // React-specific rules
        files: ["**/*.{jsx,tsx}"],
        plugins: {
            react: require("eslint-plugin-react"),
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/prop-types": "error",
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
        },
    },
];
