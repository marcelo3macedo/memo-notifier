import VariableManager from "@lib/VariableManager"

VariableManager.load()

export default {
    url: process.env.QUEUE_URL,
    integrationValidation: process.env.QUEUE_INTEGRATIONVALIDATION
}