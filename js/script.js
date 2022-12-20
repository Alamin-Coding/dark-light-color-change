"use strict";

setTimeout(()=> {
    document.querySelector(".preloaderDiv").style.display = "none"
},3800)


// Custom cursor start
let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e => {
    if (e.pageY < 10 || e.pageX < 10) {
        cursor.style.opacity = "0"
    } else {
        cursor.style.opacity = "1"
        cursor.style.top = `${e.pageY-10}px`;
        cursor.style.left = `${e.pageX-10}px`;
    }
})
// document.addEventListener('DOMMouseScroll', function(e){
//     cursor.style.top = `${e.pageY-10}px`;
//     cursor.style.left = `${e.pageX-10}px`;
//     console.log(e.screenX);
//     console.log(e.screenY);
//     e.stopPropagation();
//     e.preventDefault();
//     return false;
//  });


// Custom cursor end


const colors = document.querySelectorAll(".color_plate span");
const colorArr = Array.from(colors);
var root = document.querySelector(":root");
var rootStyle = getComputedStyle(root);

colorArr.map((item)=> {
    item.addEventListener("click", function(e){
        root.style.setProperty('--violet', e.target.dataset.color);
        
        // if (rootStyle.getPropertyValue('--violet')) {
        // }
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

// Color code get by input tag
let colorCode = document.querySelector('.color_code');
colorCode.value.red
function getColorCode(e) {
    console.log(colorCode.value);
    root.style.setProperty('--violet', colorCode.value);
} 



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









