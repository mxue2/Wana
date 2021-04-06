const client = require('./db');

//connect to the database
//client.connect();

/*client.query(`select * from `, (err, result) => {
    if (!err) {
        console.log(result.rows);
    }
    //end the connection
    client.end();
})
*/

//self-call function
(async () => {
    await client.connect();

    const result = await client.query(`select * from dimregion`);
    console.log(result.rows);
    //end the connection
    client.end();
})();