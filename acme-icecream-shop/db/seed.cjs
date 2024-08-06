const client = require('./client.cjs');

const createTables = async () => {
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS ice_cream_flavors (
                flavor_id SERIAL PRIMARY KEY,
                flavor_name VARCHAR(100) NOT NULL,
                description TEXT,
                availability BOOLEAN DEFAULT true
            );
        `);
        console.log('TABLES CREATED!');
    } catch (err) {
        console.error('Error creating tables:', err);
    }
};

const syncAndSeed = async () => {
    try {
        await client.connect();
        console.log('CONNECTED');
   

        await createTables();

        console.log('DISCONNECTED');
    } catch (err) {
        console.error('Error during sync and seed:', err);
        await client.end();
    }
};

syncAndSeed();