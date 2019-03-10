/*
	Cakes Galore Theme
	
	Author: Chantelle Fourie (Starlette)
	Author website: www.starlett.co.za
	
	Creation year: 2014	
*/

$(document).ready(function() {
    
	function unloadJS(scriptName) {
	  var head = document.getElementsByTagName('head').item(0);
	  var js = document.getElementById(scriptName);
	  js.parentNode.removeChild(js);
	}
	 
	function unloadAllJS() {
	  var jsArray = new Array();
	  jsArray = document.getElementsByTagName('script');
	  for (i = 0; i < jsArray.length; i++){
		if (jsArray[i].id){
		  unloadJS(jsArray[i].id)
		}else{
		  jsArray[i].parentNode.removeChild(jsArray[i]);
		}
	  }      
    }
	
	/*CART DROPDOWN*/
	$(".header_top .cart li ul").hide();
	$(".header_top .cart li").hover(function(){
		$("ul",this).fadeIn(200);
	},function(){
		$("ul",this).fadeOut(200);
	});
	
	
	/*MAIN MENU*/
	$(".menu_top a").each(
    function(i) {
        var classes = this.className.split(/\s+/);
        for (var i=0,len=classes.length; i<len; i++){
            if ($("body").hasClass(classes[i])){
                $(this).addClass("current");
            }
        }
    });
	$(".mobile_menu").click(function(){
		$(this).siblings("ul").slideToggle(300);
	});
	
	
	/*SIDENAV*/
	$(".sidenav a").each(
    function(i) {
        var classes = this.className.split(/\s+/);
        for (var i=0,len=classes.length; i<len; i++){
            if ($("body").hasClass(classes[i])){
                $(this).addClass("current");
				$(this).parent("li").addClass("current");
				$(this).parent("li").parent("ul").siblings(".tab").addClass("parent_current").addClass("active");
            }
        }
    });
	$(".sidenav a.parent_current").siblings("ul").show();
	$(".menu_top ul li").hover(function(){
		$(this).children("ul").fadeIn(100);
	},function(){
		$(this).children("ul").fadeOut(100);
	});
	
	$(".social_media_share").hide();
	$(".social_media .share").click(function(e){
		$(".social_media_share").slideToggle(200);
		$(this).toggleClass("active");
		
		$(".search_field").slideUp(200);
		$(".contact_section").slideUp(200);
		$(".social_media .search").removeClass("active");
		$(".social_media .email").removeClass("active");
		
		e.preventDefault();
	});
	
	$(".search_field").hide();
	$(".social_media .search").click(function(e){
		$(".search_field").slideToggle(200);
		$(this).toggleClass("active");
		
		$(".social_media_share").slideUp(200);
		$(".contact_section").slideUp(200);
		$(".social_media .share").removeClass("active");
		$(".social_media .email").removeClass("active");
		
		e.preventDefault();
	});
	
	$(".contact_section").hide();
	$(".social_media .email").click(function(e){
		$(".contact_section").slideToggle(200);
		$(this).toggleClass("active");
		
		$(".social_media_share").slideUp(200);
		$(".search_field").slideUp(200);
		$(".social_media .share").removeClass("active");
		$(".social_media .search").removeClass("active");
		
		e.preventDefault();
	});
	
	
	/*SOCIAL SHARE FEEDS*/
	var $link = $(location).attr("href");
	var $image = $(".social_media_share").data("image");
	var $title = $("title").text();
	$(".social_media_share .facebook").attr({
		"href":"https://www.facebook.com/sharer/sharer.php?s=100&p[url]="+$link+"&p[images][0]="+$image+"&p[title]="+$title+"&p[summary]"
	});
	$(".social_media_share .pinterest").attr({
		"href":"http://pinterest.com/pin/create/button/?url="+$link+"&media="+$image+"&description="+$title
	});
	$(".social_media_share .twitter").attr({
		"href":"http://twitter.com/share?url="+$link+"&text="+$title
	});
	$(".social_media_share .googleplus").attr({
		"href":"https://plusone.google.com/_/+1/confirm?hl=en&url="+$link
	});
	
	
	//TABS HEIGHTS
	var $tabs = $("#tabs.lr div"), heights = [];
	var $tabs_main = $("#tabs.lr"), heights = [];
	$tabs.each(function() {
	   heights.push($(this).height());
	});
	var maxHeight = Math.max.apply(this, heights);
	$tabs_main.height(maxHeight+30);
	
	
	//TESTIMONIALS 
	$(".testimonial_wrap").each(function(index, element) {
		var $total = $(this).children("ul").children("li").size();
		var $width = $(this).children("ul").children("li").width();
		$(this).children("ul").width($total*100+'%');
		$(this).children("ul").children("li").width(100/$total+'%');
    });
	
	$(".testimonial_nav .prev").click(function(){
		var $first = $(this).parent('.testimonial_nav').parent('h1').siblings(".testimonial_wrap").find('li:first');
		var $last = $(this).parent('.testimonial_nav').parent('h1').siblings(".testimonial_wrap").find('li:last');
		var $width = $(this).parent('.testimonial_nav').parent('h1').siblings(".testimonial_wrap").find('li').width();
		$last.remove().css({ 'margin-left': -$width });
		$first.before($last);
		$last.animate({ 'margin-left': '0px' }, 300);
		$first.prev().addClass("current");
		$first.removeClass("current");
	});

	$(".testimonial_nav .next").click(function(){
		var $first = $(this).parent(".testimonial_nav").parent('h1').siblings(".testimonial_wrap").find("li:first");
		var $last = $(this).parent(".testimonial_nav").parent('h1').siblings(".testimonial_wrap").find("li:last");
		var $width = $(this).parent('.testimonial_nav').parent('h1').siblings(".testimonial_wrap").find('li').width();
		$first.next().addClass("current");
		$first.animate({"margin-left":-$width}, 300, function() {
			$first.remove().css({"margin-left":"0px"});
			$first.removeClass("current");
			$last.after($first);
		});
	});
	
	
	//SHOP & BLOG LAYOUT
	$(".sale_item .image_holder").prepend('<span class="sale_label">Sale</span>');
	
	$(".product_wrap").each(function(index, element) {
		$(this).after('<div class="product_nav clearfix"><a class="prev btn"></a><a class="next btn"></a></div>');
		
		var $total = $(this).children(".list_items").children().length;
		var $nav = $(this).siblings(".product_nav");
		var $item = $(this);
		var $width = $(".content article").width();
		var $width2 = $(".bar").width();
		
		if($total<=4){
			$nav.remove();
			$item.removeClass("product_wrap");
		}
    });
	
	$(".product_nav .prev").click(function(){
		var $first = $(this).parent('.product_nav').siblings(".product_wrap").find('li:first');
		var $last = $(this).parent('.product_nav').siblings(".product_wrap").find('li:last');
		var $width = $(this).parent('.product_nav').siblings(".product_wrap").find('li').width();
		$last.remove().css({'margin-left':-$width-30});
		$first.before($last);
		$last.animate({ 'margin-left': '0px' }, 300);
		$first.prev().addClass("current");
		$first.removeClass("current");
	});

	$(".product_nav .next").click(function(){
		var $first = $(this).parent(".product_nav").siblings(".product_wrap").find("li:first");
		var $last = $(this).parent(".product_nav").siblings(".product_wrap").find("li:last");
		var $width = $(this).parent('.product_nav').siblings(".product_wrap").find('li').width();
		$first.next().addClass("current");		
		$first.animate({"margin-left":-$width-30}, 300, function() {
			$first.remove().css({"margin-left":"0px"});
			$first.removeClass("current");
			$last.after($first);
		});
	});
	
	$(".list_items p").text(function(i, text) {
		var t = $.trim(text);
		if (t.length > 85) {
			return $.trim(t).substring(0, 85) + "...";
		}
		return t;
	});
	
	$(".list_items h6 .title").text(function(i, text) {
		var t = $.trim(text);
		if (t.length > 25) {
			return $.trim(t).substring(0, 25) + "...";
		}
		return t;
	});
	
	
	/*LOGO SLIDER*/
	$(".logo_slider").each(function(index, element) {
        $(this).after('<div class="logo_slider_nav"><a class="prev"></a> <a class="next"></a></div>');
    });
	
	$(".logo_slider_nav .prev").click(function(){
		var $first = $(this).parent('.logo_slider_nav').siblings(".logo_slider").find('li:first');
		var $last = $(this).parent('.logo_slider_nav').siblings(".logo_slider").find('li:last');
		var $width = $(this).parent('.logo_slider_nav').siblings(".logo_slider").find('li').width();
		$last.remove().css({'margin-left':-$width});
		$first.before($last);
		$last.animate({ 'margin-left': '0px' }, 300);
		$first.prev().addClass("current");
		$first.removeClass("current");
	});

	$(".logo_slider_nav .next").click(function(){
		var $first = $(this).parent(".logo_slider_nav").siblings(".logo_slider").find("li:first");
		var $last = $(this).parent(".logo_slider_nav").siblings(".logo_slider").find("li:last");
		var $width = $(this).parent('.logo_slider_nav').siblings(".logo_slider").find('li').width();
		$first.next().addClass("current");
		$first.animate({"margin-left":-$width}, 300, function() {
			$first.remove().css({"margin-left":"0px"});
			$first.removeClass("current");
			$last.after($first);
		});
	});
	
	
	/*CONTENT SLIDER*/
	$(".content_slider").each(function(index, element) {
        $(this).after('<div class="content_slider_nav"><a class="prev"></a> <a class="next"></a></div>');
		var $total = $(this).children("ul").children("li").size();
		var $width = $(this).children("ul").children("li").width();
		$(this).children("ul").width($total*100+'%');
		$(this).children("ul").children("li").width(100/$total+'%');
    });
	
	$(".content_slider_nav .prev").click(function(){
		var $first = $(this).parent('.content_slider_nav').siblings(".content_slider").find('li:first');
		var $last = $(this).parent('.content_slider_nav').siblings(".content_slider").find('li:last');
		var $width = $(this).parent('.content_slider_nav').siblings(".content_slider").find('li').width();
		$last.remove().css({ 'margin-left': -$width });
		$first.before($last);
		$last.animate({ 'margin-left': '0px' }, 300);
		$first.prev().addClass("current");
		$first.removeClass("current");
	});

	$(".content_slider_nav .next").click(function(){
		var $first = $(this).parent(".content_slider_nav").siblings(".content_slider").find("li:first");
		var $last = $(this).parent(".content_slider_nav").siblings(".content_slider").find("li:last");
		var $width = $(this).parent('.content_slider_nav').siblings(".content_slider").find('li').width();
		$first.next().addClass("current");
		$first.animate({"margin-left":-$width}, 300, function() {
			$first.remove().css({"margin-left":"0px"});
			$first.removeClass("current");
			$last.after($first);
		});
	});
	
	
	/*PERCENTAGE BARS*/
	$(".percentage_bars li").each(function(index, element) {
        var $percentage = $(this).data("percentage");
		var $item = $(this).children("span");
		$item.append("<strong>"+$percentage+"%</strong>");
		$item.css({"width":$percentage-2+"%"});
    });
	
	
	/*MEGAMENU*/
	$(".menu_top ul li.megamenu h1 small").text(function(i, text) {
		var t = $.trim(text);
		if (t.length > 110) {
			return $.trim(t).substring(0, 110) + "...";
		}
		return t;
	});
	
	
	/*IMAGE CHANGER*/
	$(".image_changer h1 a").each(function(index, element) {
        var $original = $(this).parent("h1").siblings("a").children("img").attr("src");
		var $link = $(this);
		var $image = $(this).data("image");
		var $changer_main = $(this).parent("h1").siblings("a").children("img");
		
		$link.hover(function(){
			$changer_main.attr({"src":$image});
		},function(){
			$changer_main.attr({"src":$original});
		});
    });
	
	$(".image_changer_small a").each(function(index, element) {
        var $original = $(this).parent("li").siblings("img").attr("src");
		var $link = $(this);
		var $image = $(this).data("image");
		var $changer_main = $(this).parent("li").siblings("img");
		
		$link.hover(function(){
			$changer_main.attr({"src":$image});
		},function(){
			$changer_main.attr({"src":$original});
		});
    });
	
	
	/*SCROLL TO TOP*/
	$('a.back_to_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	
	
	//PRODUCTS BANNER
	var $banner_width = $(".banner article").width();
	$(".products_banner").find('li').width($banner_width);
	$(".banner_slider_products li:first").addClass("current");
	$(".products_banner .prev").click(function(){
		var $last = $(".banner_slider_products li:last");
		var $first = $(".banner_slider_products li:first");
		var $width = $(".products_banner").find('li').width();
		$last.remove().css({"margin-left":-$width});
		$(".banner_slider_products li:first").before($last);
		$last.animate({"margin-left":"0px"}, 500);
		$first.prev().addClass("current");
		$first.delay(305).removeClass("current");
	});

	$(".products_banner .next").click(function(){
		var $last = $(".banner_slider_products li:last");
		var $first = $(".banner_slider_products li:first");
		var $width = $(".products_banner").find('li').width();
		$first.next().addClass("current");
		$first.animate({"margin-left":-$width}, 500, function() {
			$first.remove().css({"margin-left":"0px"});
			$(".banner_slider_products li:last").after($first);
			$first.delay(305).removeClass("current");
		});
	});
	
	$(".products_banner_wrap").each(function(index, element) {
		var $total = $(this).children("ul").children("li").size();
		var $width = $(this).children("ul").children("li").width();
		$(this).children("ul").width($total*100+'%');
		$(this).children("ul").children("li").width(100/$total+'%');
    });
	$(".products_banner li").each(function(index, element) {
        var $background = $(this).data("background");
		var $image = $(this).data("image");
		if($background==undefined){
		}else if($background==""){
		}else{
			$(this).css('background', 'url(' + $background +') repeat-x top center fixed');
		}
		if($image==undefined){
		}else if($image==""){
		}else{
			$(this).css('background', 'url(' + $image +') repeat-x top center');
		}
    });
	
	
	/*PRODUCT PREVIEW*/
	$(".product_images").each(function(index, element) {
		var $total = $(this).children("ul").children("li").size();
		var $width = $(this).children("ul").children("li").width();
		$(this).children("ul").width($total*100+'%');
		$(this).children("ul").children("li").width(100/$total+'%');
    });
	
	$(".product_images ul").each(function(index, element) {
        var $total = $(this).children("li").size();
		if($total<=1){
			$(".product_navigation").remove();
		}
    });
	
	$(".product_navigation .prev").click(function(){
		var $last = $(".product_images li:last");
		var $first = $(".product_images li:first");
		var $width = $(".product_images").find('li').width();
		$last.remove().css({"margin-left":-$width});
		$(".product_images li:first").before($last);
		$last.animate({"margin-left":"0px"}, 300);
	});

	$(".product_navigation .next").click(function(){
		var $last = $(".product_images li:last");
		var $first = $(".product_images li:first");
		var $width = $(".product_images").find('li').width();
		$first.animate({"margin-left":-$width}, 300, function() {
			$first.remove().css({"margin-left":"0px"});
			$(".product_images li:last").after($first);
		});
	});
	
	
	/*PRODUCTS INFO - TABS*/
	$("#tabs div").fadeOut(0);
	$("#tabs div.active").fadeIn(0);
	$("#tabs .tab").click(function(){
	  $(this).siblings("div").fadeOut(0);
	  $(this).siblings(".tab").removeClass("active");
	  if(!$(this).next().is(":visible"))
	  {
		  $(this).next().fadeIn(0);
		  $(this).addClass("active");
	  }
	});
    
	
	/*ACCORDION*/
	$(".accordion .tab").click(function(){
	  $(this).parent("li").parent("ul").find("ul").slideUp(200);
	  $(this).parent("li").parent("ul").find(".tab").removeClass("active");
	  if(!$(this).next().is(":visible"))
	  {
		  $(this).next().slideDown(200);
		  $(this).addClass("active");
	  }
	});
	
	/*COLLAPSIBLE PANEL*/
	$(".collapsible .tab").click(function(){
	  $(this).toggleClass("active");
	  $(this).next().slideToggle(200);
	});
	$("#toggle li").each(function(index, element) {
		var $total = $(this).children("ul").children("li").size();
        if ($total>=2){
			$(this).children(".tab").addClass("arrow").addClass("noBorder");
			$(this).children("ul").addClass("noPadding");
			$(this).children(".arrow").click(function(e){
				e.preventDefault();
			});
		}
    });
	$(".text li").each(function(index, element) {
        $(this).children(".tab").addClass("arrow");
    });
	
	
	/*SUB PRODUCTS LIST*/
	/*PRODUCT PREVIEW*/
	$(".sub_products_list ul").each(function(index, element) {
        var $total = $(this).children("li").size();
		if($total<=6){
			$(".sub_products_nav").remove();
		}
    });
	$(".sub_products_nav .prev").click(function(){
		var $last = $(".sub_products_list li:last");
		var $first = $(".sub_products_list li:first");
		var $width = $(this).parent('.sub_products_nav').siblings(".sub_products_list").find('li').width();
		$last.remove().css({"margin-left":-$width});
		$(".sub_products_list li:first").before($last);
		$last.animate({"margin-left":"0px"}, 300);
	});

	$(".sub_products_nav .next").click(function(){
		var $last = $(".sub_products_list li:last");
		var $first = $(".sub_products_list li:first");
		var $width = $(this).parent('.sub_products_nav').siblings(".sub_products_list").find('li').width();
		$first.animate({"margin-left":-$width}, 300, function() {
			$first.remove().css({"margin-left":"0px"});
			$(".sub_products_list li:last").after($first);
		});
	});
	
	
	/*REQUIRED FIELDS*/
	$("form").submit(function(event){
      var isValid = $.validate.form(this);
      return isValid;
    });
	
	
	/*BLOG POST*/
	$(".product_images li").each(function(index, element) {
		var $title = $(this).attr("title");
		if($title==undefined){
			//do nothing
		}else{
			$(this).append("<span>"+$title+"</span>");
		}
    });
    $(".product_images li").each(function(index, element) {
		$(this).attr("title","");
    });
	$(".replies_toggle li ul").hide();
	$(".replies_toggle .tab").click(function(){
	  $(this).parent("li").parent("ul").find("ul").slideUp(200);
	  $(this).parent("li").parent("ul").find(".tab").removeClass("active");
	  if(!$(this).next().is(":visible"))
	  {
		  $(this).next().slideDown(200);
		  $(this).addClass("active");
	  }
	});
	$(".replies_toggle").each(function(index, element) {
		var $total = $(this).children("li.replies_content").children("ul").children("li").size();
        if($total==1){
			$(this).children("li.replies_content").children(".toggle_replies").prepend($total+" Reply");
		}else if($total>=2){
			$(this).children("li.replies_content").children(".toggle_replies").prepend($total+" Replies");
		}else if($total==0){
			$(this).children("li.replies_content").children(".toggle_replies").remove();
		}
		
    });
	$(".comments").hide();
	$(".toggle_comments").click(function(){
		$(this).next().slideToggle(200);
		$(this).toggleClass("active");
	});
	
	
	/* TOTAL COMMENTS */
	var $total_comments = $(".comments").children(".comment").size();
	$(".total_comments").text("("+$total_comments+")");
	
	
	/* POPUPS */
	$(".close").fadeOut(0);
	$(".popup").click(function(e){
		var $image = $(this).attr("href");
		var $title = $(this).attr("title");
		var $desc = $(this).data("description");
		var $new = $(this).data("new");
		var $sale = $(this).data("sale");
		var $button = $(this).data("button");
		var $buttonText = $(this).data("button-text");
		var $popup = '<div class="popupMain">'+
						'<div class="outer">'+
						  '<div class="main">'+
							'<img src="'+$image+'" />'+
						  '</div>'+
						'</div>'+
					  '</div>';
	   
	   $(".popupMain").remove();
	   
	   $("body").append($popup);
	   
	   if($title==undefined){ }else if($title==""){ }else{ $(".main img").before('<h1>'+$title+'</h1>'); }
	   if($desc==undefined){ }else if($desc==""){ }else{ $(".main img").after('<br /><span class="desc">'+$desc+'</span>'); }
	   if($new==undefined){ }else if($new==""){ }else{ $(".main img").after('<span class="new"></span>'); }
	   if($sale==undefined){ }else if($sale==""){ }else{ $(".main img").after('<span class="sale"></span>'); }
	   if($button==undefined){ }else if($button==""){ }else{ $(".main").append('<p align="center"><a href="'+$button+'" class="btn nrm lwc black none3 popupBtn">Read more</a></p>'); }
	   if($buttonText==undefined){ }else if($buttonText==""){ }else{ $(".popupBtn").text($buttonText); }
	   
	   $(".popupMain").fadeOut(0).css({"top":"0%"}).fadeIn(100);
	   $(".close").fadeIn(200);
	   e.preventDefault();
	});
	$("body").append('<a class="close">CLOSE</a>');
	$(".close").click(function(){
		$(".popupMain").css({"top":"-100%"}).fadeOut(200);
		$(this).fadeOut(100);
	});
    $('#da-thumbs > li').each( function() { $(this).hoverdir(); } );
	
	
	/*SHOPPING CART*/
	$(".shopping_cart tr").each(function(index, element) {
		var $amount = $(".value",this).val();
		var $unitPrice = $(".unitPrice span",this).text();
		var $totalPrice = $(".totalPrice span",this);
		var $removeItem = $(".remove",this);
		var $row = $(".shopping_cart tr").size();
		var $table = $(".shopping_cart");
		$totalPrice.text($unitPrice*$amount);
		$(".value",this).bind('change', function(){
			var $amount = $(this).val();
			$totalPrice.text($unitPrice*$amount);
		});
		$removeItem.click(function(){
			$(this).parent("td").parent("tr").remove();
		});
		if($row<=1){
			$table.after('<h4 align="center" style="min-height:350px;">You have no products in your shopping cart.</h4>');
			$table.remove();
		}        
    });
	
	var data = {};
	$('.shopping_cart .totalPrice span').each(function() {
		data[this.text] = (data[this.text] || 0) + +$(this).text();
	});
	
	var table = 
	$.map(data, function(qty) {
		return qty;
	}).join('');
	
	$(".overalAmount").text(table);
	
	$(".value").bind('change', function(){
	  var data = {};
	  $('.shopping_cart .totalPrice span').each(function() {
		  data[this.text] = (data[this.text] || 0) + +$(this).text();
	  });
	  var table = 
	  $.map(data, function(qty) {
		  return qty;
	  }).join('');
	  $(".overalAmount").text(table);		
	});
	
	$(".remove").click(function(){
		var data = {};
		$('.shopping_cart .totalPrice span').each(function() {
			data[this.text] = (data[this.text] || 0) + +$(this).text();
		});
		var table = 
		$.map(data, function(qty) {
			return qty;
		}).join('');
		$(".overalAmount").text(table);
		
		var $rows = $(".shopping_cart tr").size();
		if($rows<=1){
			$(".shopping_cart").after('<h4 align="center" style="min-height:350px;">You have no products in your shopping cart.</h4>');
			$(".shopping_cart").remove();
			$(".totalPriceCalculated").remove();
			$(".checkout").remove();
		}
	});
	
});