# SnowMailbox

Sending and Receiving Christmas cards ❤️‍🔥💌🎄
[🎞️ youtube](https://youtu.be/q2CDzVLoD14?si=wc6E_qWRDNyUoxUQ)

<img width="1402" alt="image" src="https://github.com/2ujin/SnowMailbox/assets/42020919/93544c27-8699-43e5-949d-f373bd80d63a">


## Run
Client & Server
```
npm install
```
```
npm run start
```


## Skills
### Frontend
* React
* Typescript
### Backend
* Nest JS
* mongoDB


## Notes
* In order to implement Google login, you must register the email to be tested in Google API. and Add REACT_APP_CLIENT_KEY (this is google client key) [ref](https://console.cloud.google.com/welcome?project=analog-vault-305809)
* In server, You need to connect mongoDB and add .env file

`client .env`
```typescript
REACT_APP_CLIENT_KEY=YOUR_GOOGLE_CLIENT_KEY
```

`server .env`
```typescript
MONGODB_URI=YOUR_MONGO_URI
SECRET_KEY=YOUR_SECRET_KEY (You just have to decide)
```

