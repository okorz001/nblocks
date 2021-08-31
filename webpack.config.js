const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const refresh = require('react-refresh-typescript')
const { HotModuleReplacementPlugin } = require('webpack')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = env => {
  const DEV = env.dev || false
  console.log("development build? %s", DEV)

  return {
    mode: DEV ? 'development' : 'production',
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main-[contenthash].js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            // use ForkTsCheckerWebpackPlugin for type checking
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [
                DEV && refresh(),
              ].filter(x => x),
            }),
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      DEV && new HotModuleReplacementPlugin(),
      DEV && new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './templates/index.html',
      }),
      // this might seem pointless, but it does two things for us:
      // 1) it moves the assets to the directory where http-server is serving from
      // 2) it registers the assets with webpack so that workbox can discover and precache them
      new CopyWebpackPlugin({
        patterns: ['public'],
      }),
      // workbox's service worker may not work correctly with webpack-dev-server or --watch
      // https://github.com/GoogleChrome/workbox/issues/1790
      DEV ? new CopyWebpackPlugin({
        patterns: [{ from: 'src/service-worker.dev.js', to: 'service-worker.js' }],
      }) : new GenerateSW({
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      }),
    ].filter(x => x),
    devServer: {
      port: 8080,
      open: '/',
      hot: true,
    },
  }
}
