docker-compose down
npm install
docker-compose up -d --build --remove-orphans
sudo chown -R $USER ../
docker-compose up