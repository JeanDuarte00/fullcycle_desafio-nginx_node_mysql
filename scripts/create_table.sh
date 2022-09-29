
use nodedb;

create table if not exists PEOPLE(
    id int not null AUTO_INCREMENT,
    name varchar(255),
    primary key(id)
);


SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO PEOPLE (name) VALUES ('First');
