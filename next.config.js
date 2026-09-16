/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Os placeholders em /public/images são SVGs locais. Substitua-os
    // por JPG/PNG reais quando tiver as fotos do produto — isso também
    // permite remover esta configuração, se preferir.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
