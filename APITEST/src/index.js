const app = require('./app');
require('./database');

async function init() {
    await app.listen(3001);
    console.log('Server on port 3001');
}

init();