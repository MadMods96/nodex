# Nodex_api



* This is a 'REST API' for genrating random data as much you want ('currently 1000 rows available')
* Very Fast to serve.
* can genrate customized name.




## Features

* Get random details about 1000 rows of data in seconds.
* Build in 'NODE-JS'.
* Get Details with your given name.



## Use in your PC as 'localhost'.

you can use this repo on your pc too you only have to do is that 'clone this repo' as given below and then it will be installed into your pc.

``` 
git clone REPO_LINK
```

give a Command to install all dependencies gonna used for this api to get live.

```
npm install 
```

also set up your database first in have used 'heroku-postgresql' for storing my all data and its too easy to set up, use heroku CLI to set up which is fast and dont require much data to connect to db.

if you are doing with node-js use this command for connecting heroku db.
``` 
const pg = require('pg') 
//which is already installed into your files.

or 

const { Pool } = require("pg");

//then

const pool = new Pool({
    connectionString:YOUR_ACCESS_KEY('CLI'),
    ssl: {
      rejectUnauthorized: false,
    },
  });
  ```


## How to use ?


Home page json data which instructs how to use this api.

```
{"information":[{"status":200,"source":{"pointer":"https://akshpareek.herokuapp.com/"},"title":"Please peovide any number after api ' /id/NO_OF_DATA_NEEDED'  url to show some results","detail":"not an error","author":"Madhusudan pareek"}]}
```



Get details with no of rows you want.


```
http://localhost:8080/id/NUMBER_OF_ROWS_YOU_NEED
```

Response -

```
[{"id":"1","first_name":"Matias","last_name":"Limprecht","gender":"Agender","email":"mlimprecht0@aboutads.info"},{"id":"2","first_name":"Raynell","last_name":"Skill","gender":"Non-binary","email":"rskill1@cnn.com"}]

```


Get details with provided name.

```
http://localhost:8080/user/YOUR_GIVEN_NAME
```


Response - 

```
[{"id":"31","first_name":"mad_mods","last_name":"","gender":"Non-binary","email":"tgovettu@imgur.com"}]
```


* EXAMPLE

```
http://localhost:8080/user/mad_mods
```

RESPONSE -
```
[
{
"id":"77",
"first_name":"mad_mods",
"last_name":"Tows",
"gender":"Bigender",
"email":"ltows24@usatoday.com"
}
]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## Licence
[Mad_Mods](https://github.com/MadMods96/nodex/blob/master/LICENCE)
