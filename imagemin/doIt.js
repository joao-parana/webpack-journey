
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	await imagemin(['images/*.png'], 'build/images', {
		plugins: [
			imageminPngquant( { quality: [0.30, 0.40] } )
		]
	});

	console.log('Images optimized');
})();

