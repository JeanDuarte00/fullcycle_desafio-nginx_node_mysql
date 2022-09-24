# Desafio Full Cycle 

### Rodar no terminal 
- Iniciar Serviços: docker-compose up
- Configuração do MySql: (Até o momento, sem sucesso com docker-entrypoint-initdb.d)
  - docker exec -it database_desafio bash
  - mysql -uroot -proot nodedb < scripts/create_table.sh 
- Acessar localhost:80 (localhost) -> O desafio pede 8080 mas esta rodando outra coisa no momento.

### Descrição
- Nginx como proxy reverso.
- Aplicação NodeJs rodando na porta 80 para salvar registros sempre que carregar a página em banco de dados e retornando uma lista com o dados inseridos.
- Banco de dados MySql para guardar os dados.
