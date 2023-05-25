import app from "./app"
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then( () => {

    console.log("database conectada")
    app.listen(3000, () => {
        console.log("Rodando servidor")
    })

}).catch(err =>{

    console.log(err)

})