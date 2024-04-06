/** @type {import('next').NextConfig} */
const nextConfig = {
    //add that fro Image tag
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3.amazonaws.com',
            port: '',
            pathname: '/my-bucket/**',
          },
        ],
      },
};

export default nextConfig;
