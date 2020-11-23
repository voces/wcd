import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === "production";
const extensions = [".js", ".ts", ".tsx"];

export default {
	input: "src/theme.tsx",
	output: {
		file: "assets/js/theme.js",
		format: "iife",
	},
	plugins: [
		replace({
			"process.env.NODE_ENV": JSON.stringify(
				isProd ? "production" : "development",
			),
		}),
		json(),
		resolve({ extensions }),
		commonjs({ include: /node_modules/ }),
		babel({
			extensions,
			exclude: /node_modules/,
			babelrc: false,
			babelHelpers: "runtime",
			presets: [
				"@babel/preset-env",
				"@babel/preset-react",
				"@babel/preset-typescript",
			],
			plugins: ["@babel/plugin-transform-runtime"],
		}),
		scss({ output: "assets/css/theme.css" }),
		isProd && terser(),
	],
};
