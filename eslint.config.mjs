import js from "@eslint/js";
import next from "next";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off", // Allows custom classnames in Tailwind
      "react/jsx-no-undef": "error", // Prevents undefined JSX components
      "no-unused-vars": "warn", // Warns about unused variables instead of erroring
      "no-console": "warn", // Allows console logs, but warns to clean up for production
    },
  },
];
