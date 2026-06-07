import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "transcom-storage.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
       {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
       {
        protocol: "https",
        hostname: "freelogopng.com",
      },
      {
        protocol: "https",
        hostname: "transcomdigital.com",
      },
      {
        protocol: "https",
        hostname: "shamimelectronics.com.bd" ,
      },
       {
        protocol: "https",
        hostname: "starwaygroupbd.com"  ,
      },
      {
        protocol: "https",
        hostname:  "diamu.com.bd"  ,
      },
       {
        protocol: "https",
        hostname:  "images.unsplash.com"  ,
      },
       {
        protocol: "https",
        hostname:  "myonebd.com"  ,
      },
       {
        protocol: "https",
        hostname:  "www.lg.com"  ,
      },
      {
        protocol: "https",
        hostname:  "www.shutterstock.com"  ,
      },
      {
        protocol: "https",
        hostname:   "i.pravatar.cc"  ,
      },
      {
        protocol: "https",
        hostname:   "img.magnific.com"  ,
      },



    ],
  },
};

export default nextConfig;