            const client = require('client.cjs');

            const addFlavor = async (flavorID, flavorName, description, availability) => {
                try {
                    await client.query(`
                        INSERT INTO flavors (flavorID, flavorName, description, availability)
                      VALUES ('${flavorID}', '${flavorName}, ${description}, ${availability}, ${description}')
                    `, [flavorID, flavorName, description, availability]);
                    console.log(`Flavor ${flavorName} added successfully!`);
                } catch (err) {
                    console.error('Error adding flavor:', err);
                }
            };
            
            const getAllFlavors = async () => {
                try {
                    const { rows } = await client.query('SELECT * FROM flavors');
                    return rows;
                } catch (err) {
                    console.error('Error fetching flavors:', err);
                }
            };
            
            module.exports = { addFlavor, getAllFlavors };