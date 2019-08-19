//切换扫码或账户
(function () {
    let login = document.querySelector('.jd .login')
    login.onclick = function (evt) {
        let active = document.querySelector('.jd .login .active')
        let code = document.querySelector('.login-code')
        let box = document.querySelector('.login-box')
        if (evt.target.tagName === 'LI') {
            active.classList.remove('active')
            evt.target.children[0].classList.add('active')
        }
        if (evt.target.tagName === 'P') {
            active.classList.remove('active')
            evt.target.classList.add('active')
        }
        if(document.querySelector('.erwei').className.indexOf('active')===-1){
            code.style.display = 'none'
            box.style.display = 'block'
        }else{
            box.style.display = 'none'
            code.style.display = 'block'
        }
    }

})()
//登录判断
$('.login-box button').on('click',function(){
    if($('.username').val()===''||$('.password').val()===''){
        $('.login-box .tips').css('visibility','visible')
        $('.login-box .tips span').html('请输入用户名和密码')
        return;
    }
    $.ajax({
        method:'post',
        url:'../php/login.php',
        data:{
            username:$('.username').val(),
            password:$('.password').val()
        },
        success:function(data){
            if(data.result){
                location.href="../index.html"
            }else{
                $('.login-box .tips').css('visibility','visible')
                $('.login-box .tips span').html('用户名或密码错误')
            }
        }
    })
})
//动画移入效果
$('.login-code').on('mouseenter',function(evt){
    setTimeout(function(){
        $('.login-code .help').css('display','block')
    },0)
}).on('mouseleave',function(){
    $('.help').css('display','none')
});
//点击input改变label颜色
(function(){
    $('.input .username').on('focus',function(){
        $('.input .user').eq(0).css('background','#ddd')
    }).on('blur',function(){
        $('.input .user').eq(0).css('background','#f1f1f1')
    })
    $('.input .password').on('focus',function(){
        $('.input .user').eq(1).css('background','#ddd')
    }).on('blur',function(){
        $('.input .user').eq(1).css('background','#f1f1f1')
    })
})();
//返回首页
(function(){
    $('.welcome img').click(function(){
        location.href = '../index.html'
    })
})();