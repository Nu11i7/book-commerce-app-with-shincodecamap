// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.microcms-assets.io",
//       },
//     ],
//   },
//   /* config options here */
//   reactStrictMode: false,
// };

// export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  reactStrictMode: false,
};
