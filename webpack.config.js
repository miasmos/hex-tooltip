/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
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
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jpg|.jpeg|.png|.gif|.svg$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
            {
                test: /\.woff2?$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
            { enforce: "pre", test: /\.ts$/, loader: "source-map-loader" },
        ],
    },
    ...(argv.NODE_ENV === "production" && {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: { output: { ascii_only: true } },
                }),
            ],
        },
    }),
    devtool: "source-map",
    target: "web",
    output: {
        path: path.resolve(__dirname, "./dist"),
        // eslint-disable-next-line no-useless-escape
        filename: "hex.tooltip.js",
        globalObject: "this",
        umdNamedDefine: true,
        library: {
            name: "HexTooltip",
            type: "umd",
            export: "default",
        },
        chunkFilename: "[name].[chunkhash].js",
    },
    plugins: [
        new Dotenv({ path: `./.${argv.mode}.env` }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ inject: true, template: "src/index.html" }),
        new CopyPlugin({ patterns: [{ from: "images", to: "images" }] }),
    ],
});
