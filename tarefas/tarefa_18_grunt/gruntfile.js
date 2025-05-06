module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'main.less.css':'main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'main.less.min.css':'main.less'
                },
            },
        },
        sass:{
            development:{
                files:{
                    'main.sass.css':'main.scss'
                },
            },
            production:{
                options:{
                    style:'compressed'
                },
                files:{
                    'main.min.sass.css':'main.scss'
                },
            },
        },
        concurrent:{
            target:['sass', 'less']
        }
    })
    grunt.registerTask('ola',function(){
        const assincrona = this.async()
        setTimeout(()=>{
            console.log('Hello World')
            assincrona()
        },3000)
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-concurrent')

    grunt.registerTask('default', ['sass', 'less'])
}