import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/seo-data'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_CONFIG.name,
        short_name: 'PrettyPrint',
        description: SITE_CONFIG.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#09090b',
        theme_color: '#10b981',
        icons: [
            {
                src: '/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/favicon.svg',
                sizes: '192x192',
                type: 'image/svg+xml',
            },
            {
                src: '/favicon.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
            },
        ],
    }
}
