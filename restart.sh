docker-compose down
docker system prune -a --volumes --force
docker-compose build --no-cache
docker-compose up -d
docker-compose logs -f