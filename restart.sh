docker system prune -a --volumes --force
docker-compose -f docker-compose.yml -f docker/dco.updater.yml up -d
docker-compose logs -f