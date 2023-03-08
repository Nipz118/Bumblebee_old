var Dropzone = function () {
    
    var runDropzone = function () {
        
        $(".dropzone").dropzone({
            paramName: "file", 
            maxFilesize: 5.0, 
            addRemoveLinks: true
        });
    };
    return {
        init: function () {
            runDropzone();
        }
    };
}();