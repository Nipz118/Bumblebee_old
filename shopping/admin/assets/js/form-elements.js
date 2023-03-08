var FormElements = function () {
    
    var runInputLimiter = function () {
        $('.limited').inputlimiter({
            remText: 'You only have %n character%s remaining...',
            remFullText: 'Stop typing! You\'re not allowed any more characters!',
            limitText: 'You\'re allowed to input %n character%s into this field.'
        });
    };
      
    var runAutosize = function () {
        $("textarea.autosize").autosize();
    };
    
    var runSelect2 = function () {
        $(".search-select").select2({
            placeholder: "Select a State",
            allowClear: true
        });
    };
    
    var runMaskInput = function () {
        $.mask.definitions['~'] = '[+-]';
        $('.input-mask-date').mask('99/99/9999');
        $('.input-mask-phone').mask('(999) 999-9999');
        $('.input-mask-eyescript').mask('~9.99 ~9.99 999');
        $(".input-mask-product").mask("a*-999-a999", {
            placeholder: " ",
            completed: function () {
                alert("You typed the following: " + this.val());
            }
        });
    };
    var runMaskMoney = function () {
        $(".currency").maskMoney();
    };
    
    var runDatePicker = function () {
        $('.date-picker').datepicker({
            autoclose: true
        });
    };
    
    var runTimePicker = function () {
        $('.time-picker').timepicker();
    };
    
    var runDateRangePicker = function () {
        $('.date-range').daterangepicker();
        $('.date-time-range').daterangepicker({
            timePicker: true,
            timePickerIncrement: 15,
            format: 'MM/DD/YYYY h:mm A'
        });
    };
    
    var runColorPicker = function () {
        $('.color-picker').colorpicker({
            format: 'hex'
        });
        $('.color-picker-rgba').colorpicker({
            format: 'rgba'
        });
        $('.colorpicker-component').colorpicker();
    };
    
    var runColorPalette = function () {
        $('.color-palette').colorPalette()
            .on('selectColor', function (e) {
                $('#selected-color1').val(e.color);
            });
    };
    
    var runTagsInput = function () {
        $('#tags_1').tagsInput({
            width: 'auto'
        });
    };
    
    var runSummerNote = function () {
        $('.summernote').summernote({
            height: 300,
            tabsize: 2
        });
    };
    
    var runCKEditor = function () {
        CKEDITOR.disableAutoInline = true;
        $('textarea.ckeditor').ckeditor();
    };
    return {
        
        init: function () {
            runInputLimiter();
            runAutosize();
            runSelect2();
            runMaskInput();
            runMaskMoney();
            runDatePicker();
            runTimePicker();
            runDateRangePicker();
            runColorPicker();
            runColorPalette();
            runTagsInput();
            runSummerNote();
            runCKEditor();
        }
    };
}();