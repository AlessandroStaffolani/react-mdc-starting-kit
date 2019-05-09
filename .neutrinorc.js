const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const style = require('@neutrinojs/style-loader');
const htmlTemplate = require('@neutrinojs/html-template');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb(),
    react(),
    jest(),
    style({
      test: /\.(css|sass|scss)$/,
      ruleId: 'sass',
      loaders: [
        {
          loader: 'sass-loader',
          useId: 'sass',
          options: {
            includePaths: ['./node_modules']
          }
        }
      ]
    }),
    htmlTemplate({
      // @neutrinojs/html-template includes a custom template that has more features
      // (eg appMountId and lang support) than the default html-webpack-plugin template:
      // https://github.com/jantimon/html-webpack-plugin/blob/master/default_index.ejs
      template: require.resolve('./resources/html-template.ejs'),
      appMountId: 'root',
      title: 'React Material Starting Kit',
      lang: 'en',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
      favicon: './resources/favicon.ico',
      // Override pluginId to add an additional html-template plugin instance
      pluginId: 'html',
    })
  ],
};
