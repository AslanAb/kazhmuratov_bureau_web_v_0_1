/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "mir-s3-cdn-cf.behance.net",
				port: "",
				pathname: "/project_modules/fs/**"
			},
			{
				protocol: "https",
				hostname: "mir-s3-cdn-cf.behance.net",
				port: "",
				pathname: "/project_modules/1400/**"
			}
		]
	}
}

module.exports = nextConfig
