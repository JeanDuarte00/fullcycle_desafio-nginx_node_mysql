# Desafio Full Cycle 

### No terminal 
- Execute: ```docker-compose --env-file ./environments/dev.env up```
- Execute: ```docker exec -i mysql_desafio mysql -uroot -proot < ./mysql/scripts/create_table.sh```
- Acesse : localhost:8080

### Descrição
- Nginx como proxy reverso.
- Aplicação NodeJs rodando na porta 3000 para salvar registros e retornar os registro salvos.
- Banco de dados MySql para persistência.
