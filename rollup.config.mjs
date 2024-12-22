import path from "path";
import { fileURLToPath } from 'url';
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url"; // url 플러그인 추가

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  input: path.resolve(__dirname, "index.ts"),
  output: [
    {
      file: path.resolve(__dirname, "index.esm.js"),
      format: "esm",
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, "index.cjs.js"),
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.base.json" }),
    nodeResolve(),
    commonjs(),
    url({
      include: ["**/*.otf", "**/*.ttf"], // 폰트 파일 처리
      limit: 0, // 파일 크기 제한 없앰
    }),
  ],
  external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
});
