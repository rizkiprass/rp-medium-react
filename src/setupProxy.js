const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Ganti dengan path endpoint yang sesuai di server Express
    createProxyMiddleware({
      target: "13.39.147.72:8080", // Ganti dengan alamat IP pribadi server Express
      changeOrigin: true,
    })
  );
};
