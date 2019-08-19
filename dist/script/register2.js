(function(){
    function $(element){
        return document.querySelector(element)
    }
    //所有提示框的显示与隐藏
    (function(){
        var all = document.querySelectorAll('.users div input')
        var tips = document.querySelectorAll('.tips')
        for(let i = 0; i<all.length; i++){
            all[i].onfocus = function(){
                tips[i].style.visibility = 'visible'
            }
            all[i].onblur = function(){
                tips[i].style.visibility = 'hidden'
            }
        }
    })()
    //重复密码
    function repeat(){
        var tips = $('.tips:last-of-type')
        if($('.repeat input').value === $('.password input').value){
            tips.innerHTML = '请再次输入密码'
            tips.style.visibility = 'hidden'
            tips.style.color = '#aaa'
        }else{
            tips.innerHTML = '重复密码不正确'
            tips.style.visibility = 'visible'
            tips.style.color = 'orange'
        }
    }
    //用户名
    $('.username input').addEventListener('blur',function(){
        var reg = /^\w{6,16}$/
        if(reg.test(this.value) || this.value === ''){
            $('.tips').innerHTML = '支持6-16位英文字符，包括数字，“_”'
            $('.tips').style.visibility = 'hidden'
            $('.tips').style.color = '#aaa'
            var xhr = new XMLHttpRequest()
            xhr.open('post',`../php/register.php`,true)
            xhr.onreadystatechange = function(){
                if(this.readyState !==4)return;
                if(this.status < 200 || this.status >= 300)return;
                if(this.responseText==='existing'){
                    $('.tips').innerHTML = '账户已被注册'
                    $('.tips').style.visibility = 'visible'
                    $('.tips').style.color = 'orange'
                    return;
                }else{
                    $('.tips').innerHTML = '支持6-16位英文字符，包括数字，“_”'
                    $('.tips').style.visibility = 'hidden'
                    $('.tips').style.color = '#aaa'
                }
            }
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send(`username=${$('.username input').value}`)
        }else{
            $('.tips').innerHTML = '只能在6-16字符内,必须为数字，字母，下划线'
            $('.tips').style.visibility = 'visible'
            $('.tips').style.color = 'orange'
        }
    })
    //密码
    $('.password input').addEventListener('blur',function(){
        var reg = /^\w{6,16}$/
        var tips = $('.tips:nth-of-type(2)')
        if(reg.test(this.value) || this.value === ''){
            tips.innerHTML = '支持6-16位英文字符，包括数字，“_”'
            tips.style.visibility = 'hidden'
            tips.style.color = '#aaa'
        }else{
            tips.innerHTML = '只能在6-16字符内,必须为数字，字母，下划线'
            tips.style.visibility = 'visible'
            tips.style.color = 'orange'
        }
        repeat()
    })

    $('.repeat input').addEventListener('blur',repeat)
    //点击注册的post请求
    var arr = []
    $('.submit').onclick = function(){
        for(var i = 0;i<document.querySelectorAll('.tips').length;i++){
            arr[i] = (getComputedStyle(document.querySelectorAll('.tips')[i]).visibility)
        }
        var end = arr.every(function(item){
            return item==='hidden'
        })    
        if(end && $('.repeat input').value!=='' && $('.username input').value!=='' && $('.password input').value!==''){
            var xhr = new XMLHttpRequest()
            xhr.open('post',`../php/register2.php`,true)
            xhr.onreadystatechange = function(){
                if(this.readyState !==4)return;
                if(this.status < 200 || this.status >= 300)return;
                if(this.responseText==='existing'){
                    $('.tips').innerHTML = '账户已被注册'
                    $('.tips').style.visibility = 'visible'
                    $('.tips').style.color = 'orange'
                    return;
                }else{
                    $('.tips').innerHTML = '支持6-16位英文字符，包括数字，“_”'
                    $('.tips').style.visibility = 'hidden'
                    $('.tips').style.color = '#aaa'
                }
                if(this.responseText==='success'){
                    location.href='../html/login.html'
                }
            }
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send(`username=${$('.username input').value}&password=${$('.password input').value}`)
        }else{
            console.log('失败')
            return;
        }
    }
    $('.welcome img').onclick = function(){
        location.href = '../index.html'
    }
})();