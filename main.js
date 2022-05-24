import database from "./conexao.js"
import { get, set, ref, onValue } from "firebase/database"

console.log("oi gente");

//let bandasRef = ref(database,"/bandas")

//get(bandasRef).then((snap) => { 
//    let dados = snap.val()
//    console.log("Dados:",dados);
//})

//let novaBandasRef = ref(database,"/bandas/b05")
//set(novaBandasRef,{ 
//    id: "b05",
//    nome: "uma outra banda 5",
//    estilo: "pop"
//})

let bandasRef = ref(database,"/bandas/banda01/likes")
onValue(bandasRef,(snap) => {
    let dados = snap.val()
    console.log("Dados:",dados);
})
