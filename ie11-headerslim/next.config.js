const mayflowerAssets = require("@massds/mayflower-assets");
const withImages = require("next-images");

const config = {
  sassOptions: {
    // Mayflowers requires us to expose its includePaths so its imports work
    includePaths: mayflowerAssets.includePaths,
  },
  trailingSlash: true,
};

module.exports = withImages(config);
