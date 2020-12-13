const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Webpack = require("webpack");
const { merge } = require("webpack-merge");

const Base = {
    entry: "./src/app.js",
    output: {
        filename: "[name]-[hash:8].js"
    },
    plugins: [
        new Webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [ 
                    "style-loader", 
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader", options: { importLoaders: 1 }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash:8].[ext]',
                        outputPath: 'images',
                        publicPath: 'images',
                        emitFile: true,
                        esModule: false
                    }
                }
            }
        ]
    }
}

const Dev = {
    output: {
        path: path.resolve(__dirname, 'build', 'dev')
    },
    devtool: 'eval-source-map'
}

const Prod = {
    output: {
        path: path.resolve(__dirname, 'build', 'production')
    }
}

module.exports =(env, argv)=>{
    if(argv.mode === 'development'){
        return merge(Base, Dev)
    }

    return merge(Base, Prod)
}