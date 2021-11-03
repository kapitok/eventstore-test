# wolkenkit-eventstore library test

##How to run test?

```json
docker-compose up
```

###NodeJS 12 container
```json
docker exec -it eventstore_test_app_node12 sh
npm install
node web/index.js

```

###NodeJS 14 container
```json
docker exec -it eventstore_test_app_node14 sh
npm install
node web/index.js
```
