const  mysql = require("mysql")
const express = require("express")
const states = require("./globalStates")
const app = express()
const port = 3000

const dbConfig = {
    host: 'database_desafio', //container name
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const insertRadomName = ()=>{
    const conn = mysql.createConnection(dbConfig)
    const name = (Math.random() + 1).toString(36).substring(2);
    const sql = `insert into PEOPLE(name) values('${name}');`
    conn.query(sql)
    conn.end()
}

const retrieveRadomNames = ()=>{
    const conn = mysql.createConnection(dbConfig)

    conn.connect( (err) => {
        if (err) throw err;
        conn.query("SELECT NAME FROM PEOPLE;", (err, result, fields) => {
            if (err) throw err;
            states.users = result
            console.log(states.users);
            conn.end()
        });
    });
}

const getPage = ()=>{

    let list = ""
    states.users.forEach((user)=>{
        list = list + `<li>${user.NAME}</li>\n`
    })

    return `
        <html>
        <head>
        </head>
        <body>
        <div>
            <h2>
                <p>Full Cycle Rocks!</p>
            </h2>
            <h3>Atualize a página para gerar novos dados na tabela.</h3>
            <h4><p>- Lista de nomes cadastrada no banco de dados.</p></h4>
            <div style="width:300px; height:300px; background: #ccc; overflow: scroll">
                <ul>
                    ${list}
                </ul>
            </div>
            
        </div>
        </body>
        </html>
    `
}

app.get("/", (req, res)=>{
    insertRadomName()
    retrieveRadomNames()
    let page = getPage()    
    console.debug(page)
    res.send(page)
})

app.listen(port, ()=>{
    console.log("Running on localhost:" + port)
})