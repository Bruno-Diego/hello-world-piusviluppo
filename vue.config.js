const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/hello-world-piusviluppo/',
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: {
        port: process.env.GITPOD_WORKSPACE_ID ? 443 : undefined,
      },
    },
  },
})
