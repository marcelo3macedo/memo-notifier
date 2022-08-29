import ListSessionAPIUseCases from "@modules/sessions/useCases/listSessionAPI/ListSessionAPIUseCases";
import IndexUserAPIUseCases from "@modules/users/useCases/indexUserAPI/IndexUserAPIUseCases";
import { container } from "tsyringe";
import { Intetion } from "./intetion";

export class Welcome extends Intetion {
    async process({ message }) {
        const id = '074a1691-672c-41d9-a573-a518219ad159'
        const indexUserAPIUseCases = container.resolve(IndexUserAPIUseCases)
        const listSessionAPIUseCases = container.resolve(ListSessionAPIUseCases)
        const user = await indexUserAPIUseCases.execute({
            id
        })        
        const sessions = await listSessionAPIUseCases.execute({
            userId: user.id
        })

        console.log(sessions)
        // makeMessage
        return
    }
}