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
	                'style.user.css': 'build.scss'
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