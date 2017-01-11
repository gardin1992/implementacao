requirejs.config({
	"baseUrl" : "js/modules",
	"urlArgs" : "bust=" + (new Date()).getTime(),
	"shim" : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    "paths" : {
        "jquery" : "../../bower_components/jquery/dist/jquery.min",
        "bootstrap" : "../../bower_components/bootstrap/dist/js/bootstrap.min",
        "main" : "../main"
    }
});

// Chamando módulo principal para iniciar a aplicação
requirejs(["main"]);