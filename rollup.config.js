import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import pkg from "./package.json" assert { type: "json" };

const external = ["react", "react-dom", "styled-components"];

export default [
  {
    input: "packages/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      typescript({
        tsconfig: "./tsconfig.base.json",
        exclude: [/\.test.(js|jsx|ts|tsx)$/, /\.stories.(js|jsx|ts|tsx|mdx)$/],
      }),
      resolve(),
      commonjs(),
      postcss(),
      url(),
    ],
  },
];
