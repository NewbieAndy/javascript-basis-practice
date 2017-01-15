/**
 * Created by Mtime on 2017/1/13.
 */

$(function () {
    $("#testForm").validate(
        {
            submitHandler: function (form) {
                alert("提交表单");
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
                    required: true,
                    email: true
                },
                age: {
                    required: true,
                    minlength: 2
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
                email: "请输入一个正确的邮箱",
                age: "请输入年龄"
            }
        }
    );
    // $("#subBtn").on('click', function () {
    //     alert('提交');
    // })
});
