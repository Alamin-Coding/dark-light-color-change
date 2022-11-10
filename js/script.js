"use strict";

setTimeout(()=> {
    document.querySelector(".preloaderDiv").style.display = "none"
},3800)





const colors = document.querySelectorAll(".color_plate span");
const colorArr = Array.from(colors);
var root = document.querySelector(":root");
var rootStyle = getComputedStyle(root);

colorArr.map((item)=> {
    item.addEventListener("click", function(e){
        if (rootStyle.getPropertyValue('--violet')) {
            root.style.setProperty('--violet', e.target.dataset.color);
        }
    })
})


// Multi Color Start
let left = false
$(".gear_icon").click(()=> {
    if ( !left) {
        $(".multi_color").css({
            "transform": "translateX(calc(0%))"
        })
        left = true
    } else {
        $(".multi_color").css({
            "transform": "translateX(calc(100% - 65px))"
        })
        left = false
    }
})

$(window).scroll((e)=> {
    let v = $(window).scrollTop()
    if (v) {
        $(".multi_color").css({
            "transform": "translateX(calc(100% - 65px))"
        })
        left = false
    }
})
// Multi Color End



$(function(){
        $('.my_slider').slick({
         slidesToShow: 3,
         autoplay: false,
         autoplaySpeed: 500,
         arrows: true,
         prevArrow: '<i class="fa-solid fa-chevron-left prev_arr"></i>',
         nextArrow: '<i class="fa-solid fa-chevron-right next_arr"></i>',
         dots: true,
         swipeToSlide:true,
         centerMode:true,
         centerPadding: "0px"
    });



})




// Dark mode and light mode
function darkLight() {
	var checkBox = document.getElementById("dm");

	if (checkBox.checked == true) {
		document.body.style.backgroundColor = "#1B2430";
		document.body.style.transform = "1s";
	} else {
		document.body.style.backgroundColor = "#ffffff";
	}

	if (checkBox.checked == true) {
		document.getElementById("button").style.background = "url(./images/dark.jpg)";
		document.getElementById("button").style.backgroundSize = "cover";
	} else {
		document.getElementById("button").style.background =
			"url('./images/light.jpg') no-repeat center center";
		document.getElementById("button").style.backgroundSize = "cover";
	}

    if (checkBox.checked == true) {
        root.style.setProperty('--heading', '#eee');
    }else{
        root.style.setProperty('--heading', '#000');
    }
    if (checkBox.checked == true) {
        root.style.setProperty('--heading-2', 'green');
    }else{
        root.style.setProperty('--heading-2', '#111');
    }
    if (checkBox.checked == true) {
        root.style.setProperty('--para', '#999');
    }else{
        root.style.setProperty('--para', '#444');
    }
    if (checkBox.checked == true) {
        root.style.setProperty('--theme-button', '#fff');
    }else{
        root.style.setProperty('--theme-button', '#333');
    }
    if (checkBox.checked == true) {
        root.style.setProperty('--theme-white', '#333');
    }else{
        root.style.setProperty('--theme-white', '#fff');
    }

}









