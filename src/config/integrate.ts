import VariableManager from "@lib/VariableManager"

VariableManager.load()

export default {
    endpoint: process.env.INTEGRATIONAPI_ENDPOINT
}