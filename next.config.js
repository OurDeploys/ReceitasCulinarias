const nextConfig = {Add commentMore actions
  output: "export",
  trailingSlash: true,


  eslint: {
    ignoreDuringBuilds: true,
  },
@@ -11,8 +13,11 @@ const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/ReceitasCulinarias" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ReceitasCulinarias/" : "",



}

module.exports = nextConfig
