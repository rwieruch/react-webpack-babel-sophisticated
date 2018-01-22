const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./build-utils/webpack.common');

const addons = (addonsArg) => {
  let addons = []
    .concat.apply([], [addonsArg])
    .filter(Boolean);

  return addons.map(name => require(`./build-utils/addons/webpack.${name}.js`))
};

module.exports = (env) => {
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
};