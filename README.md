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
|addResponse|uri: '/hello'<br>method: 'Rest methods. ex) GET, POST...'<br>content: 'return object'<br>statusCode: 'default: 200'|Returns specified object on calling the API|
