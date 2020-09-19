const fs = require('fs');
const path = require('path');

class Dist {
	copyDir(src, dest) {
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true });
		}

		fs.readdirSync(src).forEach((i) => {
			if (fs.statSync(path.join(src, i)).isFile()) {
				fs.copyFileSync(path.join(src, i), path.join(dest, i));
			} else if (fs.statSync(path.join(src, i)).isDirectory()) {
				this.copyDir(path.join(src, i), path.join(dest, i));
			}
		});
	}

	main() {
		console.log('\x1b[32mAll has been done.\x1b[0m');
	}
}

function main() {
	const dist = new Dist();
	dist.copyDir('src/Alfred', 'dist/Alfred.alfredpreferences');
	dist.main();
}

main()
