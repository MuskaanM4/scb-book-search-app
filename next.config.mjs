/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['covers.openlibrary.org'],
    },
    eslint: {
      ignoreDuringBuilds: true, 
    },
  };
  
  export default nextConfig;