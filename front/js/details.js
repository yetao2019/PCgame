window.onload = function () {
    var b = document.getElementById("big");
    var s = document.getElementById("small");
    var bImg = b.getElementsByTagName("img");
    var sImg = s.getElementsByTagName("img");
    // console.log(sImg);
    var index = 1;
    for(var i ;i<sImg.length+1;i++){
        if(sImg.length[1]){
            console.log(sImg.length)
        }

    }







    var bPic1 = document.getElementById("bPic1");
    var bPic2 = document.getElementById("bPic2");
    var bPic3 = document.getElementById("bPic3");
    var bPic4 = document.getElementById("bPic4");
    var bPic5 = document.getElementById("bPic5");
    var sPic1 = document.getElementById("sPic1");
    var sPic2 = document.getElementById("sPic2");
    var sPic3 = document.getElementById("sPic3");
    var sPic4 = document.getElementById("sPic4");
    var sPic5 = document.getElementById("sPic5");

    sPic1.onclick = function () {
        bPic1.style.zIndex = "10";
        bPic2.style.zIndex = "1";
        bPic3.style.zIndex = "1";
        bPic4.style.zIndex = "1";
        bPic5.style.zIndex = "1";
        sPic1.style.border = "2px solid #a8eeff";
        sPic1.style.height = "66" +"px";
        sPic1.style.width = "116" +"px";
        sPic2.style.border = "none";
        sPic2.style.height = "70" +"px";
        sPic2.style.width = "120" +"px";
        sPic3.style.border = "none";
        sPic3.style.height = "70" +"px";
        sPic3.style.width = "120" +"px";
        sPic4.style.border = "none";
        sPic4.style.height = "70" +"px";
        sPic4.style.width = "120" +"px";
        sPic5.style.border = "none";
        sPic5.style.height = "70" +"px";
        sPic5.style.width = "120" +"px";

    }
    sPic2.onclick = function () {
        bPic2.style.zIndex = "10";
        bPic1.style.zIndex = "1";
        bPic3.style.zIndex = "1";
        bPic4.style.zIndex = "1";
        bPic5.style.zIndex = "1";
        sPic2.style.border = "2px solid #a8eeff";
        sPic2.style.height = "66" +"px";
        sPic2.style.width = "116" +"px";
        sPic1.style.border = "none";
        sPic1.style.height = "70" +"px";
        sPic1.style.width = "120" +"px";
        sPic3.style.border = "none";
        sPic3.style.height = "70" +"px";
        sPic3.style.width = "120" +"px";
        sPic4.style.border = "none";
        sPic4.style.height = "70" +"px";
        sPic4.style.width = "120" +"px";
        sPic5.style.border = "none";
        sPic5.style.height = "70" +"px";
        sPic5.style.width = "120" +"px";
    }
    sPic3.onclick = function () {
        bPic3.style.zIndex = "10";
        bPic2.style.zIndex = "1";
        bPic1.style.zIndex = "1";
        bPic4.style.zIndex = "1";
        bPic5.style.zIndex = "1";
        sPic3.style.border = "2px solid #a8eeff";
        sPic3.style.height = "66" +"px";
        sPic3.style.width = "116" +"px";
        sPic1.style.border = "none";
        sPic1.style.height = "70" +"px";
        sPic1.style.width = "120" +"px";
        sPic2.style.border = "none";
        sPic2.style.height = "70" +"px";
        sPic2.style.width = "120" +"px";
        sPic4.style.border = "none";
        sPic4.style.height = "70" +"px";
        sPic4.style.width = "120" +"px";
        sPic5.style.border = "none";
        sPic5.style.height = "70" +"px";
        sPic5.style.width = "120" +"px";
    }
    sPic4.onclick = function () {
        bPic4.style.zIndex = "10";
        bPic2.style.zIndex = "1";
        bPic1.style.zIndex = "1";
        bPic3.style.zIndex = "1";
        bPic5.style.zIndex = "1";
        sPic4.style.border = "2px solid #a8eeff";
        sPic4.style.height = "66" +"px";
        sPic4.style.width = "116" +"px";
        sPic1.style.border = "none";
        sPic1.style.height = "70" +"px";
        sPic1.style.width = "120" +"px";
        sPic3.style.border = "none";
        sPic3.style.height = "70" +"px";
        sPic3.style.width = "120" +"px";
        sPic2.style.border = "none";
        sPic2.style.height = "70" +"px";
        sPic2.style.width = "120" +"px";
        sPic5.style.border = "none";
        sPic5.style.height = "70" +"px";
        sPic5.style.width = "120" +"px";
    }
    sPic5.onclick = function () {
        bPic5.style.zIndex = "10";
        bPic2.style.zIndex = "1";
        bPic1.style.zIndex = "1";
        bPic3.style.zIndex = "1";
        bPic4.style.zIndex = "1";
        sPic5.style.border = "2px solid #a8eeff";
        sPic5.style.height = "66" +"px";
        sPic5.style.width = "116" +"px";
        sPic1.style.border = "none";
        sPic1.style.height = "70" +"px";
        sPic1.style.width = "120" +"px";
        sPic3.style.border = "none";
        sPic3.style.height = "70" +"px";
        sPic3.style.width = "120" +"px";
        sPic4.style.border = "none";
        sPic4.style.height = "70" +"px";
        sPic4.style.width = "120" +"px";
        sPic2.style.border = "none";
        sPic2.style.height = "70" +"px";
        sPic2.style.width = "120" +"px";
    }
}