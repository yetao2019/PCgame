window.onload = function () {
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
        setTimeout(clock, 500);
    }
    clock();
}
