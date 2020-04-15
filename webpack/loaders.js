function makeUrlLoader(pattern) {
  return {
    test: pattern,
    use: [
      'url',
    ],
    exclude: /node_modules/,
  };
}

exports.jsmap = {
  test: /\.js$/,
  use: [
    'source-map-loader',
  ],
  enforce: 'pre',
};

exports.css = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader?-url&sourceMap',
  ],
};

/* exports.js = {
  test: /\.js$/,
  use: [
    'babel-loader',
  ],
  exclude: /node_modules/,
}; */

exports.js = {
  test: /\.jsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: true,
  },
};

exports.ts = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: false,
  },
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
