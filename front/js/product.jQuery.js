
$(function () {

    $("#u1>li>ul>li").hide();
    $("#u1>li").click(function () {
        $(this)
            .siblings('li') // 找兄弟元素
            .children("ul") // 找兄弟元素的子元素ul 
            .find("li") // 子元素中找li
            .hide(500); // 让子元素隐藏
        $(this)
            .children("ul") // 找到子元素
            .find("li") // 找到li
            .show(500); // 显示
    })

})
