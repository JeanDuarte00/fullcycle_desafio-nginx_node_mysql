const {join} = require('path')
require('dotenv').config({ path: join(__dirname, 'environments' ,'.env') })
const  mysql = require("mysql")
const express = require("express")
const states = require("./globalStates")
const app = express()
const port = process.env.APP_PORT

const dbConfig = {
    host: process.env.DATABASE_CONTAINER_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.DATABASE_PORT
}

const execQuery = async (query, callback) => {
    let response;
    const conn = mysql.createConnection(dbConfig)
    conn.connect( (err) => {
        if (err) console.error(err.message);
        conn.query(query, (err, result, fields) => {
            if (err) console.error(err.message);
            conn.end()
            return callback(result)
        });
    });
}

const insertRadomName = (callback)=>{
    const name = (Math.random() + 1).toString(36).substring(2)
    const sql = `insert into PEOPLE(name) values('${name}');`
    execQuery(sql, (resp)=>{
        return callback(resp)
    })
}

const retrieveRadomNames = async (callback)=>{
    let sql = "select NAME from PEOPLE;"
    execQuery(sql, (resp)=>{
        return callback(resp)
    })
}

const getPage = ()=>{

    let list = ""
    if(states.users != undefined) {
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
    insertRadomName(()=>{})
    retrieveRadomNames((resp)=>{
        states.users = resp
        let page = getPage()    
        res.send(page)
    })
})

app.listen(port, ()=>{
    console.log("Running on localhost:" + port)
})