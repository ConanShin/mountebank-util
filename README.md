Stub backend API with mountebank interface
for client end to end test

-----------------------------------------

How to Install

```
npm install -g mountebank
```

Type below command to run mountebank server
```
mb
```

```
npm install --save mountebank-util
```

---------------------------------------------

How to Use
```js
var mountebank = require('mountebank-util')
var stubServer = new mountebank()

//To stub api /hello
stubServer.addResponse('/hello', 'GET', 'return value')
stubServer.createImposter()

//To remove stub
stubServer.deleteImposter()
```

-----------------------------------------------

Methods

|Name|Parameter|Description|
|---|---|---|
|constructor|port: Default) 9000|Instantiate stub server on specified port|
|addResponse|uri: URI to the API ex) '/hello'<br>method: Rest methods ex) 'GET, POST...'<br>content: Return object<br>statusCode: Default) 200|Configure specified URI to return object|
|updateResponse|uri: URI to the API to be updated<br>method: Rest methods<br>newResponseBody: Return object|Update specified API stub to return different object|
|createImposter|none|Open stub server|
|deleteImposter|none|Close stub server|
