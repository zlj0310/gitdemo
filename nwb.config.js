const path = require('path')
const webpack = require('webpack')
const GitRevision = require('git-revision-webpack-plugin')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const config = require('./config')

let proxy = {}
try {
  proxy = require('./proxy.js')
} catch (e) {
  console.info('Proxy not found')
}

const ENV = process.env
const TARGET = ENV.npm_lifecycle_event
const GLOBALCONFIG = require('./../../config/config')
const gitRevision = new GitRevision()

const BASE_CONFIG = {
  RELEASE: {
    //正式环境
    IOU_API: 'https://api.huizhifintech.com',
  },
  PRE: {
    //预发环境     BUILD_ENV=PRE
    IOU_API: 'https://preapi.huizhifintech.com',
  },
  TEST: {
    //测试环境变量   BUILD_ENV=TEST
    IOU_API: 'http://api.test.huijie-inc.com',
  },
  development: {
    //开发环境
    IOU_API: 'http://api.test.huijie-inc.com',
  },
  DEFAULT: {
    //默认正式环境
    IOU_API: 'https://api.huizhifintech.com',
  },
}

const webpackConfig = {
  type: 'react-app',
  webpack: {
    publicPath: GLOBALCONFIG.publicPath,
    aliases: {
      styles: path.resolve('src/styles'),
      // 公共的工具类、容器和组件
      utils: path.resolve('../utils'),
      containers: path.resolve('../containers'),
      components: path.resolve('../components'),
      '@': path.resolve('./src'),
    },
    rules: {
      babel: {
        test: /\.(js|jsx)$/,
      },
      eslint: {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      graphics: {
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: 'assets/img/[name].[hash:7].[ext]',
            },
          },
          ENV.NODE_ENV === 'production'
            ? {
                loader: 'image-webpack-loader',
                query: {
                  bypassOnDebug: true,
                  mozjpeg: {
                    quality: 65,
                    progressive: true,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4,
                  },
                },
              }
            : null,
        ].filter((p) => p),
      },
      jpeg: {
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: 'assets/img/[name].[hash:7].[ext]',
            },
          },
          ENV.NODE_ENV === 'production'
            ? {
                loader: 'image-webpack-loader',
                query: {
                  bypassOnDebug: true,
                  mozjpeg: {
                    quality: 65,
                    progressive: true,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4,
                  },
                },
              }
            : null,
        ].filter((p) => p),
      },
      less: {
        modules: true,
        paths: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        localIdentName: '[local]',
      },
    },
    define: {
      NPMCOMMAND: JSON.stringify(TARGET),
      PRODUCTION: ENV.NODE_ENV === 'production',
      CONSTANTS: JSON.stringify(config.CONSTANTS),
      COMMIT: JSON.stringify(gitRevision.version()),
      VERSION: JSON.stringify(ENV.npm_package_version),
      BASE_CONFIG:
        TARGET === 'build'
          ? JSON.stringify(BASE_CONFIG[process.env.BUILD_ENV] || BASE_CONFIG['DEFAULT'])
          : JSON.stringify(BASE_CONFIG[ENV.NODE_ENV]),
    },
    output: {
      libraryTarget: 'umd',
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    },
    config: (config) => {
      if (TARGET === 'build') {
        config.externals = Object.assign({}, config.externals, {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          mobx: 'mobx',
        })
      }

      return config
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      module: {
        rules: [{test: /\.tsx?$/, loader: 'awesome-typescript-loader'}],
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          options: {
            tatget: 'web',
            eslint: {
              formatter: eslintFriendlyFormatter,
            },
          },
        }),
      ],
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: proxy,
  },
}

if (TARGET === 'build') {
  webpackConfig.webpack.html = {
    minify: {
      caseSensitive: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeAttributeQuotes: false,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
    },
  }
}

module.exports = webpackConfig
