window.onload = function () {

    // 轮播图js
    var leftBn, rightBn, imgCon, liList, preLi, timer, rollImg, lPic
    var position = 0;

    // init();
    // function init() {
    rollImg = document.getElementById("rollImg");
    leftBn = document.getElementById("leftBn");
    rightBn = document.getElementById("rightBn");
    imgCon = document.getElementById("imgCon");
    lPic = document.getElementById("lPic");
    liList = Array.from(lPic.getElementsByTagName("li"));
    leftBn.addEventListener("click", clickHandler);
    rightBn.addEventListener("click", clickHandler);
    timer = null;
    for (var i = 0; i < liList.length; i++) {
        liList[i].addEventListener("click", liClickHandler);
    }
    preLi = liList[0];
    imgConMove();

    // }
    function liClickHandler() {
        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
        position = liList.indexOf(this);
        imgConMove();
    }
    function clickHandler(e) {
        if (this === leftBn) {
            position--;
            if (position < 0) {
                position = 6;
            }
            imgConMove();
            return;
        };
        position++;
        if (position > 6) {
            position = 0;
        }
        imgConMove();

    }
    function imgConMove() {
        imgCon.style.left = -1366 * position + "px";
        //如果preLi为真，颜色为
        if (preLi) {
            preLi.style.backgroundColor = "rgba(169, 220, 240,0)";
        }
        preLi = liList[position];
        preLi.style.backgroundColor = "rgba(169, 220, 240,1)";

    }

    function autoPlay() {
        timer = setInterval(function () {
            clickHandler();
        }, 3000);
    }
    autoPlay();

    rollImg.onmouseover = function () {
        clearInterval(timer);
    }
    rollImg.onmouseout = function () {
        autoPlay();
    }


    // 倒计时js
    function clock() {
        var today = new Date(),//当前时间
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds();
        var stopTime = new Date("july 9 2019 00:00:00"),//结束时间
            stopH = stopTime.getHours(),
            stopM = stopTime.getMinutes(),
            stopS = stopTime.getSeconds();
        var shenyu = stopTime.getTime() - today.getTime(),
            shengyuD = parseInt(shenyu / (60 * 60 * 24 * 1000)),
            D = parseInt(shenyu) - parseInt(shengyuD * 60 * 60 * 24 * 1000),
            shengyuH = parseInt(D / (60 * 60 * 1000)),
            H = D - shengyuH * 60 * 60 * 1000,
            shengyuM = parseInt(H / (60 * 1000)),
            M = H - shengyuM * 60 * 1000;
        S = parseInt((shenyu - shengyuD * 60 * 60 * 24 * 1000 - shengyuH * 60 * 60 * 1000 - shengyuM * 60 * 1000) / 1000)//除去天、小时、分的毫秒数转化为秒
        document.getElementById("connt-down").innerHTML = ("剩余" + shengyuD + "天" + shengyuH + "小时" + shengyuM + "分" + S + "秒" + "<br>");
        document.getElementById("connt-down-1").innerHTML = ("剩余" + shengyuD + "天" + shengyuH + "小时" + shengyuM + "分" + S + "秒" + "<br>");
        // setTimeout("clock()",500);
        setTimeout(clock, 1000);
    }
    clock();



    // var hotGame = document.getElementById("hotGame");
    // var hidden = document.getElementById("hidden");
    // console.log(hotGame)
    // hotGame.onmouseenter = function(){
    //     hidden.style.display = "block";
    //     hotGame.style.display = "none"; 
    // }
    // hotGame.onmouseout = function(){
    //     hidden.style.display = "none";
    //     hotGame.style.display = "block";
    // }



}
