const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    server: "https"
}, transpileDependencies: true})