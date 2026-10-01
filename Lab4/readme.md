# NPM Project
1. go to project folder ( by cd)
2. type ```npm intit -y```
3.  package.json 
4. update ```type:module```
5. install nodemon ```npm i nodemon -D```
6. update script in package.json

script {
    "start": "node app.js",
    "dev": :nodemon prg7.js"
}
7. add node_modules to .gitignore
8. to run use `npm run dev`
# request type
1. get-get all,get by id
get all = url- /api/product
get be id = url- /api/product/101

2. POST → Send/Create data on server

text
POST /api/products
Body → new data


3. PUT → Update/Replace full data

text
PUT /api/products/101
Body → updated data


4. PATCH → Update part of data

text
PATCH /api/products/101
Body → changed data


5. DELETE → Delete data

text
DELETE /api/products/101


## Remember

text
GET     → Take
POST    → Create
PUT     → Update
PATCH   → Partial Update
DELETE  → Remove


## Express

text
req.params → URL data
req.query  → ? query data
req.body   → Sent data
res.json() → Send response


### Easy Rule

text
URL        → Where?
METHOD     → What?
BODY       → What data?
RESPONSE   → Server's answer