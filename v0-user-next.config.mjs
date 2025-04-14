/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 对于静态导出，需要禁用图片优化
  },
  // 如果您的网站不是部署在域名根目录，而是子目录，需要添加basePath
  // 例如：basePath: '/portfolio',
  
  // 如果您使用自定义域名，可以不设置basePath
}

export default nextConfig;
