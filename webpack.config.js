const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Entry point for your library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Name of the output bundle
    library: 'MyLibrary', // Name of the library
    libraryTarget: 'umd', // Universal Module Definition
    umdNamedDefine: true, // Named UMD module
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {
    react: 'react', // Treat react as an external dependency
    'react-dom': 'react-dom', // Treat react-dom as an external dependency
  },
};
