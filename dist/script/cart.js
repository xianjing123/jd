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
(function () {
    //全选功能
    $('thead input[type="checkbox"]').on('change',function () {
        $('tbody input[type="checkbox"]').prop('checked', $(this).prop('checked'))
    })
    $('tbody').on('change','input[type="checkbox"]',function(){
        $('thead input[type="checkbox"]').prop('checked',
            $('tbody input[type="checkbox"]:checked').length === $('tbody input[type="checkbox"]').length)
    })

    function sum($tr) {
        var price = parseInt($tr.find('.price').html().slice(1))   //html()取得的是字符串
        var count = parseInt($tr.find('.count').html())   //html()取得的是字符串
        $tr.find('.sum').html('￥' + price * count);   // * 将字符串转换成了数字
    }

    //改变商品个数
    $('tbody').on('click', '.minus', function () {
        //this就是那个减号
        // $(this).next()[0].innerHTML -= 1;   //a-b会将ab转数字
        var count = $(this).next().html();
        if (count === '1') {
            return;
        }
        count--;
        // console.log(count)
        $(this).next().html(count)
        sum($(this).parents('tr'))
    })

    $('tbody').on('click', '.add', function () {
        //this就是那个减号
        // $(this).next()[0].innerHTML -= 1;   //a-b会将ab转数字
        var count = $(this).prev().html();
        if (count === '99') {
            return;
        }
        count++;
        // console.log(count)
        $(this).prev().html(count)
        sum($(this).parents('tr'))
    })


    //发送ajax，取得购物车信息
    $.get('../php/cart.php', function (resp) {
        console.log(resp)
        if(resp==''){
            $('tbody').html('<span>购物车还没有商品</span>')
            return;
        }
        var trs = resp.map(function (product) {
            return `
            <tr>
                <td><label><input type="checkbox"></label></td>
                <td>${product.name}</td>
                <td class="price">￥${product.price}</td>
                <td><img src="${product.img}" alt=""></td>
                <td>
                    <button class="minus">-</button>
                    <span class="count">${product.count}</span>
                    <button class="add">+</button>
                </td>
                <td class="sum">￥${product.price * product.count}</td>
            </tr>
        `})

        $('tbody').html(trs.join(''))
    })
    $('.signout').click(function(){
        removeCookie('userid','/')
        removeCookie('username','/')
        location.reload()
    })
    $('.logo').click(function(){
        location.href = '../index.html'
    })
})();
