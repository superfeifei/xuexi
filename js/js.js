//轮播和切换
$(function(){
	//图片轮播
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false
    		});
    		
    		
    		//切换
    		$(".big .ss:gt(0)").hide();
    		$("#top ul").find("li").each(function(index){
    			$(this).hover(function(){
    				$(this).addClass("hover").stop(true,true).siblings().removeClass("hover");
    				$(".big .ss").hide().eq(index).show();
    			});
    		});

            
});

//下拉列表
$(function(){
	  //下拉列表
            var flag=true;
            $(".xiala_plan").hide();
            $(".content9 .xx").click(function(){
                if(flag){
                    $(".xiala_plan").slideDown();
                    flag=false;
                }else{
                    $(".xiala_plan").slideUp();
                    flag=true;
                }
               
            });
})

//拇指
$(function(){
	var flag=true;
	$("footer .muzhi #muzhi").click(function(){
		if(flag){
			
			$("footer .muzhi .img1").animate({left:"1.05rem"},500);
			$("footer .muzhi .img2").animate({left:"1.95rem"},500);
			$("footer .muzhi .img3").animate({left:"2.85rem"},500);
			$("footer .muzhi .img4").animate({left:"3.75rem"},500);
			$("footer .muzhi .img5").animate({left:"4.65rem"},500);
			$("footer .muzhi #muzhi").attr("src","images/ico_btn23.png");
			flag=false;
		}else{
			
			$("footer .muzhi .img1").animate({left:"0.15rem"},500);
			$("footer .muzhi .img2").animate({left:"0.15rem"},500);
			$("footer .muzhi .img3").animate({left:"0.15rem"},500);
			$("footer .muzhi .img4").animate({left:"0.15rem"},500);
			$("footer .muzhi .img5").animate({left:"0.15rem"},500);
			$("footer .muzhi #muzhi").attr("src","images/ico_btn22.png");
			flag=true;
		}
	});
});

//电话
$(function(){
	var flag=true;
	$("footer .phone img").click(function(){
		if(flag){
			$(".zhongjian img").fadeIn("slow");
			$(".yinying").show();
			$("footer .phone img").hide();
			flag=false;
		}else{
			$(".zhongjian img").fadeOut("slow");
			$(".yinying").hide();
			flag=true;
		}
	});




	// function aaa(){
	// 	$(".zhongjian img").fadeIn("slow");
	// 	$(".yinying").show();
	// 	$("footer .phone img").hide();
	// }
	// setInterval(aaa,5000)
});





//电话叉
$(function(){
	$(".zhongjian img:last-child").click(function(){
			$(".zhongjian img").fadeOut("slow");
			$(".yinying").hide();
			$("footer .phone img").show();
	});
});

//加载更多
$(function(){
	$(".big .ss ul li:nth-child(n+4)").hide();
	var flag=true;
	$(".bottom #btn").click(function(){
		if(flag){
			$(".big .ss ul li:nth-child(n+4)").show();
			$(".bottom #btn").text("点击收起更多");
			flag=false;
		}else{
			$(".big .ss ul li:nth-child(n+4)").hide();
			$(".bottom #btn").text("点击加载更多");
			flag=true;
		}
	});
})


//侧边栏
$(function(){
	var flag=true;
	$(".content1 .caidan").click(function(){
		if(flag){
			// $(".content1").animate({right:"2.54rem"},500)
			$(".zhengti").animate({right:"2.54rem"},500);
			$(".side").animate({right:"0rem"},500);
			$(".content1 .caidan").attr("src","images/ico_btn2.png")
			$("footer .phone img").hide();
			flag=false;
		}else{
			// $(".content1").animate({right:"0rem"},500)
			$(".zhengti").animate({right:"0rem"},500);
			$(".side").animate({right:"-2.54rem"},500);
			$(".content1 .caidan").attr("src","images/ico_btn2_hov.png")
			$("footer .phone img").show();
			flag=true;
		}
	});
});


function show(){
	$(".content4 ul li:first-child").animate({
		"margin-top":"-0.8rem"
		},500,function(){
			$(this).css({
			 "margin-top":"0rem"
		}).appendTo(".content4 ul")
	});
}
setInterval(show,2000);



//返回顶部
$(function(){
	$("footer .muzhi .img5").click(function(){
	$("html,body").animate({scrollTop:0},500)
});
})



//dibu

$(function(){
	$("footer ul li").hover(function(){
		$(this).addClass('red');
	},function(){
		$(this).removeClass('red');
	});
});





