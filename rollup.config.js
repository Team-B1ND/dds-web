import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import dts from "rollup-plugin-dts";
import replace from "@rollup/plugin-replace";
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
    ],
    external,
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.base.json",
        exclude: [/\.test.(js|jsx|ts|tsx)$/, /\.stories.(js|jsx|ts|tsx|mdx)$/],
        declaration: true,
        emitDeclarationOnly: true,
        declarationDir: "dist/cjs/types",
      }),
      image(),
      svgr(),
      postcss(),
      url({
        include: ["**/*.otf"],
        limit: 0,
        fileName: "types/assets/src/fonts/[name][extname]",
      }),
    ],
  },
  {
    input: "packages/index.ts",
    output: [
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.base.json",
        exclude: [/\.test.(js|jsx|ts|tsx)$/, /\.stories.(js|jsx|ts|tsx|mdx)$/],
        declaration: true,
        emitDeclarationOnly: true,
        declarationDir: "dist/esm/types",
      }),
      image(),
      svgr(),
      postcss(),
      url({
        include: ["**/*.otf"],
        limit: 0,
        fileName: "types/assets/src/fonts/[name][extname]",
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts(),
      url({
        include: ["**/*.otf"],
        limit: 0,
      }),
      replace({
        delimiters: ["", ""],
        preventAssignment: true,
        values: {
          "var ": "declare const ",
        },
      }),
    ],
  },
];
