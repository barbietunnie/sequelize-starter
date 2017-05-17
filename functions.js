'use strict';

const db = require('./models');

module.exports = {
    testDBConnection: () => {
        let sequelize = db.sequelize
                            .authenticate()
                            .then(err => {
                                if(err)
                                    return console.error(err);

                                console.log("Successfully connected to the database");
                            })
                            .catch(err => {
                                console.error("Unable to connect to the database: " + err);
                            });
    }
}