(function () {
    //点击logo返回首页
    document.querySelector('.welcome img').onclick = function () {
        location.href = '../index.html'
    };
    //input选框的hover样式
    (function(){
        let phone = document.querySelector('.input-phone')
        let input = document.querySelector('.input-wrap input')
        let wrap = document.querySelector('.input-wrap')
        let tips = document.querySelector('.input-tips')
        let area = document.querySelector('.area')
        function focus(){
            wrap.style.border = '1px solid #777'
            area.style.borderColor = '#777'
        }
        function leave(){
            wrap.style.border = '1px solid #ccc'
            area.style.borderColor = '#ccc'
        }
        phone.onmouseenter = focus
        phone.onmouseleave = leave
        input.onfocus = function () {
            this.placeholder = ''
            tips.style.visibility = 'visible'
            wrap.style.border = '1px solid #777'
            area.style.borderColor = '#ccc'
            phone.onmouseenter = null
            phone.onmouseleave = null
        }
        input.onblur = function () {
            this.placeholder = '建议使用常用手机号'
            tips.style.visibility = 'hidden'
            wrap.style.border = '1px solid #ccc'
            phone.onmouseenter = focus
            phone.onmouseleave = leave
            if(input.value.length !== 11 || !Boolean(Number(input.value)) || !/^1[3-9]/.test(input.value)){
                tips.innerHTML = '手机号码格式错误'
                tips.style.visibility = 'visible'
                tips.style.color = 'orange'
                return;
            }else{
                tips.innerHTML = '验证完成后，你可以使用该手机登录或找回密码'
                tips.style.visibility = 'hidden'
                tips.style.color = '#ddd'
            }
        }
    })();
    document.querySelector('.submit').onclick = function(){
        let input = document.querySelector('.input-wrap input')
        let tips = document.querySelector('.input-tips')
        if(input.value.length !== 11 || !Boolean(Number(input.value)) || !/^1[3-9]/.test(input.value)){
            tips.innerHTML = '手机号码格式错误'
            tips.style.visibility = 'visible'
            tips.style.color = 'orange'
            return;
        }else{
            tips.innerHTML = '验证完成后，你可以使用该手机登录或找回密码'
            tips.style.visibility = 'hidden'
            tips.style.color = '#ddd'
        }
        location.href = '../html/register2.html'
    }
    document.querySelector('.input-button').onclick = function(){
        document.querySelector('.input-button').innerHTML = '√'
    }
})();