/**
 * jQuery操作Select
 * Created by Mtime on 2017/1/3.
 */
var selectOperater = {
    clean: function () {
        $("#tempSelect").empty();
    },
    add: function () {
        $("#tempSelect").append("<option value='2'>选项最后添加的选项</option>");
    },
    preadd: function () {
        $("#tempSelect").prepend("<option value='1'>选项最前添加的选项</option>");
    },
    echo: function () {
        $("#tempSelect").val(2);
    }
}

$(function () {
    $("#clean").on('click', function () {
        selectOperater.clean();
    });

    $("#add").on('click', function () {
        selectOperater.add();
    });

    $("#preadd").on('click', function () {
        selectOperater.preadd();
    })

    $("#echo").on('click', function () {
        selectOperater.echo();
    });
});

