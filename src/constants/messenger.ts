export default {
    default: {
        welcome: {
            no_session: "{{user}}, nenhuma há sessão pendente para revisão.\n\nAcesse memorizou.com.br e crie/adicione uma nova sessão.",
            sessions_open: "{{user}}, existe as seguintes sessões em aberto:\n\n{{sessions}}\n\n Qual deseja revisar?",
            session_open: "{{user}}, há a sessão {{sessionName}} disponível, deseja revisá-la?",
            options: "Qual delas você deseja verificar?",
            verified: "Parabéns! Seu canal foi integrado com sucesso.\n\nAgora você pode iniciar a memorizar!"
        },
        user: {
            notFound: "Usuário não encontrado, ative seu usuário na plataforma Memorizou",
            found: "Usuário encontrado, seja bem vindo ao MemoBot"
        },
        session: {
            completed: "Parabéns! Você completou essa sessão com sucesso.",
            init: "Iniciando a sessão {{sessionName}}."
        },
        trigger: {
            exit: "Sua sessão foi encerrada.\nObrigado por utilizar o Memo."
        },
        auth: {
            login: "Bem-vindo ao MemoBot, integre-se com a plataforma através do link a seguir:\n\n<a href='{{link}}'>{{link}}</a>"
        },
        keywords: {
            menu: 'menu,menu principal,recomeçar,inicio',
            sair: 'sair,encerrar,fechar'
        },
        options: {
            init: "Iniciar",
            yes: "Sim",
            no: "Não"
        },
        error: {
            invalidMessage: "Resposta inválida.",
            sessionNotFound: "Sessão não encontrada",
            difficultyNotFound: "Dificuldade não encontrada"
        }
    }
};