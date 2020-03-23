module.exports = {
    entry: __dirname+'/src/app.tsx',
    output: {
      path: __dirname+'/js',
      filename: 'app.js'
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
      ]
    }
  };
