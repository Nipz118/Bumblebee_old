var TableData = function () {
   
    var runDataTable = function () {
        var oTable = $('#sample_1').dataTable({
            "aoColumnDefs": [{
                "aTargets": [0]
            }],
            "oLanguage": {
                "sLengthMenu": "Show _MENU_ Rows",
                "sSearch": "",
                "oPaginate": {
                    "sPrevious": "",
                    "sNext": ""
                }
            },
            "aaSorting": [
                [1, 'asc']
            ],
            "aLengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] 
            ],
            
            "iDisplayLength": 10,
        });
        $('#sample_1_wrapper .dataTables_filter input').addClass("form-control input-sm").attr("placeholder", "Search");
        
        $('#sample_1_wrapper .dataTables_length select').addClass("m-wrap small");
       
        $('#sample_1_wrapper .dataTables_length select').select2();
        
        $('#sample_1_column_toggler input[type="checkbox"]').change(function () {
            
            var iCol = parseInt($(this).attr("data-column"));
            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
        });
    };
    return {
       
        init: function () {
            runDataTable();
        }
    };
}();