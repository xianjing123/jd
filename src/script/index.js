//二级菜单
function menu() {
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
menu();

(function () {
    //移入图片的动画效果
    $('.search .logo').mouseover(function () {
        if ($('.search .logo img')[0].src.indexOf('gif') !== -1) {
            return;
        }
        $('.search .logo img')[0].src = 'http://img1.360buyimg.com/da/jfs/t1/16134/5/11584/77878/5c90a4bdE5ae12937/38714fb6679b8daf.gif?v=0.23800889838342587%22'
        setTimeout(function () {
            $('.search .logo img')[0].src = 'http://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/header/sprite.png'
        }, 5000)
    });

    //大轮播
    (function () {
        let id;
        let count = 0;

        id = setInterval(function () {
            count += 1
            if (count === 8) {
                count = 0
            }
            next(count)
        }, 3000)

        $('.next').on('click', function () {
            count += 1
            if (count === 8) {
                count = 0
            }
            next(count)
        })
        $('.prev').on('click', function () {
            count -= 1
            if (count === -1) {
                count = 7
            }
            next(count)
        })

        $('.slide').on('mouseover', function () {
            $('.prev').css('display', 'block')
            $('.next').css('display', 'block')
            clearInterval(id)
        }).on('mouseout', function () {
            $('.prev').css('display', 'none')
            $('.next').css('display', 'none')
            id = setInterval(function () {
                count += 1
                if (count === 8) {
                    count = 0
                }
                next(count)
            }, 3000)
        })
        let li = document.querySelectorAll('.bullet li')
        for (let i = 0; i < li.length; i++) {
            li[i].onmouseenter = function () {
                $('.bullet .show').removeClass()
                $($('.bullet li')[i]).addClass('show')
                count = i
                next(i)
            }
        }

        function next(index) {
            $('.slide-wrapper .active').removeClass()
            $($('.slide-wrapper li')[index]).addClass('active')
            $('.slide .bullet .show').removeClass()
            $($('.bullet li')[index]).addClass('show')
        }
    })();

    //推荐小轮播
    (function(){
        let index = 0
        $('.next-recommend').click(function () {
            $('.item-active').removeClass('item-active')
            index += 1
            if (index === 3) {
                index = 0
            }
            $('.item-recommend').eq(index).addClass('item-active')
        })
        $('.prev-recommend').click(function () {
            $('.item-active').removeClass('item-active')
            index -= 1
            if (index === -1) {
                index = 2
            }
            $('.item-recommend').eq(index).addClass('item-active')
        })
        for(let i = 0;i<$('.data-index').length;i++){
            $('.data-index').eq(i).on('mouseenter',function(){
                $('.menu-child').eq(i).css('display','block')
            }).on('mouseleave',function(){
                $('.menu-child').eq(i).css('display','none')
            })
        }

    })();
    
    //京东秒杀小轮播
    (function(){
        let count = 0;
        let id;

        function slideTo(index){
            let slideTotal = document.querySelector('.slide-total')
            let slide = document.querySelector('.slide-total .slide-img').offsetWidth
            let focusIndex;
            if(index === 3){
                slideTotal.style.transition = 'none'
                slideTotal.style.left = 0 + 'px'
                count = 1
                setTimeout(function(){
                    slideTotal.style.transition = ''
                    slideTotal.style.left = -slide + 'px'
                },50)
                document.querySelector('.pagination .focus').className = ''
                document.querySelectorAll('.pagination p')[1].className = 'focus'
                return;
            }

            let left = -index * slide
            slideTotal.style.left = left + 'px'
            if(count<2){
                focusIndex=count
            }else{
                focusIndex=0
            }
            document.querySelector('.pagination .focus').className = ''
            document.querySelectorAll('.pagination p')[focusIndex].className = 'focus'
        }

        function slideNext(){
            count++
            slideTo(count)
        }

        function autoplay(){
            id = setInterval(function(){
                slideNext()
            },3000)
        }
        autoplay()

        function stop(){
            clearInterval(id)
        }

        document.querySelector('.seckill-brand-slide').onmouseenter = function(){
            stop()
        }
        document.querySelector('.seckill-brand-slide').onmouseleave = function(){
            autoplay()
        }

        let lis = document.querySelectorAll('.pagination p')
        for(let i = 0;i<lis.length;i++){
            lis[i].onmouseenter = function(){
                count = i
                slideTo(i)
            }
        }
    })();

    //京东秒杀轮播列表
    (function(){
        let count = 0;
        let id;

        function slideTo(index){
            let liW = document.querySelector('.seckill-list').offsetWidth
            let list = document.querySelector('.seckill-list-total')    
            if(index===4){
                list.style.transition = 'none'
                list.style.left = 0
                count = 1
                setTimeout(function(){
                    list.style.transition = ''
                    list.style.left = -liW + 'px'
                },50)
                return;
            }
            if(index===-1){
                list.style.transition = 'none'
                list.style.left = -3 * liW + 'px'
                count = 3
                setTimeout(function(){
                    list.style.transition = ''
                    list.style.left = -2 * liW + 'px'
                },50)
                return;
            }

            list.style.left = -liW * count + 'px'
        }

        function slideNext(){
            count++
            slideTo(count)
        }

        function slidePrev(){
            count--
            slideTo(count)
        }

        function autoplay(){
            id = setInterval(function(){
                slideNext()
            },3000)
        }

        document.querySelector('.seckill-list').onmouseenter = function(){
            clearInterval(id)
        }
        document.querySelector('.seckill-list').onmouseleave = function(){
            autoplay()
        }
        var start = null
        var end = null
        document.querySelector('.seckill-prev').onclick = function(){
            let now = +new Date()
            if(start !== null && now - start < 500){
                return;
            }
            start = +new Date()
            slidePrev()
        }
        document.querySelector('.seckill-next').onclick = function(){
            let now = +new Date()
            if(end !== null && now - end < 500){
                return;
            }
            end = +new Date()
            slideNext()
        }

        autoplay()
    })();

    (function(){
        let hour = document.querySelector('.time-hour')
        let minute = document.querySelector('.time-minute')
        let second = document.querySelector('.time-second')

        function time(min,days,year=new Date().getFullYear(),month=new Date().getMonth()+1,date=new Date().getDate()){
            let now = new Date()
            let d1 = new Date(year,month,date,min+days-1)
            let id = now.getHours()>=min&now.getHours()<min+days&now.getDate()===date&now.getMonth()+1===month&now.getFullYear()===year?true:false
            let hourNow = id?d1.getHours()-now.getHours():00
            let minuteNow = id?60-now.getMinutes():00
            let secondNow = id?60-now.getSeconds():00

            hour.innerHTML = ('00'+hourNow).slice(-2)
            minute.innerHTML =  ('00'+minuteNow).slice(-2)
            second.innerHTML =  ('00'+secondNow).slice(-2)
            if(hourNow===0 && minuteNow===0&&secondNow===0){
                console.log('运行结束')
                clearInterval(inter)
                return;
            }
            var inter = setInterval(function(){
                time(min,days)
            },1000)
        }

        //1、需要先定义变量hour记录小时,minute记录分钟,second记录秒钟
        //2、第一个参数为开始的小时(必选)，第二个参数为结束的小时(必选),其它参数为开始计时的时间
        time(6,3)
    })();
})();

//判断账户信息
(function () {
    let cookie = getCookie('username')
    var str = `
    <span>${cookie}</span>
    <ul>
        <li class="signout">退出登录</li>
    </ul>
    `
    var div = `
    <div class="img">
        <img src="//passport.jd.com/new/misc/skin/df/i/no-img_mid_.jpg"/>                  
    </div>
    <div class="user-show">
        <a>Hi,${cookie}</a>
        <p class="signout">
            <a>退出</a>
        </p>
    </div>`
    if (cookie) {
        $('.nav .login').html('欢迎回来,' + str).css({
            color: 'red',
            cursor: 'pointer',
            fontSize: '16px',
            width: '200px'
        })
        $('.nav .register').remove()
        $('.validate-login').html(div)
    }
    $('.signout').click(function () {
        removeCookie('userid', '/')
        removeCookie('username', '/')
        location.reload()
    })

})();