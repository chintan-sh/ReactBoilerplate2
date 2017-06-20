/**
 * Created by chintan on 5/31/17.
 */
var webpack = require('webpack'); // remove if not using plugins param below

// config file to generate bundle.js
module.exports = {
  entry : [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx',
  ], // starting point for webpack (it recursively goes to each file it finds in imports)

  externals :{
      jquery : 'jQuery'
  },
  plugins : [
      new webpack.ProvidePlugin({
          '$' : 'jquery',
          'jQuery' : 'jquery'
      })
  ],
  output : {
    path : __dirname, // current directory
    filename : './js/bundle.js' // resultant file name with location (all js will reside in this file)
  },
  resolve : {
    root : __dirname,
    alias : { // when we use 'require' in app.jsx etc - where to find corresponding files? define here
        Main : 'app/components/Main.jsx',
        GlobalStyles : 'app/css/global.scss',
    },
    extensions  : [ '' , '.js', '.jsx'] // target files with extension (this will all be put in final bundle)
  },
  module :{
    loaders :[{
        loader : 'babel-loader', // used for translating to es2015
        query : {
          presets : ['react', 'es2015', 'stage-0'] // tells babel-loader to take our files & parse thru reactjs and then translate to es2015
        },
        test: /\.jsx?$/, // which file to target for conversion to es2015 (not same as resolve above)
        exclude : /(node_modules|bower_components|archives|example)/ // folders that we don't wanna parse
        // note : put "node_modules|" in exclude when you want to run on nodejs backend - if not, let webpack translate folder so that bundle.js can run on browser
    }]//end loaders
  },
  devtool : 'cheap-module-eval-source-map' // for debugging (basically replaces bundle.js in browser with orig code
  /* Optional */
  // plugins: [
  //       new webpack.optimize.UglifyJsPlugin({minimize: true})
  // ]
};


/*
Flow :

1) This file will goto app.jsx
2) See all the imports (react, react-dom)
3) Get those and parse them untill all recursive files are done
4) Come back to app.jsx - parses code through react
5) Converts the code to ES2015
6) Generates a bundle.js inside js folder
7) When browser invokes index.html - this bundle.js will be served saving bandwidth and load time

 */
