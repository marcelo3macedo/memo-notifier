import { inject, injectable } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import Notify from "@lib/notify";
import Messenger from "@lib/messenger";

@injectable()
export default class UpdateIntegrationUseCases {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ id, userId }): Promise<void> {
        if (!id || !userId) return

        const user = await this.userRepository.getById({ id })
        await this.updateUserExternalId({ user, externalId: userId })

        const { channelType, key } = user || {}
        const messages = [ Messenger.getValue('welcome.verified') ]
        const options = [ { slug: 'init', content: Messenger.getValue('options.init') }]

        Notify.send({ channelType, key, messages, options })
    }

    async updateUserExternalId({ user, externalId }) {
        if (!user) return
        await this.userRepository.update({ id: user.id, key: user.key, channelType: user.channelType, externalId })
    }
}