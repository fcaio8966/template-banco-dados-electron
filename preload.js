console.log ("carregou  o meu arquivo de preload")

const{contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld("api",{
    cadastrarUsuario: (campoNome, campoEmail) => {
        console.log("cadastrar usuario")

        ipcRenderer.invoke("criar-usuario",campoNome,campoEmail)
    }
})
