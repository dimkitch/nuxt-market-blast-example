const { asyncExec } = require('./asyncExec');

exports.installPackages = async () => {
    try {
        await asyncExec(`rm -r node_modules`);
        await asyncExec(`rm -r package-lock.json`);

        const result = await asyncExec(`npm install`);
        console.log(result.stdout || result.stderr);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};
