	
$(function(){
	$(window).scroll(function(){
			var sT=$(window).scrollTop();
		if(sT>50){
			$(".toTop").css("display","block");
		}else{
			$(".toTop").css("display","none");
		}
		});
		$("li.toTop").click(function(){
			$("body").animate({"scrollTop":0},500);
		
		})

	})	
		

$(function(){
	var $lis=$(".box3 #demo li");
	/*
	for(var i=0;i<$lis.length;i++){
		(function(j){			
			var $box4=$(".box3 #demo li").eq(j).children();
			$box4.mouseover(function(){
				$(".box4 button").css("display","block");
				$(".box4 #txt2").css("display","none");
				$(".box4 button").stop().animate({"left":"55px"},300)
				$(".box_lis2").stop().animate({"height":"520px"},300);
				$(".box_lis1").stop().animate({"margin-left":"85px","height":"520px"},300);
			}).mouseleave(function(){
				$(".box4 button").css("display","none");
				$(".box4 #txt2").css("display","block");
				$(".box4 button").stop().animate({"left":"15px"},300)
				$(".box_lis2").stop().animate({"height":"485px"},300);
				$(".box_lis1").stop().animate({"margin-left":0,"height":"485px"},300);
			})					

		})(i);
	}*/
	$(".pic_right img").first().css("border","4px solid #DEB362");
	$(".pic_right img").bind("mouseover",function(){
		$(this).css("border","4px solid #DEB362").siblings("img").css("border","4px solid #fff");
		var $index = $(this).index();//获取当前点击的索引号
		$(".box_lis2 .box_pic1 img").eq($index).addClass("now").siblings(".box_pic1 img").removeClass("now");
	});
});
/*
$(".box4").mouseover(function(){
	$(".box4 button").css("display","block");
	$(".box4 #txt2").css("display","none");
	$(".box4 button").stop().animate({"left":"55px"},300)
	$(".box_lis2").stop().animate({"height":"520px"},300);
	$(".box_lis1").stop().animate({"margin-left":"85px","height":"520px"},300);
}).mouseleave(function(){
	$(".box4 button").css("display","none");
	$(".box4 #txt2").css("display","block");
	$(".box4 button").stop().animate({"left":"15px"},300)
	$(".box_lis2").stop().animate({"height":"485px"},300);
	$(".box_lis1").stop().animate({"margin-left":0,"height":"485px"},300);
})
*/


var lo = document.getElementsByClassName("time")[0];
		 
    function shijian(sj,time){
		var d = new Date(sj);
		var t = d.getTime();
		var t2 = new Date();
		var d2 = t2.getTime();
		var d4 = (t-d2);
		var r=parseInt(d4/1000);
		var h = Math.floor(r/(3600*24));

		var x = Math.floor((r-(h*3600*24))/(60*60));
		var m =Math.floor((r-((h*3600*24)+(60*60*x)))/60);
		var c =Math.floor(r-((h*3600*24)+(60*60*x)+(60*m)));
		time.innerHTML = h+"天"+x+"时"+m+"分"+c+"秒";
	}
	setInterval(function() {
			shijian("2018,11,30",lo);
	},1000);		

/*
$(".cbox_lis1").mouseover(function(){
	$(this).css("box-shadow","1px 1px 2px #ccc")
	$(".cbox_lis1 button").css("display","block")
	$(this).stop().animate({"height":"520px"},200)
}).mouseleave(function(){
	$(this).css("box-shadow","")
	$(".cbox_lis1 button").css("display","none")
	$(this).stop().animate({"height":"485px"},200)
})

$(".rbox_lis1").mouseover(function(){
	$(this).css("box-shadow","1px 1px 2px #ccc")
	$(".rbox_lis1 button").css("display","block")
	$(this).stop().animate({"height":"520px"},200)
}).mouseleave(function(){
	$(this).css("box-shadow","")
	$(".rbox_lis1 button").css("display","none")
	$(this).stop().animate({"height":"485px"},200)
})
$(".box31_lis1").mouseover(function(){
	$(this).css("box-shadow","1px 1px 2px #ccc")
	$(".box31_lis1 button").css("display","block")
	$(this).stop().animate({"height":"520px"},200)
}).mouseleave(function(){
	$(this).css("box-shadow","")
	$(".box31_lis1 button").css("display","none")
	$(this).stop().animate({"height":"485px"},200)
})
$(".box32_lis1").mouseover(function(){
	$(this).css("box-shadow","1px 1px 2px #ccc")
	$(".box32_lis1 button").css("display","block")
	$(this).stop().animate({"height":"520px"},200)
}).mouseleave(function(){
	$(this).css("box-shadow","")
	$(".box32_lis1 button").css("display","none")
	$(this).stop().animate({"height":"485px"},200)
})
$(".box33_lis1").mouseover(function(){
	$(this).css("box-shadow","1px 1px 2px #ccc")
	$(".box33_lis1 button").css("display","block")
	$(this).stop().animate({"height":"520px"},200)
}).mouseleave(function(){
	$(this).css("box-shadow","")
	$(".box33_lis1 button").css("display","none")
	$(this).stop().animate({"height":"485px"},200)
})
$(".box34_lis1").mouseover(function(){
	$(this).css("box-shadow","1px 1px 2px #ccc")
	$(".box34_lis1 button").css("display","block")
	$(this).stop().animate({"height":"520px"},200)
}).mouseleave(function(){
	$(this).css("box-shadow","")
	$(".box34_lis1 button").css("display","none")
	$(this).stop().animate({"height":"485px"},200)
})
$(".box44").mouseover(function(){
	$(".box44 button").css("display","block");
	$(".box44 #txt3").css("display","none");
	$(".box44 button").stop().animate({"left":"55px"},300)
	$(".box_lis2").stop().animate({"height":"520px"},300);
	$(".box_lis21").stop().animate({"margin-left":"85px","height":"520px"},300);
}).mouseleave(function(){
	$(".box44 button").css("display","none");
	$(".box44 #txt3").css("display","block");
	$(".box44 button").stop().animate({"left":"15px"},300)
	$(".box_lis2").stop().animate({"height":"485px"},300);
	$(".box_lis21").stop().animate({"margin-left":0,"height":"485px"},300);
})
$(function(){
			$(".box44 .picrt img").first().css("border","4px solid #DEB362");
			$(".box44 .picrt img").bind("mouseover",function(){
				$(this).css("border","4px solid #DEB362").siblings("img").css("border","4px solid #fff");
				var $index = $(this).index();//获取当前点击的li的索引号
				$(".box44 .box_lis2 .boxpic1 img").eq($index).addClass("now1").siblings(".boxpic1 img").removeClass("now1");
			});
		});
var le = document.getElementById("time1");
		 
    function tim(sj,time1){
	var d = new Date(sj);
	var t = d.getTime();
	var t2 = new Date();
	var d2 = t2.getTime();
	var d4 = (t-d2);
	var r=parseInt(d4/1000);
	var h = Math.floor(r/(3600*24));

	var x = Math.floor((r-(h*3600*24))/(60*60));
	var m =Math.floor((r-((h*3600*24)+(60*60*x)))/60);
	var c =Math.floor(r-((h*3600*24)+(60*60*x)+(60*m)));
    time1.innerHTML = h+"天"+x+"时"+m+"分"+c+"秒";
}
	setInterval(function() {
			tim("2019,1,01",le);
	},1000);		
*/