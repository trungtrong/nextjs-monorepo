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

const metaEnv: ImportMetaEnv = process.env as unknown as ImportMetaEnv;

const environment: ImportMetaEnv = {
    ENV_NAME: metaEnv.ENV_NAME,
    NEXT_PUBLIC_DOMAIN_URL: metaEnv.NEXT_PUBLIC_DOMAIN_URL,
    NEXT_PUBLIC_HOST_DOMAIN_URL: metaEnv.NEXT_PUBLIC_HOST_DOMAIN_URL,
    ENV_API_BASE_URL: metaEnv.ENV_API_BASE_URL,
    ENV_WEBSOCKET_ENDPOINT: metaEnv.ENV_WEBSOCKET_ENDPOINT
}

export default environment;
