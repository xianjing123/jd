//二级菜单
(function(){
    let lis = document.querySelectorAll('.row')
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            if (this.children[1] === undefined) return
            this.children[1].style.display = 'block'
            this.style.background = 'white'
            this.style.borderLeft = '1px solid #ddd'
            this.style.borderRight = '1px solid #ddd'
            this.onmouseout = function () {
                this.children[1].style.display = 'none'
                this.style.background = '#e3e4e5'
                this.style.border = 'none'
            }
        }
    }
})();
//判断cookie，是否重定向
(function(){
    let cookie = getCookie('username')
    if(cookie){
        $('.nav .login').html(cookie).css({
            color:'red',
            cursor:'pointer',
            fontSize:'18px'
        })
        $('.nav .register').remove()
    }
})();
//全选功能
(function(){
    var input = document.querySelector('.shopcart thead input[type=checkbox]')
    var checkboxs = document.querySelectorAll('.shopcart tbody input[type=checkbox]')
    input.onclick = function(){
        for(var i = 0;i<checkboxs.length;i++){
            checkboxs[i].checked = input.checked
        }
    }
})();
//反选功能
(function(){
    var input = document.querySelectorAll('.shopcart tbody input[type=checkbox]')
    var length;
    for(var i = 0;i<input.length;i++){
        input[i].onclick = function(){
            length = document.querySelectorAll('.shopcart tbody input[type=checkbox]:checked').length === input.length
            document.querySelector('.shopcart thead input[type=checkbox]').checked = length
        }
    }
})();
//增加个数
(function(){
    var add = document.querySelectorAll('.next')
    for(let i = 0;i<add.length;i++){
        add[i].onclick = function(){
            if (this.previousElementSibling.innerHTML === '99') {
                return;
            }
            this.previousElementSibling.innerHTML++
            sum(this.previousElementSibling)
        }
    }
})();
//减少个数
(function(){
    var minus = document.querySelectorAll('.prev')
    for(let i = 0;i<minus.length;i++){
        minus[i].onclick = function(){
            if (this.nextElementSibling.innerHTML === '1') {
                return;
            }
            this.nextElementSibling.innerHTML--
            sum(this.nextElementSibling)
        }
    }
})();
//改变小计
function sum(tr){
    let price = tr.parentNode.previousElementSibling.previousElementSibling.innerHTML
    let count = tr.innerHTML
    price = price.slice(1)
    tr.parentNode.nextElementSibling.innerHTML = '￥' + price * count
}