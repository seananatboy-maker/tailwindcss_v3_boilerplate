const PathUrl = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9010,
	},
	paths: {
		// root: "./",
		src: {
			base: "./src",
			css: "./src/assets/css",
			sass: "./src/assets/sass",
			js: "./src/assets/js",
			img: "./src/assets/images",
			fonts: "./src/assets/fonts"
		},
		tmp: {
			base: "./.tmp",
			css: "./.tmp/assets/css",
			js: "./.tmp/assets/js",
			img: "./.tmp/assets/images",
			fonts: "./.tmp/assets/fonts"
		},
		dist: {
			base: "./dist",
			css: "./dist/assets/css",
			js: "./dist/assets/js",
			img: "./dist/assets/images",
			fonts: "./dist/assets/fonts"
		}
	}
}

export default PathUrl;