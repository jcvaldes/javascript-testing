curl -d '{"name": "juan", "address": "fake address", "age": "30", "id": 1}' -H "Content-Type: application/json" -X POST http://localhost:3001/users

curl -X GET http://localhost:3001/users
curl -X GET http://localhost:3001/users/1

curl -d '{"name": "juana", "address": "fake address", "age": "40", "id": 1}' -H "Content-Type: application/json" -X PUT http://localhost:3001/users
