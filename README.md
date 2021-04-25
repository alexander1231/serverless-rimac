# serverless-rimac
## Listar
Endpoint donde con metodo get que lista toda la informacion dentro de la tabla languages
 - https://anabuioeg6.execute-api.us-east-1.amazonaws.com/dev/listado
   
   ```json
    {
    "message": "listado",
    "results": [
        {
            "id_language": 1,
            "es": "nombre",
            "en": "name"
        },
        {
            "id_language": 2,
            "es": "apellido",
            "en": "last name"
        },
        {
            "id_language": 3,
            "es": "apellido",
            "en": "last name"
        },
        {
            "id_language": 4,
            "es": "apellido",
            "en": "last name"
        }
    ]
}
  ```
## Registrar
Endpoint donde se manda parametros para registrar en la tabla lenguaje

  - https://anabuioeg6.execute-api.us-east-1.amazonaws.com/dev/post/registrar
  ```json
    {
      "dato": [{
        "es":"apellido",
        "en":"last name"
      }]
    }
  ```
## Convertir
Endpoint donde pasamos parametros get y nos devuelve automaticamente la palabra en el otro idioma
  - https://anabuioeg6.execute-api.us-east-1.amazonaws.com/dev/convertir?en=name&es=nombre
  
    ```json
    // Resultado
    {
    "message": "true",
    "results": [
        [
            {
                "id_language": 1,
                "es": "nombre",
                "en": "name"
            },
            {
                "id_language": 2,
                "es": "apellido",
                "en": "last name"
            },
            {
                "id_language": 3,
                "es": "apellido",
                "en": "last name"
            },
            {
                "id_language": 4,
                "es": "apellido",
                "en": "last name"
            },
            {
                "id_language": 5,
                "es": "apellido",
                "en": "last name"
            }
        ],
        [
            {
                "id_language": 1,
                "es": "nombre",
                "en": "name"
            }
        ]
    ]
}
  ```
