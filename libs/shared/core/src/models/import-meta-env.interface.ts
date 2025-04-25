// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// https://nextjs.org/docs/app/building-your-application/upgrading/from-vite
export interface ImportMetaEnv extends ProcessEnv {
    readonly ENV_NAME: string;
    readonly NEXT_PUBLIC_DOMAIN_URL: string;
    readonly NEXT_PUBLIC_HOST_DOMAIN_URL: string;
    readonly ENV_API_BASE_URL: string;
    readonly ENV_WEBSOCKET_ENDPOINT: string;
}
