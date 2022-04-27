const path = require('path');

module.exports = {
    mode: 'development',//sau production
    entry: './src/index.js',//pct e intrare a codului
    output: {//pct de iesire
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    },
    rules: [
       {
           test: /\.txt$/,
           use: 'raw-loader'
       } 
    ]
    };