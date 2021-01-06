//显示品牌

 //if(this.version()!='LowerIEVersion'&&this.version()=="Chrome") {
        console.log('%c跨屏UI框架','display:block;padding: 15px  20px;background:#0569D5;color: #fff; font-size: 20px;border-radius: 6px;')
        console.log('Powered by %cKuaping.com%c website builder System.','color:#f00;font-weight: 900;','');
       // console.log('Learn more about us \nplease visit %chttp://www.kuaping.com','text-decoration: underline;');
    //}


$(function(){
	if(typeof(AOS)!= "undefined"){
		 	AOS.init({
				//easing: 'ease-out-back',
				//duration: 1000,
				///offset: 20,
				//duration: 200,
				//delay: 0
			//	 startEvent:function(){
			//	 	alert(3);
			//	 }
			});
			//AOS.refresh();
	}

})
//$(document).on('s123.page.ready.refreshAOS', function(event) {
//		AOS.refresh();
//	});

if(typeof(parallax)!= "undefined"){
	$('[data-parallax="scroll"]').parallax();
}

//Parallax.isFresh = false;
//Parallax.requestRender();
//parallaxWindows.parallax('render');
//parallaxWindows.parallax('refresh');
//$('.parallax-window').parallax('destroy');
//AOS.refresh();

//$('body').scrollspy({
//				target: '#mainNav',
//				offset: 0 //Must be 0 so the second page (if he is short) will be show
//			});
			

//var myLazyLoad = new lazyload({
//		elements_selector: 'img.lazyload, .bgLazyload',
//		threshold: 500,
//		callback_enter: function(el) {
//			//$(document).trigger('lazyload_enter.image', [$(el)]);
//		}
//	});



//var $isotopeContainer= $('.isotope-gallery-container');
//$isotopeContainer.isotope({
//		itemSelector: '.s123-module-gallery .gallery-item-wrapper',
////		filter: '.all'
//	});
//	
//	
//	
//	var $isotopeFilter = $isotopeContainer.find('.filter');
//	$isotopeFilter.find('a').click(function() {
//				var filter = $(this).attr('data-filter');
//				$isotopeContainer.isotope({
//					filter: filter
//				});
//				$isotopeFilter.find('a').parent().removeClass('active');
//				$(this).parent().addClass('active');
//				return false;
//			});

//$isotopeContainer.imagesLoaded().progress(function(instance, image) {
//				$isotopeContainer.isotope('layout');
//				$(image.img).css({
//					visibility: 'visible'
//				});
//				AOS.refresh();
//			});
			
//			$('.gallery-images-container').flickity();
			
			//$(document).on('s123.page.ready.pageScrollByClick', function(event) {
		//var offset = findBootstrapEnvironment() != 'xs' ? menuScrollOffset : menuScrollOffset_mobile;
		
	//});
	
	//锚点滑动
	$(function(){
		$('a.page-scroll').on('click', function(event) {
			
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 20)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});
		
		
		
		
		//图标点击弹出层
		$('.actionButton').not('.mobile-menu-btn').click(function(){
		$('#popupFloatDivSearch').addClass('open').find('.'+$(this).data('toggle')).show();
		$('body').addClass('popupWinScroll');
	})
	$('#popupFloatDivSearch .popupCloseButton').click(function(){
		$('#popupFloatDivSearch').removeClass('open');
		$('body').removeClass('popupWinScroll');
		setTimeout(function(){
			$('#popupFloatDivSearch').find('.page >div').hide();
		},1000)

	})
	
	//移动菜单
	$('.mobile-menu-btn').click(function(){
		$('#popupFloatDivMenu').addClass('open');
		$('body').addClass('popupWinScroll');
	})
	$('#popupFloatDivMenu .popupCloseButton').click(function(){
		$('#popupFloatDivMenu').removeClass('open');
		$('body').removeClass('popupWinScroll');
	

	})
	$('#popupFloatDivMenu .navPagesPopup li').not('.dropdown-submenu').find('a').click(function() {
		$('#popupFloatDivMenu').removeClass('open');
		$('body').removeClass('popupWinScroll');
	});
	
	//$('body').scrollspy({target: ''});
		
		
//回到顶部
$(window).resize(function(){
	
})

var affixTop = $('.affix-top');
var mainNav_t = $('.affix-top').position().top;

function affixTop1(){
	//console.log(mainNav_t);
	 //需要吸顶的元素
	
			
			//导航吸顶（考虑有菜单在底部的情况，并不是大于0）
			
		if($(window).scrollTop()>mainNav_t){
			affixTop.not('.nojs').removeClass('affix-top').addClass('affix');
			//$('#mainNav').not('.nojs').removeClass('affix-top').addClass('affix');
		}
		else{
			affixTop.not('.nojs').removeClass('affix').addClass('affix-top');
			//$('#mainNav').not('.nojs').removeClass('affix').addClass('affix-top');
		}
}
affixTop1();
$(window).scroll(function() {
	affixTop1();
		
		
	})
	
	
//	gotoTop
	$(window).scroll(function() {
		var $gotoTop = $('#gotoTop');
		var top = 150;

			if($(window).scrollTop() >= top) {
				
				$gotoTop.show(200);
			} else {
				$gotoTop.hide(200);
			}
		});
		
		
		

})
	
	
	



	
		
			
//			var imageWidth = 370;
//			$isotopeContainer.find('.gallery-item-wrapper').each(function(index, itemWrapper) {
//		var $this = $(this);
//		$this.width(imageWidth);
//		if($.isNumeric($this.data('original-width')) && $.isNumeric($this.data('original-height'))) {
//			var aspectRatio = (parseInt($this.data('original-width')) / parseInt($this.data('original-height')));
//			var newHeight = (imageWidth / aspectRatio);
//			$this.height(newHeight);
//		} else {
//			isOldCustomer = true;
//		}
//	});


$(function(){
	if(typeof(lazyload)!= "undefined"){
		$("img.lazyload").lazyload({
		data_attribute:'data-src'
	});
	}
	
})


if(typeof($.validator)!= "undefined"){
	$.validator.addMethod("telephone", function(value,element) {
    var length = value.length;
    var mobile = /^1[3456789]\d{9}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的联系电话");
}



$('.contactUsForm').each(function(){
	$(this).validate({
	errorElement: 'div',
	errorClass: 'help-block',
	focusInvalid: true,
	ignore: "",
	highlight: function(e) {
		$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
	},
	success: function(e) {
		$(e).closest('.form-group').removeClass('has-error');
		$(e).remove();
	},
	errorPlacement: function(error, element) {
		if(element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
			var controls = element.closest('div[class*="col-"]');
			if(controls.find(':checkbox,:radio').length > 0) element.closest('.form-group').append(error);
			else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
		} else if(element.is('.select2')) {
			error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
		} else if(element.is('.chosen-select')) {
			error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
		} else {
			error.appendTo(element.closest('.form-group'));
		}
	},
	submitHandler: function(form) {
		 form.submit();
		//$(form).submit();
//		var $form = $(form);
//		var thankYouMessage = translations.ThankYouAfterSubmmit;
//		if($form.data('thanks-msg')) {
//			thankYouMessage = $form.data('thanks-msg');
//		}
//		$form.find('button:submit').prop('disabled', true);
//		var url = "/versions/" + $('#versionNUM').val() + "/include/contactO.php";
//		
//		
//		return false;
	}
});
})


 

$('.isotope-gallery-container').each(function() { // the containers for all your galleries
$(this).magnificPopup({
delegate: 'a', // the selector for gallery item
type: 'image',
gallery: {
  enabled:true
}
});
});




 /*判断了插件是否存在，无插件的情况不报错*/
    if(typeof(WOW)!= "undefined"){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
new WOW().init();
};
    }
    




//$(document).on('s123.page.ready', function(event) {
	
		//$(document).off('S123MagicButton.initialized').on('S123MagicButton.initialized', function(event) {
//			var $allMagicButtons = $('.all-magic-buttons');
//			var isFreePackage = $('html.isFreePackage').length !== 0;
//			if(($('html').attr('dir') === 'rtl' && !$('.all-magic-buttons').hasClass('mg-b-icon-position-right')) || $('.all-magic-buttons').hasClass('mg-b-icon-position-left')) {
//				$gotoTop.css({
//					left: $allMagicButtons.width() + parseInt($allMagicButtons.css('left')) + 10,
//					bottom: '25px'
//				});
//			} else {
//				$gotoTop.css({
//					right: $allMagicButtons.width() + parseInt($allMagicButtons.css('right')) + 10,
//					bottom: '25px'
//				});
//			}
//			if(isFreePackage) {
//				if($('html:not(.s123-ads-banner-small) .all-magic-buttons').length !== 0) {
//					$gotoTop.css({
//						bottom: '75px'
//					});
//				} else if($('html[dir="ltr"].in-management.s123-ads-banner-small .all-magic-buttons.mg-b-icon-position-left').length !== 0) {
//					$gotoTop.css({
//						bottom: '75px'
//					});
//				} else if($('html[dir="rtl"].in-management.s123-ads-banner-small .all-magic-buttons').length !== 0) {
//					$gotoTop.css({
//						bottom: '75px'
//					});
//				}
//				if($('html[dir="rtl"].in-management.s123-ads-banner-small .all-magic-buttons.mg-b-icon-position-right').length !== 0) {
//					$gotoTop.css({
//						bottom: '25px'
//					});
//				}
//			}
		//});
		
	//});
	if(typeof(parallax)!= "undefined"){
$('.parallax-window').each(function(){
	
	$('.parallax-window').parallax({imageSrc: $(this).data('image-src')});
})
}
	
	
	//版权
		$html = $('html');
		$showSmallAdOnScroll = $('#showSmallAdOnScroll');
	banner_height = $('#showSmallAdOnScroll').outerHeight();
	var offset = $('html').hasClass('inside_page') ? 0 : 50;
	$(window).scroll(function() {
			if($(window).scrollTop() >= offset) {
			$html.addClass('s123-ads-banner-active');
			$showSmallAdOnScroll.css({
				bottom: '0'
			});
		} else {
			$('html').removeClass('s123-ads-banner-active');
			$showSmallAdOnScroll.css({
				bottom: (-1 * banner_height)
			});
		}
		});
		
		
		$('.magic-btn').hover(function(){
			$(this).addClass('show-list');
			$(this).next('.options-list').addClass('visible');
		},
		function(){
			$(this).removeClass('show-list');
			$(this).next('.options-list').removeClass('visible');
		})
		
		
		//汉堡菜单
	
	
	function changeBarsIcon() {
	if($("#header").hasClass('active')) {
		$("#menu-toggle").find('.fa').removeClass('fa-bars').addClass('fa-close');
	} else {
		$("#menu-toggle").find('.fa').removeClass('fa-close').addClass('fa-bars');
	}
}
	
	$("#menu-toggle").off('click').click(function(e) {
				e.preventDefault();
				e.stopPropagation();
				$("#header").toggleClass("active");
				changeBarsIcon();
			});
			
			
			$("#top-section,.s123-modules-container,.s123-pages-container,footer").off('click.bodyCloseMenu').on('click.bodyCloseMenu', function(e) {
				$("#header").removeClass("active");
				changeBarsIcon();
			});
			
			if(typeof(scrollspy)!= "undefined"){
				$('body').scrollspy({
				target: '#header'
			});
			}
			


//百度地图
if(typeof(BMap)!= "undefined"){
	var map = new BMap.Map('allmap');
var point = new BMap.Point(116.404269,39.916042);
map.centerAndZoom(point, 12);
var  mapStyle ={ 
        features: ["road", "building","water","land"],//隐藏地图上的poi
        //style : "dark"  //设置地图风格为高端黑
    }
map.setMapStyle(mapStyle);

//启用滚轮放大缩小，默认禁用
map.enableScrollWheelZoom(); 

	//启用地图惯性拖拽，默认禁用
	map.enableContinuousZoom(); 
}
   
	
   
