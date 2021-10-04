# React based application helps to interact with news and weather api servers.

# ready to use
this web app is deployed on heroku https://weather-news12.herokuapp.com/


# Set-Up
### Steps to set up development environment variables and deployment
- create .env files in the root directory 
- define environment variable "REACT_APP_WEATHER_API_KEY" in the above files ex: ```` REACT_APP_WEATHER_API_KEY = 23777389bjsdjhs7hi ```` get this api key from openweather api server.  
- Same like above define second environment variable ```` REACT_APP_NOT_SECRET_CODE=https://maps.googleapis.com/maps/api/js?key=EnterApiKey&libraries=places&callback ```` 
- build the project before deploying ````npm run build````
- install serve ````sudo npm i -g serve````
- test build code ````serve -s build````
- heroku buildpack for react app ````heroku create $APP_NAME --buildpack mars/create-react-app````   
- display saved custom variables on remote server by typing ex: $ ````heroku config````
- display saved custom variables on local server by typing ex: $```` export````
