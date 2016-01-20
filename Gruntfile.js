// wrapper function
module.exports = function(grunt){
    //load the plugin that provides "responsive_images" task
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

 	//Project configuration and task definition
	//The project configuration is defined as an object passed to grunt.initConfig()method
	grunt.initConfig({

    uglify: {
        options: {
          manage:false
        },
        my_target: {
          files: [{
            expand: true,
            cwd: 'src/',
            src: '**/*.js',
            dest: './',
            ext: '.min.js'
          }]
        }
  },

  cssbeautifier : {
      files : ["src/**/*.css"]
    },
     cssmin: {
        my_target: {
          files: [{
              expand: true,
              cwd: 'src/',
              src:  '**/*.css',
              dest: './',
              ext: '.min.css'

          }]
    }

  },
  jsbeautifier : {
    files : ["src/**/*.js"],
    options : {
    }
},
    imagemin: {
        dynamic: {
            files: [{
              expand: true,
              cwd: 'src/',
              src: ['**/*.{png,jpg}'],
              dest: './'
            }]
        }
	},

  responsive_images: {
     dev1: {
          options: {
              // Task-specific options go here.
              engine: 'im',
              sizes: [{
              width: 602,
              height: 306,
              upscale: true,
              quality: 50

              }],
          },
          files: [{
              // Target-specific file lists and/or options go here.
              expand: true,
              src: ['mobilewebdev.jpg'],
              cwd: 'src/img/',
              dest: 'src/img/'
          }]
        },

      dev: {
      		options: {
        			// Task-specific options go here.
        			engine: 'im',
        			sizes: [{
  						width: 720,
  						height: 540,
  						upscale: true,
  						quality: 50

              },
              {
              width: 100,
              height: 100
              }]
         },
      		files: [{
        			// Target-specific file lists and/or options go here.
        			expand: true,
        			src: ['pizzeria.jpg'],
					    cwd: 'src/views/images/',
        			dest: 'src/views/images/'
      		}]
   		  }
      },// for responsive_images*/

      htmlmin: {                                     // Task
         dist: {                                      // Target
            options: {                                 // Target options
                  removeComments: true,
                  collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
                  'index.html': 'src/index.html',// 'destination': 'source'
                  'project-2048.min.html': 'src/project-2048.html',
                  'project-webperf.min.html': 'src/project-webperf.html',
                  'project-mobile.min.html': 'src/project-mobile.html',
                  'views/pizza.min.html': 'src/views/pizza.html'
            }
          }
    }




	}); // for grunt.initConfig()


 grunt.registerTask('default', ['responsive_images', 'imagemin', 'cssbeautifier', 'jsbeautifier', 'uglify', 'cssmin', 'htmlmin']);

};