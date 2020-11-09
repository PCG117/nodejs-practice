/*
 * @Author: your name
 * @Date: 2020-10-16 16:36:06
 * @LastEditTime: 2020-10-21 10:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01-base\static\js\index.js
 */
;(function($){
    var $input = $('.todo-input')
    $input.on('keydown',function(ev){
        if(ev.keyCode == 13){
            $.ajax({
                url: "/add",
                type: 'post',
                dataType: 'json',
                data: {
                    task: $input.val()
                },
                success: function (result) {
                    console.log(result);
                }
            })
        }
    })
    var $wrap=$('.todo-wrap')
    $wrap.on('click','li',function(){
        var $this = $(this)
        $.ajax({
            url: '/del',
            type: 'get',
            dataType: 'json',
            data: {
                id: $this.data('id')
            },
            success: function (result) {   
                if (result.code == 0) {
                    $this.remove()
                }
                else {
                    alert(result.msg)
                } 
            }            
        })
    })
    
    $('.avatar-input').on('change',function(){
        var formData = new FormData($("#avatar-form")[0]);
        $.ajax({
            url: "/uploadAvatar",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (result) {
                if (result.code == 0) {
                    $('.avatar img').attr('src',result.data)
                }
                else {
                    alert(result.msg)
                } 
            },
        });
    })
})(jQuery)