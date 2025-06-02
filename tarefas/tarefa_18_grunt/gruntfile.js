const { option } = require("grunt")

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/style/main.css':'src/style/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'dist/style/main.min.css':'src/style/main.less'
                },
            },
        },
        watch:{
            dev:{
                files:['src/style/**/*.less','src/*.html', 'src/scripts/**/*.js'],
                tasks:['less:development','replace:dev', 'copy:dev'],
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[{
                        match:'endereco_do_css',
                        replacement: 'style/main.css'
                    },{
                        match:'endereco_do_js',
                        replacement:'../src/scripts/main.js'
                    }]
                },
                files:[{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dev/'
                }]
            },
            dist:{
                options:{
                    patterns:[{
                        match:'endereco_do_css',
                        replacement:'style/main.min.css'
                    },
                    {
                        match:'endereco_do_js',
                        replacement:'scripts/main.min.js'
                    }]
                },
                files:[{
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist/'
                }]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        copy:{
            dev:{
                files:[{
                    expand:true,
                    cwd:'src/scripts/',
                    src:['**/*.js'],
                    dest:'dev/scripts/'
                }]
            }
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:[{
                    'dev/scripts/main.min.js': ['src/scripts/**/*.js'],
                    'dist/scripts/main.min.js': ['src/scripts/**/*.js']
                }]
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.registerTask('default', ['less:development','replace:dev','copy:dev','uglify', 'watch',])
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist','clean','uglify'])
}