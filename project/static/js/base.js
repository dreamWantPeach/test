$(function(){
    /**头部动态加载**/
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");           
            $(".weibo").hide();
            $(".weixin").hide();
            $("#sina").mouseover(function(){
                $(".weibo").show();
            }).mouseout(function(){
                $(".weibo").hide();
            });
            $("#weChat").mouseover(function(){
                $(".weixin").show();
            }).mouseout(function(){
                $(".weixin").hide();
            });
        }
    });
    /****底部部动态加载****/
    $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#footer");
        }
    });  
})