export default {
    default: {
        welcome: {
            no_session: "Olá {{user}}, nenhuma há sessão pendente para revisão.\n\nAcesse memorizou.com.br e crie/adicione uma nova sessão.",
            sessions_open: "Olá {{user}}, existe as seguintes sessões em aberto:\n\n{{sessions}}\n\n Qual deseja revisar?",
            session_open: "Olá {{user}}, há a sessão {{sessionName}} disponível, deseja revisá-la?",
            options: "Qual delas você deseja verificar?"
        },
        user: {
            notFound: "Usuário não encontrado, verifique o código digitado.",
            found: "Usuário encontrado, seja bem vindo ao MemoBot"
        },
        session: {
            completed: "Parabéns! Você completou essa sessão com sucesso."
        },
        trigger: {
            exit: "Sua sessão foi encerrada.\nObrigado por utilizar o Memo."
        },
        auth: {
            login: "Bem-vindo ao MemoBot, integre-se com a plataforma nos informando o código disponibilizado em:\nmemorizou.com.br/integracoes/telegram\n\nDigite o seu código de integração."
        },
        keywords: {
            menu: 'menu,menu principal,recomeçar,inicio',
            sair: 'sair,encerrar,fechar'
        },
        options: {
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