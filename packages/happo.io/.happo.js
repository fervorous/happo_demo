const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
 apiKey: process.env.HAPPO_API_KEY,
 apiSecret: process.env.HAPPO_API_SECRET,

 include: '**/@(*.happo|happo).@(js|jsx)',

 targets: {
   'firefox-desktop': new RemoteBrowserTarget('firefox', {
     viewport: '1024x768',
   }),
   'firefox-mobile': new RemoteBrowserTarget('firefox', {
     viewport: '320x640',
   }),
 },

 customizeWebpackConfig: (config) => {
    config.module = {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    };
    return config;
  },
};
