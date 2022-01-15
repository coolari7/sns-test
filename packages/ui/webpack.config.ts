import { resolve } from "path";
import { Configuration } from "webpack";

export default {
  entry: resolve(__dirname, "src", "index.ts"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index.min.js",
    library: {
      type: "umd",
    },
  },
  externals: ["react"],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        include: resolve(__dirname, "src"),
        exclude: [/\.(stories|spec|test).tsx?$/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
  },
  mode: "production",
} as Configuration;
