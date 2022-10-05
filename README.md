# Desafio Full Cycle 

## Pré-requisito
Deve ter ao menos a versão 1.29 do docker compose
- ```sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose```
- ```sudo chmod +x /usr/local/bin/docker-compose```
Para futura referência: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

### No terminal 
- Execute: ```docker-compose --env-file ./environments/dev.env up```
- Execute: ```docker exec -i mysql_desafio mysql -uroot -proot < ./mysql/scripts/create_table.sh```
- Acesse : localhost:8080

### Descrição
- Nginx como proxy reverso.
- Aplicação NodeJs rodando na porta 3000 para salvar registros e retornar os registro salvos.
- Banco de dados MySql para persistência.
