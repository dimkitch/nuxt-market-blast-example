const { asyncExec } = require('./helpers/asyncExec');
const { getCurrentConfig } = require('./helpers/getCurrentConfig');
const fs = require('fs');

exports.noSsrModeDeploy = async () => {
    const currentConfig = await getCurrentConfig();

    await new Promise((resolve, reject) => {
        fs.unlink('./.env', err => {
            if (err) {
                reject(console.log(err));
            }
            console.log('.env file deleted successfully');
            resolve(null);
        });
    });

    await new Promise((resolve, reject) => {
        fs.copyFile('./.env.example', './.env', err => {
            if (err) {
                throw err;
                reject();
            }
            console.log('.env file created');
            resolve(null);
        });
    });
    await new Promise((resolve, reject) => {
        fs.appendFile(
            './.env',
            `DOMAIN = ${currentConfig.apiDomain}\n`,
            err => {
                if (err) {
                    throw err;
                    reject(console.log('Config written'));
                }
                process.env.DOMAIN = currentConfig.apiDomain;
                resolve();
            },
        );
    });

    await new Promise((resolve, reject) => {
        fs.appendFile(
            './.env',
            `DOMAIN_DNS = ${currentConfig.dnsApiDomain}`,
            err => {
                if (err) {
                    throw err;
                    reject();
                }
                console.log('Config written');
                process.env.DOMAIN_DNS = currentConfig.dnsApiDomain;
                resolve();
            },
        );
    });

    console.log('all env written');
    try {
        console.log('staring build');
        const result = await asyncExec(`npx nuxt build`);
        console.log(result.stdout || result.stderr);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
    console.log('Redirect requests to ./dist directory');
    process.exit();
};
