//窗体滚动事件特效2
$(window).scroll(function(){
	headerInit1();
});

function headerInit1(){
	if($(this).scrollTop()>0){
		$("body").addClass("fixed-header-on1");
	}else
	{
		$("body").removeClass("fixed-header-on1");
	}
};
headerInit1();