/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/meshroom",
    assetPrefix: "/meshroom",
    trailingSlash: true,
    output: "export", // ✅ required for static export
    reactStrictMode: true,
    images: {
        unoptimized: true, // ✅ required for static hosting if you're using <Image />
    },
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil",
            canvas: "commonjs canvas",
        });
        // config.infrastructureLogging = { debug: /PackFileCache/ };
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "liveblocks.io",
                port: "",
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
