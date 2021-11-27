# details_api


* This is a 'REST API' for genrating random data as much you want ('currently 1000 rows available')
* Very Fast to serve.
* can genrate customized name.

##Features

* Get random details about 1000 rows of data in seconds.
* Build in 'NODE-JS'.
* Get Details with your given name.

---------------------------------------------------------------------------

##How to use ?

Get details with no of rows you want.


```http://localhost:8080/id/NUMBER_OF_ROWS_YOU_NEED```

Response -

```
[{"id":"1","first_name":"Matias","last_name":"Limprecht","gender":"Agender","email":"mlimprecht0@aboutads.info"},{"id":"2","first_name":"Raynell","last_name":"Skill","gender":"Non-binary","email":"rskill1@cnn.com"}]

```


Get details with provided name.

```http://localhost:8080/user/YOUR_GIVEN_NAME```

* EXAMPLE

```http://localhost:8080/user/mad_mods```

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


