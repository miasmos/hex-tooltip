/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (config, argv) => ({
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jpg|.jpeg|.png|.gif|.svg$/,
                exclude: /node_modules/,
                type: "asset/inline",
            },
            {
                test: /\.woff2?$/,
                exclude: /node_modules/,
                type: "asset/inline",
            },
            { enforce: "pre", test: /\.ts$/, loader: "source-map-loader" },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: { output: { ascii_only: true, comments: false } },
            }),
        ],
    },
    devtool: "source-map",
    target: "web",
    output: {
        path: path.resolve(__dirname, "./dist"),
        // eslint-disable-next-line no-useless-escape
        filename: "hex.tooltip.js",
        globalObject: "this",
        umdNamedDefine: true,
        publicPath: "",
        library: {
            name: "HexTooltip",
            type: "umd",
            export: "default",
        },
        chunkFilename: "[name].[chunkhash].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ inject: true, template: "src/index.html" }),
    ],
});
