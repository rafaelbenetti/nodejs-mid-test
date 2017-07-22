# Basic information

## To run the API
```js
 sudo docker-compose up
```

## To run the tests
```js
 sudo docker-compose up
 sudo docker exec -it NODE_CONTAINER_ID bash
 sudo npm test
```

## To enable black list
- There is two environment variables the can be used to configure.
- Instead of create a list for block, I choose specify a serial number to block.
- By default black list is enabled in package.json start task.
- By default the serial number to block is 1234XPTO.

```js
 BLACK_LIST_ENABLED=true // to enable
 BLACK_LIST_SERIAL_NUMBER=123XPTO // to specify the serial number to block
```

## There is a postman collection in the root, it can be used for documentation.

## Questions
 - Why we are using 200 status code for insert?
    - I asked because sometimes I see 201 and 202, but the http's definition is not so clear.
 - Why we are returning "null" in GET when database is empty? 
    - Why not return an empty array?