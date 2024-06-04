const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "verint",
    projectName: "application2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["verint/utility"],
  });
};
