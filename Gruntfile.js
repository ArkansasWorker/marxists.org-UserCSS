const ApplicableDomains = 'domain("marxists.org"), domain("marxists.info"), domain("marxists.architexturez.net")';
const sass = require('node-sass');
const pkg = require('./package.json');

module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
	        dist: {
	            options: {
	                outputStyle: 'nested',
					sourcemap: 'none',
					implementation: sass
	            },
	            files: {
	                'style.user.css': './src/build.scss'
	            }
	        } 
	    },
		autoprefixer: {
			dist: {
				files: {
					'style.user.css': 'style.user.css' 
				}
			}
		},
		concat: {
			options: {
				process: function(src, filepath) {
					// Replaces "__DOMAINS__" keyword with list of applicable domains
					// (defined at the top of this file)
					src = src.replace('__DOMAINS__', ApplicableDomains);

					// Replaces "__VERSION__" keyword with Version Number
					// (defined at the top of this file)
					src = src.replace('__VERSION__', pkg.version);

					// Replaces tabs with spaces in final output
					// (Stylus expects only spaces)
					src = src.replace(/\t/g, ' ');

					return src;
				}
      		},
			dist: {
				src: [
					'style.user.css',
					'./src/themes/default.css',
					'./src/themes/dracula.css',
					'./src/themes/nord.css',
					'./src/themes/ayu-dark.css',
					'./src/themes/ayu-light.css'
				],
				dest: 'style.user.css'
			}
		},
	    watch: {
	        css: {
				files: [
					'./src/**',
					'./src/themes/*'
				],
				tasks: ['sass','autoprefixer','concat'],
				options: {
					spawn: false,
					livereload: true
				}
			}
	    }
	});
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default',['watch']);
}