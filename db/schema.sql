CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id int auto_increment not null primary key,
    burger_name varchar(50) not null,
    devoured boolean
);