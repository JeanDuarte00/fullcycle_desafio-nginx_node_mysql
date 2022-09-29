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

const execQuery = (query) => {
    const conn = mysql.createConnection(dbConfig)
    conn.connect( (err) => {
        if (err) console.error(err.message);
        conn.query(query, (err, result, fields) => {
            if (err) console.error(err.message);
            conn.end()
            return result
        });
    });
}

const insertRadomName = ()=>{
    const name = (Math.random() + 1).toString(36).substring(2);
    const sql = `insert into PEOPLE(name) values('${name}');`
    execQuery(sql)
}

const retrieveRadomNames = ()=>{
    let sql = "SELECT NAME FROM PEOPLE;"
    states.users = execQuery(sql)
}

const getPage = ()=>{

    let list = ""
    if(states.users) {
        states.users.forEach((user)=>{
            list = list + `<li>${user.NAME}</li>\n`
        })
    }

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