/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'snzslt-nextjs-demo-food-image.s3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  

module.exports = nextConfig
