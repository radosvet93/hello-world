module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat:{
            options:{
                separator:"\n\n"
            },
            dist:{
                src:['js/script.js','js/controller.js'],
                dest:'bin/<%= pkg.name %>.js'
            }
        },
        uglify:{
            my_target:{
                files:{
                    'bin/js/<%= pkg.name %>.min.js' : ['bin/<%= pkg.name %>.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-uglify');




    //tasks
    grunt.registerTask('concatJs',['concat']);

    grunt.registerTask('default',['uglify','concat']);

}