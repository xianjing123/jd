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
        $('.search .logo img')[0].src = 'http://img1.360buyimg.com/da/jfs/t1/16134/5/11584/77878/5c90a4bdE5ae12937/38714fb6679b8daf.gif?v=0.23800889838342587%22)'
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