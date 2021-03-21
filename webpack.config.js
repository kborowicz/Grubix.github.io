const path = require('path');
const { resolve } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = isProduction => ({
    entry: './app/index.js',
    output: {
        publicPath: '',
        filename: isProduction ? 'build.[contenthash:8].js' : '[name].js',
        path: path.resolve(__dirname, './portfolio'),
    },
    target: ['web', 'es5'],
    performance: {
        hints: false,
    },
    optimization: isProduction ? {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    } : undefined,
    devtool: isProduction ? undefined : "source-map",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: isProduction ? "[hash:base64:5]" : "[name]__[local]"
                            }
                        }
                    },
                    // {
                    //     loader: "group-css-media-queries-loader"
                    // },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg|png)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? 'style.[contenthash:8].css' : '[name].css',
        }),
        new HtmlWebpackPlugin({
            minify: true,
            inject: false,
            template: './app/index.html',
            favicon: './favicon.ico'
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'app'),
            '@components': path.resolve(__dirname, 'app/components'),
        },
    },
});

module.exports = (env, argv) => {
    return config(argv.mode === 'production');
}