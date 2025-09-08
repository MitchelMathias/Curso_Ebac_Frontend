const { file } = require("grunt")

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            dev:{
                files:{
                    'dev/css/main.css': 'dev/less/main.less'
                }
            }
        },
        watch:{
            styles:{
                files: ['dev/less/*.less'],
                tasks: ['less:dev']
            },
            images:{
                files: ['dev/images/**/*.{png,jpg,gif,svg}'],
                tasks: ['imagemin:compress_images']
            }
        },
        imagemin:{
            compress_images:{
                files:[{
                    expand: true,
                    cwd: 'dev/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dev/images_compress/'
                }]
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-imagemin')
    grunt.registerTask('default', ['less', 'watch', 'imagemin'])
}