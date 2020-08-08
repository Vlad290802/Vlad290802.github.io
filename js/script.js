$(document).ready(function(){
		$('.promo__carousel').slick({
			dots: false,
			speed: 900,
			fade: true,
			cssEase: 'linear',
			prevArrow: '<button type="button" class="slick-prev"><img src="../icons/leftsolid.svg"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="../icons/rightsolid.svg"></button>'
		});
	});

	$(document).ready(function(){
		$('.brunch__inner').slick({
			dots: false,
			speed: 1000,
			prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-solid.png"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-solid.png"></button>'
		});
	});

//Smooth and scroll up
	$(window).scroll(function(){
		if($(this).scrollTop() > 1000){
			$('.pageup').fadeIn();
		}else{
			$('.pageup').fadeOut();
		}
	});
	$("a[href^=#up]").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});


	$(window).scroll(function(){
		if($(this).scrollTop() > 1000){
			$('promo__link').fadeIn();
		}else{
			$('promo__link').fadeOut();
		}
	});
	$("a[href^=#promo]").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
	$("a[href^=#module]").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
	$("a[href^=#brunch]").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
	$("a[href^=#advantages]").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
	$("a[href^=#footer]").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init();

	document.addEventListener('DOMContentLoaded', () => {

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });
    
        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    
        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            // clearInterval(modalTimerId);
        }
        
        modalCloseBtn.addEventListener('click', closeModal);
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                closeModal();
            }
        });
    
        // const modalTimerId = setTimeout(openModal, 3000);
    
        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
        window.addEventListener('scroll', showModalByScroll);
});


//hamburger
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

$('input[name=phone]').mask("+380 (99) 999-9999");


	 // Tabs
		
//    let tabs = document.querySelectorAll('.brunch__tab'),
//    tabsContent = document.querySelectorAll('.brunch__content'),
//    tabsParent = document.querySelector('.brunch__tabs');

//  function hideTabContent() {
			 
//        tabsContent.forEach(item => {
//         item.style.display = 'none';
//        });

//        tabs.forEach(item => {
//            item.classList.remove('brunch__tab_active');
//        });
//  }

//  function showTabContent(i = 0) {
//   tabsContent[i].style.display = 'block';
//        tabs[i].classList.add('brunch__item_active');
//    }
	 
//    hideTabContent();
//    showTabContent();

//  tabsParent.addEventListener('click', function(event) {
//    const target = event.target;
//    if(target && target.classList.contains('brunch__tab')) {
//            tabs.forEach((item, i) => {
//                if (target == item) {
//                    hideTabContent();
//                    showTabContent(i);
//                }
//            });
//    }
//    });