# User API
## Register user API

Endpoint : POST /api/user

Request Body :
``` json
{
 "username":"john123",
 "password":"123",
 "name":"john"
}
```
Response Body Succes :
``` json
{
 "status":"succes",
 "data":[]
}
```
Response Body Error :
``` json
{
 "status":"failed",
 "error":"something error"
}
```
## Login user API

Endpoint : POST /api/user

Request Body :
``` json
{
 "username":"john123",
 "password":"123"
}
```
Response Body Succes :
``` json
{
 "status":"succes",
 "token":"uniqe-token"
}
```
Response Body Error :
``` json
{
 "status":"failed",
 "error":"password or username wrong "
}
```

## Logout user API

Endpoint : DELETE /api/user

Headers :
- auth


Response Body Succes :
``` json
{
 "status":"succes",
}
```
Response Body Error :
``` json
{
 "status":"failed",
 "error":"no authorization"
}
```
## Get user API

Endpoint : GET /api/user

Headers :
- auth


Response Body Succes :
``` json
{
 "status":"succes",
 "data":[
    {
        "username":"john123",
        "password":"123"
    }
 ]
}
```
Response Body Error :
``` json
{
 "status":"failed",
 "error":"user not found"
}
```

## Update user API

Endpoint : PATCH /api/user

Headers :
- auth

Request Body :
``` json
{
 "username":"john123", // optional
 "password":"123",     // optional
 "name":"john"         // optional
}
```
Response Body Succes :
``` json
{
 "status":"succes",
 "data":[
    {
        "username":"john123",
        "password":"123"
    }
 ]
}
```
Response Body Error :
``` json
{
 "status":"error",
 "error":"something"
}
```
