(function(){
    function $(element){
        return document.querySelector(element)
    }
    $('.small').onmousemove = function(evt){
        var x = evt.offsetX
        var y = evt.offsetY
        x = x - $('.float').offsetWidth / 2
        y = y - $('.float').offsetHeight / 2
        if(x<0){
            x=0
        }
        if(x>$('.small').offsetWidth - $('.float').offsetWidth){
            x = $('.small').offsetWidth - $('.float').offsetWidth
        }
        if(y<0){
            y=0
        }
        if(y>$('.small').offsetHeight - $('.float').offsetHeight){
            y = $('.small').offsetHeight - $('.float').offsetHeight
        }
        $('.big img').style.left = -x * 4 + 'px'
        $('.big img').style.top = -y * 4 + 'px'
        
        $('.float').style.left = x + 'px'
        $('.float').style.top = y + 'px'
    }
    $('.small').onmouseenter = function(){
        $('.big').style.display = 'block'
        $('.float').style.display = 'block'
    }
    $('.small').onmouseleave = function(){
        $('.big').style.display = 'none'
        $('.float').style.display = 'none'
    }
    $('.small').onmousedown = function(evt){
        evt.preventDefault()
    }
    $('.small').onmouseout = function(evt){
        evt.preventDefault()
    }
})();