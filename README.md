# stickguygame

To start it up, run `docker-compose up -d`

You can connect to localhost:3000 to access the REST api.

Steps for getting into just mongo:

```
docker exec -it <image id> /bin/bash
mongo admin -u root -p pass
use testDB
db.testDB.insertOne({ "a": 1, "b": 2, "c": 3 })
db.testDB.find().pretty()
```

`command + d` to exit mongo and exec shell