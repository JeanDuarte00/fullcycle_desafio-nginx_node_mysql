

let users = []

let init_db_script = `
create table if not exists PEOPLE(
    id int not null AUTO_INCREMENT,
    name varchar(255),
    primary key(id)
);
`

module.exports = { users, init_db_script }
