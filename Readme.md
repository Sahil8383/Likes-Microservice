## Backend
You need to navigate to the Backend directory and then run the commands given below to start the sever.
1. docker build -t node-app .
2. docker run -p 5000:5000 node-app

## Frontend
For the Frontend also need navigate to the 'frontend' directory and then run the commands given below to start the sever.
1. docker build -t react-app .
2. docker run -p 80:80 react-app
3. This allows you to access the React app in your browser at http://localhost.