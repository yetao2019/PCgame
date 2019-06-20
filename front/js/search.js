function fn(data) {
    
    var oUl = document.getElementById('list');
    var html = '';
    if (data.s.length) {
        oUl.style.display = 'block';
        for (var i=0; i<data.s.length; i++) {
            html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
        }
        oUl.innerHTML = html;
    } else {
        oUl.style.display = 'none';
    }

}
let q = document.getElementById('q');
let oUl = document.getElementById('list');

q.onkeyup = function(){
    if ( this.value != '' ) {
        var oScript = document.createElement('script');
        oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=fn';
        document.body.appendChild(oScript);
    } else {
        oUl.style.display = 'none';
    }
}