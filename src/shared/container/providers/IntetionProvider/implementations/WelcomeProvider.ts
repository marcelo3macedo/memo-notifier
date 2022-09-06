import { container } from "tsyringe";
import IMessageDTO from "@modules/messages/dtos/IMessageDTO";
import { IIntetionProvider } from "../IIntetionProvider";
import IndexUserAPIUseCases from "@modules/users/useCases/indexUserAPI/IndexUserAPIUseCases";
import ListSessionAPIUseCases from "@modules/sessions/useCases/listSessionAPI/ListSessionAPIUseCases";

class WelcomeProvider implements IIntetionProvider {
    async process({ user, messages }) {
        const id = '074a1691-672c-41d9-a573-a518219ad159'
        const indexUserAPIUseCases = container.resolve(IndexUserAPIUseCases)
        const listSessionAPIUseCases = container.resolve(ListSessionAPIUseCases)
        const userAPI = await indexUserAPIUseCases.execute({
            id
        })        
        const sessionsAPI = await listSessionAPIUseCases.execute({
            userId: userAPI.id
        })

        return this.makeMessage({
            userId: userAPI.id,
            messages
        })
    }
    
    makeMessage({ userId, messages }): IMessageDTO[] {
        return [
            {
                messageId: 1,
                userId,
                content: "Olá Marcelo, segue suas sessões em aberto:"
            },
            {
                messageId: 2,
                userId,
                content: "Qual delas você deseja verificar? 1- teste  2- teste  3 - teste"
            }
        ]
    }
}

export { WelcomeProvider };