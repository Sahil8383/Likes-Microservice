
### Backend
1. docker build -t node-app .
2. docker run -p 5000:5000 node-app

### Frontend
1. docker build -t react-app .
2. docker run -p 80:80 react-app

docker compose up 
docker compose down