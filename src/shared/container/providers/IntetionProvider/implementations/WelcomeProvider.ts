import { container } from "tsyringe";
import { IIntetionProvider } from "../IIntetionProvider";
import IndexUserAPIUseCases from "@modules/users/useCases/indexUserAPI/IndexUserAPIUseCases";
import ListSessionAPIUseCases from "@modules/sessions/useCases/listSessionAPI/ListSessionAPIUseCases";
import Messenger from "@lib/messenger";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_FINISHED, SESSIONTYPE_QUESTION_WELCOME } from "@constants/sessionType";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import { ITERATION_MENU } from "@constants/iteration";
import messenger from "@constants/messenger";

class WelcomeProvider implements IIntetionProvider {
    async process({ user, session }): Promise<IIterationDTO> {
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
            user: userAPI,
            session,
            sessionsAPI: sessionsAPI
        })
    }
    
    async makeMessage({ user, session, sessionsAPI }): Promise<IIterationDTO> {
        if (!sessionsAPI || sessionsAPI.length == 0) {
            const no_session = Messenger.getValue('welcome.no_session', [ { key: 'user', value: user.name } ])
            await SessionProcessor.update({ 
                session, 
                type: SESSIONTYPE_FINISHED, 
                messages: [ no_session ] 
            })

            return {
                messages: [ no_session ]
            }
        }

        if (sessionsAPI.length == 1) {
            const sessionMessage = Messenger.getValue('welcome.session_open', [ 
                { key: 'user', value: user.name },
                { key: 'sessionName', value: sessionsAPI[0].deck.name }
            ])
            let options = [
                { slug: sessionsAPI[0].id, content: messenger.default.options.yes },
                { slug: ITERATION_MENU, content: messenger.default.options.no  }
            ]

            await SessionProcessor.update({ 
                session, 
                type: SESSIONTYPE_QUESTION_WELCOME, 
                messages: [ sessionMessage ],
                options
            })

            return {
                options,
                messages: [ sessionMessage ]
            }
        }

        // if session = 1 -> message -> Sim/Não
        // if session > 1 -> message -> Options

        //user.name

        /*return [
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
        ]*/
    }
}

export { WelcomeProvider };