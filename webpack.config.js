const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    [
        require('postcss-preset-env'),
        {
            stage: 1,
            features: {
                'nesting-rules': true
            }
        }
    ],
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: './app',
        hot: true,
        port: 5000,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader' ,'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: postCSSPlugins
                        }
                    }
                }]
            }
        ]
    }
}