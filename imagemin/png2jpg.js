const imagemin = require('imagemin');
const pngToJpeg = require('png-to-jpeg');
 
imagemin(['build/images/*.png'], 'build/jpg-images', {
    plugins: [
        pngToJpeg({quality: 70})
    ]
}).then((files) => {
    // Please keep in mind that all files now have the wrong extension
    // You might want to change them manually
    console.log('PNGs converted to JPEGs. Check build/jpg-images directory.');
});

