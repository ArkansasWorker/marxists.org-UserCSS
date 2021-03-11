const sass = require('node-sass');
const ApplicableDomains = require('./domains.json');
const Themes = require('./themes.json');
const FilesToConcat = ["style.user.css"];
Themes.forEach(function(theme,index,array){
	FilesToConcat.push('./src/themes/' + theme.split(':')[0] + '.css');
});
console.log('                 !#########       #' + '\n' +
'               !########!          ##!' + '\n' +
'            !########!               ###' + '\n' +
'         !##########                  ####' + '\n' +
'       ######### #####                ######' + '\n' +
'        !###!      !####!              ######' + '\n' +
'          !           #####            ######!' + '\n' +
'                        !####!         #######' + '\n' +
'                           #####       #######' + '\n' +
'                             !####!   #######!' + '\n' +
'                                ####!########' + '\n' +
'             ##                   ##########' + '\n' +
'           ,######!          !#############' + '\n' +
'         ,#### ########################!####!' + '\n' +
'       ,####\'     ##################!\'    #####' + '\n' +
'     ,####\'            #######              !####!' + '\n' +
'    ####\'                                      #####' + '\n' +
'    ~##                                          ##~');
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
					// (defined in ./domains.json)
					var domains = '';
					ApplicableDomains.forEach(function(domain,index,array){
						if (index === array.length - 1){ 
							domains += 'domain("'+domain+'")'; // last item, note missing comma
						} else {
							domains += 'domain("'+domain+'"),';
						}
					});
					src = src.replace('__DOMAINS__', domains);

					// Replaces "__THEMES__" keyword with list of applicable domains
					// (defined in ./themes.json)
					var userCssThemes = '[\n';
					Themes.forEach(function(theme,index,array){
						if (index === array.length - 1){ 
							userCssThemes += '\t"'+theme+'"\n'; // last item, note missing comma
						} else {
							userCssThemes += '\t"'+theme+'",\n';
						}
					});
					userCssThemes += ']';
					src = src.replace('__THEMES__', userCssThemes);

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
				src: FilesToConcat,
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