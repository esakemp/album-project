# ALBUM-PROJECT

A simple project based around discogs API.
Intention is to visualize data of a personal collection we can get from said API.

## Requirements

You only need docker and docker-compose on your system to run this project. 

- clone the repo
- either run `restart.sh` found in root or use `docker-compose up` command
- now the project should be running on ports 8081 (frontend) and 8080 (backend)
- start developing

## warning

`fmsu.sh` script can be used to start the service too but it will prune all docker images and volumes. Do not use if not sure.

## accessing database

Once the project is running you can use `pg-terminal.sh` to attach a shell to postgres container and do manual queries.
