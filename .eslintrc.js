module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // Prettier와 함께 사용할 경우
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off", // Vite에서 기본적으로 설정되어 있을 수 있음
  },
};
