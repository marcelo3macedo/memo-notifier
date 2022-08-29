import IndexUserAPIUseCases from "@modules/users/useCases/indexUserAPI/IndexUserAPIUseCases";
import { container } from "tsyringe";
import { Intetion } from "./intetion";

export class Welcome extends Intetion {
    async process({ message }) {
        const indexUserAPIUseCases = container.resolve(IndexUserAPIUseCases)
        const user = await indexUserAPIUseCases.execute({
            id: '074a1691-672c-41d9-a573-a518219ad159'
        })
        
        console.log(user)

        // getUserName
        // getSessionsOpen
        // makeMessage
        return
    }
}