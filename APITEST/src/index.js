const app = require('./app');
require('./database');
//const cors = require('cors')

async function init() {
    await app.listen(3001);
    console.log('Server on port 3001');
}



init();