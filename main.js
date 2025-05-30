const { app, BrowserWindow, ipcMain } = require('electron')
const mysql = require("mysql2/promise")
console.log("__dirname", __dirname)
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: __dirname + "/preload.js",
      contextIsolation: true,
    }
  })
  async function conectarBancoDados() {
    var conexao = await mysql.createConnection({
      host: 'localhost',
      user: "root",
      password: "root",
      database: "electron_db"
    })

    return conexao
  }

  ipcMain.handle("criar-usuario", async function (evento, Nome, Email) {
    var conexao = await conectarBancoDados()

    var criarUsuarioSQL = "INSERT INTO usuarios(nome,email) VALUES(?,?)"

    var resultado = conexao.execute(criarUsuarioSQL, [Nome, Email])
    console.log('resultado', resultado)
  })

  win.loadFile('pages/index.html')
}

app.whenReady().then(() => {
  createWindow()
})