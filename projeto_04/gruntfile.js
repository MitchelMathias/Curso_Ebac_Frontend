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
            files: ['dev/less/*.less'],
            tasks: ['less:dev']
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.registerTask('default', ['less', 'watch'])
}