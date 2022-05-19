const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');

// const { nextI18NextRewrites } = require('next-i18next/rewrites');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// const localeSubpaths = {};

const nextConfig = {
    publicRuntimeConfig: {
        SITE_NAME: config.siteName,
        BASE_URL :  config.baseUrl,
        PORT :  config.port,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config, { isServer, buildId, dev }) {

        config.resolve.alias['src'] = path.join(__dirname, 'src');
        // config.resolve.alias['styles'] = path.join(__dirname, 'styles');

        config.module.rules.push({
            test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'raw-loader',
        });

        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        });

      //  config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb|uk/));
       // config.plugins.push(new webpack.NormalModuleReplacementPlugin(
         //   /moment-timezone\/data\/packed\/latest\.json/,
          //  require.resolve('./timezones.json')
       // ));


        if (config.mode === 'production') {
            if (Array.isArray(config.optimization.minimizer)) {
                config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
            }
        }

        if (!isServer && !dev) {
            //config.plugins.push();
        }

        return config;
    }
};

module.exports = withPlugins([
],nextConfig);
