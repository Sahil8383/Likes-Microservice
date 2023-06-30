docker build -t node-app .
docker run -p 3000:3000 node-app

docker build -t react-app .
docker run -p 80:80 react-app

docker compose up 
docker compose down