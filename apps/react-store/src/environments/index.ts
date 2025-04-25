// eslint-disable-next-line @nx/enforce-module-boundaries
import { ImportMetaEnv } from './../../../../libs/shared/core/src/models';

const metaEnv: ImportMetaEnv = process.env as unknown as ImportMetaEnv;
const getMetaEnv = (): ImportMetaEnv => {
    return process.env as unknown as ImportMetaEnv;
};

const environment: ImportMetaEnv = {
    ENV_NAME: metaEnv.ENV_NAME,
    NEXT_PUBLIC_DOMAIN_URL: metaEnv.NEXT_PUBLIC_DOMAIN_URL,
    NEXT_PUBLIC_HOST_DOMAIN_URL: metaEnv.NEXT_PUBLIC_HOST_DOMAIN_URL,
    ENV_API_BASE_URL: metaEnv.ENV_API_BASE_URL,
    ENV_WEBSOCKET_ENDPOINT: metaEnv.ENV_WEBSOCKET_ENDPOINT
}

export default environment;
