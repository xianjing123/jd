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
            console.log(data)
            if(data.result){
                location.href="../index.html"
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
//返回首页
(function(){
    $('.welcome img').click(function(){
        location.href = '../index.html'
    })
})();