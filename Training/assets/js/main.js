$(function(){
	$("#main-menu a").click(function(){
		$("#main-menu .active").removeClass("active");
		var $this=$(this);
		$this.parent().addClass("active");
		$this.parents('.has-sub').addClass("active");
	});
			
	setActiveMenu();
});

function setActiveMenu(){
	if(location.hash&&location.hash != "#"){
		var id=location.hash;
		var $activeMenu = $('a[href="'+id+'"]');
		if($activeMenu.length > 0){
			$activeMenu.parent().addClass("active");
			var parents = $activeMenu.parents(".has-sub");
			$activeMenu.parents('.has-sub').addClass("expanded").addClass("active");
			$activeMenu.parents('ul').css("display","block");
		}
	}
}