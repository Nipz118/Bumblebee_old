var UITreeview = function () {
    
    var runTreeView = function () {
        
        $("#tree").dynatree({
            
        });
        
        $("#tree2").dynatree({
            onActivate: function (node) {
                
                alert("You activated " + node.data.title);
            },
            children: [{
                title: "Item 1"
            }, {
                title: "Folder 2",
                isFolder: true,
                key: "folder2",
                children: [{
                    title: "Sub-item 2.1"
                }, {
                    title: "Sub-item 2.2"
                }]
            }, {
                title: "Item 3"
            }]
        });
        
        $("#tree3").dynatree({
            
            initAjax: {
                url: "assets/plugins/dynatree/tests/sample-data1.json"
            },
            onActivate: function (node) {
                $("#echoActive").text(node.data.title);
            },
            onDeactivate: function (node) {
                $("#echoActive").text("-");
            }
        });
        var treeData = [{
            title: "item1 with key and tooltip",
            tooltip: "Look, a tool tip!"
        }, {
            title: "item2: selected on init",
        }, {
            title: "Folder",
            isFolder: true,
            key: "id3",
            children: [{
                title: "Sub-item 3.1",
                children: [{
                    title: "Sub-item 3.1.1",
                    key: "id3.1.1"
                }, {
                    title: "Sub-item 3.1.2",
                    key: "id3.1.2"
                }]
            }, {
                title: "Sub-item 3.2",
                children: [{
                    title: "Sub-item 3.2.1",
                    key: "id3.2.1"
                }, {
                    title: "Sub-item 3.2.2",
                    key: "id3.2.2"
                }]
            }]
        }, {
            title: "Document with some children (expanded on init)",
            key: "id4",
            children: [{
                title: "Sub-item 4.1 (active on init)",
                activate: true,
                children: [{
                    title: "Sub-item 4.1.1",
                    key: "id4.1.1"
                }, {
                    title: "Sub-item 4.1.2",
                    key: "id4.1.2"
                }]
            }, {
                title: "Sub-item 4.2 (selected on init)",
                select: true,
                children: [{
                    title: "Sub-item 4.2.1",
                    key: "id4.2.1"
                }, {
                    title: "Sub-item 4.2.2",
                    key: "id4.2.2"
                }]
            }, {
                title: "Sub-item 4.3 (hideCheckbox)",
                hideCheckbox: true
            }, {
                title: "Sub-item 4.4 (unselectable)",
                unselectable: true
            }]
        }];
        
        $("#tree4").dynatree({
            checkbox: true,
           
            classNames: {
                checkbox: "dynatree-radio"
            },
            selectMode: 1,
            children: treeData,
            onActivate: function (node) {
                $("#echoActive1").text(node.data.title);
            },
            onSelect: function (select, node) {
               
                var s = node.tree.getSelectedNodes().join(", ");
                $("#echoSelection1").text(s);
            },
            onDblClick: function (node, event) {
                node.toggleSelect();
            },
            onKeydown: function (node, event) {
                if (event.which == 32) {
                    node.toggleSelect();
                    return false;
                }
            },
            
            cookieId: "dynatree-Cb1",
            idPrefix: "dynatree-Cb1-"
        });
         
        $("#tree5").dynatree({
            checkbox: true,
            selectMode: 2,
            children: treeData,
            onSelect: function (select, node) {
                
                var selNodes = node.tree.getSelectedNodes();
               
                var selKeys = $.map(selNodes, function (node) {
                    return "[" + node.data.key + "]: '" + node.data.title + "'";
                });
                $("#echoSelection3").text(selKeys.join(", "));
            },
            onClick: function (node, event) {
               
                if (node.getEventTargetType(event) == "title")
                    node.toggleSelect();
            },
            onKeydown: function (node, event) {
                if (event.which == 32) {
                    node.toggleSelect();
                    return false;
                }
            },
            
            cookieId: "dynatree-Cb2",
            idPrefix: "dynatree-Cb2-"
        });
        
        $("#tree6").dynatree({
            initAjax: {
                url: "assets/plugins/dynatree/tests/sample-data1.json"
            },
            onLazyRead: function (node) {
                
                node.appendAjax({
                    url: "sample-data2.json",
                    debugLazyDelay: 750 
                });
            },
            dnd: {
                preventVoidMoves: true, 
                onDragStart: function (node) {
                    
                    return true;
                },
                onDragEnter: function (node, sourceNode) {
                    
                    if (node.parent !== sourceNode.parent) {
                        return false;
                    }
                    
                    return ["before", "after"];
                },
                onDrop: function (node, sourceNode, hitMode, ui, draggable) {
                   
                    sourceNode.move(node, hitMode);
                }
            }
        });
    };
    return {
       
        init: function () {
            runTreeView();
        }
    };
}();