module.exports = {
    presets: ["@babel/preset-react", "@babel/preset-typescript"],
    plugins: [
        [
            "const-enum",
            {
                transform: "constObject",
            },
        ],
        "babel-plugin-styled-components",
    ],
};
