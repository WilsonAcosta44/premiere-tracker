import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';
import { VitePWA }      from 'vite-plugin-pwa';

export default defineConfig({
  base: '/premiere-tracker/',

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
      manifest: {
        name:             'Premiere Tracker',
        short_name:       'Premiere',
        description:      'Track your Adobe Premiere Pro certification — 3 phases, 51 tasks.',
        theme_color:      '#818cf8',
        background_color: '#0d0d1a',
        display:          'standalone',
        start_url:        '/premiere-tracker/',
        icons: [
          {
            src:     'icon.svg',
            sizes:   'any',
            type:    'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
