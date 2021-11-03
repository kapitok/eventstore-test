

async function initEventStore() {
    const Eventstore = require('wolkenkit-eventstore/postgres');
    const { Pool } = require('pg');
    const assert = require('assert');

    const pool = new Pool({
        host: 'eventstore_test_db',
        port: 5432,
        user: 'user',
        password: 'user',
        database: 'eventstore_test_db',
        ssl: false,
    });

    // Initialize event store
    await Eventstore.initialize({
        url: `postgres://user:user@eventstore_test_db:5432/eventstore_test_db`,
        namespace: 'etb',
    });

    // Check if event store initialized
    const connection = await pool.connect();
    const result = await connection.query(
        `SELECT table_name FROM information_schema.tables WHERE table_name LIKE 'store_etb_%'`
    );
    connection.release();

    assert.strictEqual(result.rows.length, 2, new TypeError('ES tables were not created'))

    result.rows.forEach((row) => {
        const {table_name} = row;
        console.log(table_name);
    })


    process.exit(1)
}

initEventStore();

