function menu(){
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
}
(function(){
    $('.search .logo').mouseover(function(){
        if($('.search .logo img')[0].src.indexOf('gif')!==-1){
            return;
        }
        $('.search .logo img')[0].src='http://img1.360buyimg.com/da/jfs/t1/16134/5/11584/77878/5c90a4bdE5ae12937/38714fb6679b8daf.gif?v=0.23800889838342587%22)'
        setTimeout(function(){
            $('.search .logo img')[0].src='http://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/header/sprite.png'
        },5000)
    })
})();

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