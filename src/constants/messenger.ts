export default {
    default: {
        welcome: {
            no_session: "Olá {{user}}, nenhuma há sessão pendente para revisão.\n\nAcesse memorizou.com.br e crie/adicione uma nova sessão.",
            sessions_open: "Olá {{user}}, existe as seguintes sessões em aberto:\n\n{{sessions}}\n\n Qual deseja revisar?",
            session_open: "Olá {{user}}, há a sessão {{sessionName}} disponível, deseja revisá-la?",
            options: "Qual delas você deseja verificar?"
        },
        trigger: {
            exit: "Sua sessão foi encerrada.\nObrigado por utilizar o Memo."
        },
        keywords: {
            menu: 'menu,menu principal,recomeçar,inicio',
            sair: 'sair,encerrar,fechar'
        }
    }
};