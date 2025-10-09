const {file} = require('grunt')

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin:{
            dist:{
                options:{
                    collapseWhitespace: true,
                    removeComments: true,
                },
                files:{
                    'build/index.html':'index.html'
                }
            }
        },

        less: {
            options: {
                compress: true,
            },
            dist: {
                src: 'style/main.less',
                dest: 'build/style/main.css',
            }
        },

        uglify:{
            dist:{
                src:'js/main.js',
                dest:'build/js/main.js',
            }
        },

        watch:{
            options:{
                livereload: true,
            },
            files:['index.html', 'style/main.less', 'js/main.js'],
            tasks:['htmlmin', 'less', 'uglify'],
        }
        
    })
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin', 'less', 'uglify']);
}
