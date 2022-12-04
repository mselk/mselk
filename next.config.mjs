/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		loader: 'akamai',
		path: '/mselk',
	},
	assetPrefix: './',
	basePath: '/mselk',
};

export default nextConfig;
