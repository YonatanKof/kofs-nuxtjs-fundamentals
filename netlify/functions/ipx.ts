import { createIPXHandler } from '@netlify/ipx';

export const handler = createIPXHandler({
	remotePatterns: [
		{
			protocol: 'https',
			hostname: 'm.media-amazon.com',
		},
	],
});
