# Upload files React App

## Required software to run project

1. node js (14.17.6 or higher) (if you don't have it installed, you can install from https://nodejs.org/en/)
2. postgresql (v. 14) (if you don't have it installed, you can install from https://www.postgresql.org/download/)

## Create a database

1. run command line from _c:\program files\postgresql\14\bin_ (your path and number of version can be different from these)
2. run command _psql -U postrges_ and enter password that you entered during installation
3. run command _create database uploads;_
4. run command _\connect uploads;_
5. use script from database.sql file on this project to create new table
6. use command _select \* table;_ to get all fields from table

## To run project you must

1. open file db.js and edit line _password: "none"_. you must write you current password (password that you entered during installation and creating database uploads)
2. run command line from project folder (test-proj-31 )and use command _npm i_
3. _cd client_
4. use command _npm i_
5. _cd .._
6. command to start server _npm run dev_
7. run command line _cd client_
8. _npm start_
