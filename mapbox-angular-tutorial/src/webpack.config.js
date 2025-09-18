module.exports = {
  module: {
    rules: [
      {
        test: /mapbox-gl-csp-worker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ]
  }
};
