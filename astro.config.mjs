// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const SITE_URL = 'https://hotaka-law.hotaka-g.jp/'

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // node_modules（依存関係）内の古いSass書き方による警告を非表示にする
          quietDeps: true,
        },
      },
    },
  },
})
