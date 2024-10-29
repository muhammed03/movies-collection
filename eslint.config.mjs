import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginReact.configs.flat.recommended,
  {
    // extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
  },
];