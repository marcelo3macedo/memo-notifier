import { container } from "tsyringe"

import CreateUserUseCases from "@modules/users/useCases/createUser/createUserUseCases"
import IndexUserUseCases from "@modules/users/useCases/indexUser/IndexUserUseCases"

class User {
    static async retrieve({ channelType, userId }) {
        const indexUserUseCases = container.resolve(IndexUserUseCases)
        const createUserUseCases = container.resolve(CreateUserUseCases)
        
        const user = await indexUserUseCases.execute({
            channelType,
            key: userId
        })

        if (user) {
            return user
        }

        await createUserUseCases.execute({
            key: userId,
            channelType
        })

        return indexUserUseCases.execute({
            channelType,
            key: userId
        })
    }
}

export default User