import { resolve } from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  //   entry: resolve(__dirname, "src", "index.ts"),
  entry: {
    Button: "./src/Button/index.ts",
    Input: "./src/Input/index.ts",
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name]/[name].js",
    library: {
      type: "umd",
      name: "@sns/test",
    },
  },
  externals: ["react"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        include: resolve(__dirname, "src"),
        exclude: [/\.(stories|spec|test).tsx?$/],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/[name].css",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", "..."],
  },
  mode: "development",
} as Configuration;
