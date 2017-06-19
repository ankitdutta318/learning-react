const path = require('path');

module.exports = {
    entry : './app/app.jsx',
    output : {
        path : __dirname,
        filename : './public/js/bundle.js'
    },
    resolve : {
        alias : {
        },
        extensions : ['', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                loader : 'babel-loader',
                query : {
                    presets : ['react', 'es2015', 'stage-0']
                },
                test : /\.jsx?$/,
                exclude : /(node_modules | bower_components)/
            }
        ]
    },
    watch : true
}