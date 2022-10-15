import "@lib/VariableManager";

export default {
    endpoint: process.env.TELEGRAM_ENDPOINT,
    token: process.env.TELEGRAM_TOKEN,
    endpointWithToken: process.env.TELEGRAM_ENDPOINT.replace('{token}', process.env.TELEGRAM_TOKEN)
};