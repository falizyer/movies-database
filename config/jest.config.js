module.exports = {
    verbose: true,
    roots: ["<rootDir>/../src/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/../**/*.{js,jsx}",
        "!<rootDir>/../node_modules/**"
    ],
    testMatch: ["<rootDir>/../**.(spec|test).js?(x)"],
    coverageDirectory: "/test_out/",
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss|style)$": "<rootDir>/../__mocks__/style-mock.js"
    },
    setupTestFrameworkScriptFile: "<rootDir>/jest-setup-file.js"
};