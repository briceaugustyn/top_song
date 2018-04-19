drop database if exists TopSong_db;
create database TopSong_db;
use TopSong_db;
create table item(
    song varchar (30) not null,
    artist varchar (30) not null,
    date1 varchar (30) not null,
   rating varchar (30) not null
);
insert into item (song,artist,date1,rating )VALUES ('Jayou','Jurasik Five','Jurasik Five','Jurasik Five');
select * from item;
