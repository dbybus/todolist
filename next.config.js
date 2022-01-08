module.exports = {
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false, https: false, http: false, crypto: false };
  
      return config;
    },
  };