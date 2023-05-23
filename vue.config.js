module.exports = {
  pwa: {
    manifestOptions: {
      name: "Tira Dúvidas",
      short_name: "Tira Dúvidas",
      start_url: ".",
      display: "standalone",
      theme_color: "#000",
    },
    workboxPluginMode: "GenerateSW",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  },
};
