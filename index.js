const configPadrao = {
    usuario: "admin",
    tema: "escuro",
    notificacoes: true,
};


const dadosUsuario = {
    usuario: "joao",
    tema: "claro",
};


const { usuario, tema, notificacoes } = { ...configPadrao, ...dadosUsuario };

const exibeNotificacoes = notificacoes && tema === "escuro" ? "Notificações ativas" : "Notificações desativadas";


function atualizarConfig(newConfig) {
    return { ...configPadrao, ...newConfig };
}

// Exibe resultado em log
console.log(`Usuário: ${usuario}`);
console.log(`Tema: ${tema}`);
console.log(exibeNotificacoes);

// ATUALIZA CONFIG
const novaConfig = atualizarConfig({ tema: "escuro", notificacoes: false });
console.log("Nova Configuração:", novaConfig);
