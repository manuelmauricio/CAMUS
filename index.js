const express = require('express');
const bodyParser = require('body-parser');
require('./src/models/connection');

/*requires de rutas*/
const user_router = require('./src/routers/userRouter');


const app = express();
const port = 3000; // 5000 / 5001


app.use(bodyParser.json());
app.use('/api', user_router);

app.listen(port, () => {
    console.log('La aplicación está escuchando al puerto http://localhost:' + port);
});