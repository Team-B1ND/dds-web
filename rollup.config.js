import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
const pkg = require("./package.json");

const external = ["react", "react-dom", "styled-components"];

export default [
  {
    input: "packages/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        preserveModules: true, 
        preserveModulesRoot: "packages", 
        entryFileNames: "[name].cjs.js", 
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "packages",
        entryFileNames: "[name].esm.js",
      },
    ],
    external,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.base.json",
        exclude: [/\.test.(js|jsx|ts|tsx)$/, /\.stories.(js|jsx|ts|tsx|mdx)$/],
      }),
      image(),
      svgr(),
      postcss(),
      url(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, Object.keys(pkg.peerDependencies)],
  },
];
