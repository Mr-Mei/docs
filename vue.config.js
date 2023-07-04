module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/docs/" : "/", // docs---github仓库名
})