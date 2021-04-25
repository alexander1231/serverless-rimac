const AWS = require("aws-sdk");
const uuid = require("uuid");
const swapi = require('swapi-node');

const mysql = require('serverless-mysql')({
  config: {
    host     : "rm1jsy8upbkcjn1.caakqzl0ieh3.us-east-1.rds.amazonaws.com",
    database : "test",
    user     : "test",
    password : "password"
  },
  cap:2
})

module.exports.listado = async (event) => {

  await mysql.connect()

  let results = await mysql.query({sql:'SELECT * FROM language', timeout: 10000});

  await mysql.end();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'listado',
        results: results,
      },
      null,
      2
    ),
  };

};

module.exports.convertir = async(event) => {
  const params = event.queryStringParameters

  await mysql.connect()
  keys = Object.keys(params)
  let all_result = []
  query = ''
  for (var [key, value] of Object.entries(params)) {
      query = `SELECT * FROM language where ${key} like "%${value}%"`
      let result = await mysql.query({sql:query, timeout: 10000});      
      all_result.push(result)  
  } 



  await mysql.end();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Convierte en la mejor version que puedes ser!',
        input: keys,
        para: params,
        results:JSON.stringify(all_result), 
        keys : keys, 
        info : Object.entries(params),        
        query : query
      },
      null,
      2
    ),
  };
};

module.exports.registrar = async(event, context, callback) => {
  const data = event.dato;

  //query = ''
  //query += 'insert into `language` values (0, "'+ data[1]['es'] +'", "'+data[1]['en']+'");'
  query='';
  for (var i = Object.keys(data).length - 1; i >= 0; i--) {
    data[i]['es']
    query += 'insert into `language` values (0,"'+ data[i]['es'] +'", "'+data[i]['en']+'");'
  }

  await mysql.connect()

  let results = await mysql.query({sql: query, timeout: 10000});

  await mysql.end();
  

  return {
    statusCode:200,        
    results: results,
  };
  
};