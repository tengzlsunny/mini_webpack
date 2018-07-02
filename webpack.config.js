const CopyWebpackPlugin = require('copy-webpack-plugin') // 用于拷贝文件

const path = require('path')
const srcDir = path.resolve(__dirname, './src')
module.exports = {
    entry: {
        page1: './src/page1/page1.js',
        page2: './src/page2/page2.js'
    },
    output: {
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': srcDir
        }
    },
    devServer: {
        host:"0.0.0.0",
        contentBase: './dist/',
        proxy: {
            // 跨域反向代理
            // "/test": {
            //     target: "http://tvlinkapi45.ftoul.com",
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/test': ''
            //     }
            // }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sass|scss)$/,
                loader: 'vue-style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name(file) {
                        if (file.match(/\.(png|jpe?g|gif)$/) != null)
                        return 'images/[name].[hash:7].[ext]'
                        else {
                            return '[name].[hash:7].[ext]'
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from : './index1.html',
                to: './'
            },
            {
                from : './index2.html',
                to: './'
            }
        ]),
    ]
}