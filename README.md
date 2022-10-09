# Desafio Full Cycle 

## Pré-requisito
Deve ter ao menos a versão 1.29 do docker compose: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04
- ```sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose```
- ```sudo chmod +x /usr/local/bin/docker-compose```

### No terminal 
- Execute: ```docker-compose --env-file ./environments/dev.env up```
- Acesse : localhost:8080

### Adminer (phpMinAdmin)
 - Acesse: localhost:8081
 
| Campo       | valor          | 
| ----------- | -------------- |
| System      | MySql          |
| Server      | mysql_desafio  |
| Username    | root           |
| Password    | root           |
| Database    | nodedb         |

### Descrição
- Nginx como proxy reverso.
- Aplicação NodeJs rodando na porta 3000 para salvar registros e retornar os registro salvos.
- Banco de dados MySql para persistência.
