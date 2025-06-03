/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  readonly VITE_ALCHEMY_ID: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_VIDEO_GENERATION_API: string
  readonly VITE_ANALYTICS_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

