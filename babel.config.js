module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // Adjust targets for Jest
    "@babel/preset-react", // For JSX and React
  ],
  plugins: ["@babel/plugin-transform-runtime"], // For async/await support if needed
};
