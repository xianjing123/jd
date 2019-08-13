(function () {
    let login = document.querySelector('.jd .login')
    login.onclick = function (evt) {
        if (evt.target.tagName === 'LI') {
            document.querySelector('.jd .login .active').classList.remove('active')
            evt.target.children[0].classList.add('active')
        }
        if (evt.target.tagName === 'P') {
            document.querySelector('.jd .login .active').classList.remove('active')
            evt.target.classList.add('active')
        }
    }

})()

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