// next.config.js
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|avi)$/, // Include video formats
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash].[ext]', // Output file structure
          },
        },
      });
      return config;
    },
  };
  