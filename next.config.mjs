/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fvaiihtxuuznarcxamjf.supabase.co"
            }
        ]
    }
};

export default nextConfig;
