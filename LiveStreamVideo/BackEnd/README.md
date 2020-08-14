# Video Streaming backend
Done via VS Code  

## Run the server
node server  
OR via nodemon  
npm run devStart  

## via Docker:
docker build --tag webrtcvideobroadcast .  
docker run -d -p 4000:4000 webrtcvideobroadcast  

## Browse as broadcaster
https://localhost:4000/cast.html  

## Browse as viewer
https://localhost:4000
s
## If stuff goes wrong
sudo lsof -i :4000 // Get PID of items hosted on port 4000  
kill -9 <PID> // Kill that process  
OR  
kill -9 $(lsof -t -i:4000) 