module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
	        dist: {
	            options: {
	                outputStyle: 'nested',
					sourcemap: 'none'
	            },
	            files: {
	                'style.css': 'build.scss'
	            }
	        } 
	    },
		autoprefixer: {
			dist: {
				files: {
					'style.css': 'style.css' 
				}
			}
		},
	    watch: {
	        css: {
				files: ['**/**.scss'],
				tasks: ['sass','autoprefixer'],
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
	grunt.registerTask('default',['watch']);
}