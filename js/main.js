// 添加视差效果
const image = document.getElementsByClassName('banner-pic-img');
new simpleParallax(image, {
    orientation: 'up',
    scale: 1.2,
    delay: 2,
    transition: 'cubic-bezier(0,0,0,1)',
    maxTransition: 50,
    overflow: true
});

// 添加菜单点击事件
const menuButton = document.getElementById("nav-menu");
menuButton.addEventListener('click',function(){
    if(document.getElementById("body").classList.contains('show-menu')) {
        heoWeb.hideMenu();
    }else {
        heoWeb.showMenu();
    }
},false)

document.getElementsByClassName('menu-list')[0].addEventListener('click', () => {
    heoWeb.hideMenu();
})

//阻止菜单滚动
document.querySelector('.menu-list').addEventListener('wheel',(e)=>{
    e.preventDefault()
})

const heoWeb = {
    //显示菜单
    showMenu: function() {
        document.getElementById("body").classList.add("show-menu");
    },

    hideMenu: function() {
        document.getElementById("body").classList.remove("show-menu");
    },

    //跳转到id
    scrollTo(id) {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JyJ5OxE1GqPhgrvU\",ck:\"JyJ5OxE1GqPhgrvU\"});</script>")