module.exports={
  entry: './app/app.jsx',
  output:{
    path: __dirname, //path of the current folder. Its a variable name already available in node.js
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      WeatherForm:'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx',
      About:'app/components/About.jsx',
      Example:'app/components/Example.jsx',
      GetWeather:'app/api/openWeatherMap.js'
    }
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};
