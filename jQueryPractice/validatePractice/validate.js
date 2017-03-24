/**
 * Created by Mtime on 2017/1/13.
 */


var validateForm = function (callback) {
    $("#testForm").validate(
        {
            submitHandler: function () {
                callback();
            },
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirmPassword: {
                    required: true,
                    minlength: 5,
                    equalTo: "#passwordId"
                },
                email: {
                    required: true
                },
                age: {
                    required: true,
                    age: [1, 100]
                }
            },
            messages: {
                username: {
                    required: "请输入用户名",
                    minlength: "用户名必需由两个字母组成"
                },
                password: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于 5 个字母"
                },
                confirmPassword: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于 5 个字母",
                    equalTo: "两次密码输入不一致"
                },
                email: "请输入一个正确的邮箱"
            }
        }
    );
}
var hello = function () {
    alert("提交表單");
}
$(function () {
    //添加自定义验证规则
    $.validator.addMethod("age", function (value, element, params) {
        if (value.length > 3) {
            return false;
        }
        if (value >= params[0] && value <= params[1]) {
            return true;
        } else {
            return false;
        }
    }, "必须是1到100的数");
    $("#subBtn").on('click', function () {
        validateForm(hello);
    })
});
