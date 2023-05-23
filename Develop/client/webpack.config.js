const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Add and configure workbox plugins for a service worker and manifest file
const serviceWorkerConfig = {
  swSrc: './src/js/sw.js',
  swDest: 'sw.js',
  exclude: [/\.map$/, /manifest.*\.js(?:on)?$/, /\.html$/],
  importsDirectory: 'wb-assets',
};

const manifestConfig = {
  filename: 'manifest.json',
  name: 'PWA Budget Tracker',
  short_name: 'Budget Tracker',
  description: 'A simple budget tracker PWA',
  background_color: '#ffffff',
  theme_color: '#ffffff',
  'theme-color': '#ffffff',
  start_url: '/',
  icons: [
    {
      src: path.resolve('src/images/icons/icon-512x512.png'),
      sizes: [72, 96, 128, 144, 152, 192, 384, 512],
      destination: path.join('assets', 'icons'),
    },
  ],
};


// Add CSS loaders and babel to webpack.




module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
