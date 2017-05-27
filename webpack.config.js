module.exports = {
    entry: __dirname + "/src/js/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
        rules: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',

               query: {
                  presets: ['es2015', 'react']
               }
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: { importLoaders: 1, modules: true },
                  },
                  "postcss-loader",
                ],
             },
          ]
    }
};
