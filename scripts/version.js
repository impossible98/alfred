const fs = require('fs');


class Version {
	main() {
		const now = new Date();
		const year = now.getFullYear();
		const month = (now.getMonth() + 1 < 10 ? '0' : '') + (now.getMonth() + 1);
		const day = (now.getDate() < 10 ? '0' : '') + now.getDate();
		const version = year + '.' + month + '.' + day;

		fs.writeFileSync('VERSION', version+ '\n');
		console.log('\x1b[32mAll has been done.\x1b[0m');
	}
}

function main() {
	const version = new Version();
	version.main();
}

main()
