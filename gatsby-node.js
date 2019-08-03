exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
    const config = getConfig()
    console.log(config)
  }
