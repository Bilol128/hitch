const drop_menu = document.querySelector(".navbar-drop__menu")
      city_navbar = document.querySelectorAll('.navbar-city')
      drop_down_head = document.querySelectorAll('.drop_down_head')
      navbar_drop__menu = document.querySelectorAll('.navbar-drop__menu')
      navbar__menu__list = document.querySelectorAll('.navbar-menu__list p')
      navbar_icon = document.querySelectorAll('.navbar-search__input')
      drop_menu_navbar = document.querySelector('.navbarR-drop__menu')
      navabr_right__list = document.querySelectorAll('.navabr-right__list li')
      burger_drop__menu = document.querySelector('.burger-drop__menu')
      burger_menu = document.querySelector('.burger-btn')
      burger_drop__text = document.querySelector('.burger-drop__text')
      burger_btn = document.querySelector('.burger-btn')
      burger_menu = document.querySelector('.burger-menu')
      burger_dark = document.querySelector('.burger-dark')
      body = document.querySelector('body') 
      burger_txt = document.querySelector('.burger-text__Box')
      navbar__search__icon = document.querySelectorAll('.navabr-search__icon')
      navbar__search__input = document.querySelector('.burger-search__input')
      map__dropdown__head = document.querySelector('.map-dropdown__head')
      map__dropdown__cont = document.querySelector('.map-dropdown__cont')
      map_dropdown__block = document.querySelectorAll('.dropdown__list p')
      drop_down_head= document.querySelectorAll('.drop_down_head')
      footer_column1 = document.querySelectorAll('.footer-column')
      header_heade_pg2 = document.querySelector('.header-head p')
      navabr_right__list = document.querySelectorAll('.burger-list1 a')
      header__head = document.querySelector('.header-head p')
      header__img2 = document.querySelector('.header-img2')
      header__link__p= document.querySelectorAll('.header-link__active')
      footer__column__list1= document.querySelectorAll('.footer-column__list1 a')
      search__name= document.querySelectorAll('.search-name p')
      navbar__button= document.querySelector('.navbar-button')
      header__link__p1= document.querySelector('.header-link__p1')
      search__button= document.querySelector('.search-button')
      rangeInput = document.querySelectorAll('.range-input2 input')
      progress2 = document.querySelector('.slider2 .progress')
      priceInput = document.querySelectorAll('.box2-acardion2__number input')
      acardion2__content1 = document.querySelector('.inner-acardion__content1')
      acardion2__header1 = document.querySelector('.inner-acardion__header1')
      acardion2__content2 = document.querySelector('.inner-acardion__content2')
      acardion2__header2 = document.querySelector('.inner-acardion__header2')
      acardion2__content3 = document.querySelector('.inner-acardion__content3')
      acardion2__header3 = document.querySelector('.inner-acardion__header3')
      acardion2__content4 = document.querySelector('.inner-acardion__content4')
      acardion2__header4 = document.querySelector('.inner-acardion__header4')
      input__checkbox = document.querySelectorAll('.inner-content__box')
      acardion2__remove = document.querySelector('.box2-acardion2__remove')
      acardion2__header__box1 = document.querySelector('.box2-acardion2__header')
      acardion2__header__box2 = document.querySelector('.box2-acardion2__header2')
      acardion2__box1 = document.querySelector('.box2-collumn1-content')
      acardion2__box2 = document.querySelector('.box2-collumn1-content2')
      box2_collumn1__close = document.querySelector('.box2-collumn1__close')
      box2_collumn1 = document.querySelector('.box2-collumn1')
      dark__box2_collumn1 = document.querySelector('.dark__box2-collumn1')
      box2_collumn1__text = document.querySelectorAll('.box2-collumn1__type p')
      box2_collumn2__filter = document.querySelector('.box2-collumn2__filter')
      box2_1160__MenuHead = document.querySelector('.box2-1160__MeneuHead')
      box2_1160__MenuContent = document.querySelector('.box2-1160__MenuContent')
      box2_collumn1__typeP = document.querySelectorAll('.box2-collumn1__type p')
      box2_collumn1 = document.querySelector('.box2-collumn1')
      box2_collumn2 = document.querySelector('.box2-collumn2')
      burger_drop__text2 = document.querySelectorAll('.burger-drop__text p')
      header__link__p2 = document.querySelector('.header-link__p2 p')
      box2_list__MenuContent = document.querySelectorAll('.box2-list__MenuContent p')
      header_link__select3 = document.querySelector('.header-link__select3 p')
      collumn2__card__text = document.querySelectorAll('.collumn2-card__text')
      header_link__object3 = document.querySelector('.header-link__object3')
      header__text3 = document.querySelector('.header-text3')
      option3__articul = document.querySelector('.option3-articul p')
      option3__coment = document.querySelector('.option3-coment p')
      fix_text__product3 = document.querySelector('.fix-text__product3')
      tab__text = document.querySelectorAll('.tab__text')
      tab__text__header = document.querySelectorAll('.tab__text__header p')
      tablinks = document.querySelectorAll('.tablinks')
      footer_down__head = document.querySelector('.footer-down__head')
      footer_down__list = document.querySelector('.footer-down__list')



      footer_down__head.addEventListener('click' , function(){
        footer_down__list.classList.toggle('footer-down__active')
      })




      new Swiper('.watch-card__block' ,{
        slideToClickedSlide: true,
        slidesPerView:2.3,
        spaceBetween:17,
        loop:false,
        breakpoints: {
            1060: {
                slidesPerView:2.3,
            },
            860: {
                slidesPerView:1.8,
            },
            680: {
                slidesPerView:1.5,
            },
            320: {
                slidesPerView:1.2,
            },
        }
       })
    




      new Swiper('.obzor-slider' ,{
        slideToClickedSlide: true,
        slidesPerView:2.1,
        spaceBetween:17,
        loop:false,
        breakpoints: {
            769: {
                slidesPerView:2.1,
            },
            460: {
                slidesPerView:1.4,
            },
            320: {
                slidesPerView:1.2,
            },
        }
       })



      new Swiper('.tabs' ,{
        slideToClickedSlide: true,
        slidesPerView:3.4,
        spaceBetween:20,
        loop:false,
        breakpoints: {
            769: {
                slidesPerView:3.4,
            },
            768: {
                slidesPerView:3.4,
            },
            680: {
                slidesPerView:3.4,
            },
            480: {
                slidesPerView:2.6,
            },
            320: {
                slidesPerView:1.4,
            },
        }
       })




      const tabs = document.querySelectorAll('[data-tab-target]')
      const tabContents = document.querySelectorAll('[data-tab-content]')
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.tabTarget)
          tabContents.forEach(tabContent => {
            tabContent.classList.remove('tab3_active')
          })
          tabs.forEach(tab => {
            tab.classList.remove('tab3_active')
          })
          tab.classList.add('tab3_active')
          target.classList.add('tab3_active')
        })
      })


       
        if(fix_text__product3){
            window.addEventListener('scroll' , function(){
                if(window.scrollY > 786){
                    fix_text__product3.classList.add('fix-text__none')
                }
                else{
                    fix_text__product3.classList.remove('fix-text__none')
                }
            })
        }
    





      new Swiper('.produc3-slider' ,{
        slideToClickedSlide: true,
        slidesPerView:1,
        loop:true,
        navigation: {
          nextEl: '.product3-arrow__svg__prev',
          prevEl: '.product3-arrow__svg__next',
        },
        pagination: {
            el: '.product3-pagination__slider',
            type: 'bullets',
          },
          thumbs: {
              swiper:{
                  el:'.prodcut3-miniature',
                  loop:true,
                  slidesPerView:3,
                  breakpoints: {
                    401:{
                        slidesPerView:3,
                    },
                    300:{
                        slidesPerView:2,
                    },
                }
              }
          }
       })









      if(option3__articul){
        option3__articul.innerHTML ='Артикул:' + Math.floor(Math.random() * 10000000000);
        option3__coment.innerHTML = 'Отзывов: '+ Math.floor(Math.random() * 100)
      }


      collumn2__card__text.forEach(collumn2__card__textelement => {
        collumn2__card__textelement.addEventListener('click' , function(){
            localStorage.removeItem('header-object')
            localStorage.setItem('header-object' , collumn2__card__textelement.innerHTML)
        })
      });
      if(header_link__object3){
        header_link__object3.innerHTML = localStorage.getItem('header-object')
        header__text3.innerHTML = localStorage.getItem('header-object')
      }












      box2_list__MenuContent.forEach(box2_list__MenuContentelement => {
        box2_list__MenuContentelement.addEventListener('click' , function(){
            box2_list__MenuContentelement.classList.toggle('box2_list__MenuContentActive')
        })
      });


        

      if(box2_1160__MenuHead){

        window.addEventListener('scroll' , function(){
            if(window.scrollY > 500){
             box2_collumn1.classList.add('box2_collumn1__active')
             box2_collumn2.classList.add('box2_collumn2__active')
            }
            else if(window.scrollY < 500){
             box2_collumn1.classList.remove('box2_collumn1__active')
             box2_collumn2.classList.remove('box2_collumn2__active')
            }
             if(window.scrollY > 1860){
             box2_collumn1.classList.remove('box2_collumn1__active')
             box2_collumn1.classList.add('box2_collumn1__active2')
             box2_collumn2.classList.remove('box2_collumn2__active')
            }
             if(window.scrollY < 1860 && window.scrollY > 500){
             box2_collumn1.classList.add('box2_collumn1__active')
             box2_collumn1.classList.remove('box2_collumn1__active2')
             box2_collumn2.classList.add('box2_collumn2__active')
            }
             })
     
     
     
     
     
     
     
     
     
     
           box2_collumn1__typeP.forEach(box2_collumn1__typePelement => {
             box2_collumn1__typePelement.addEventListener('click' , function(){
                 if(box2_collumn1__typePelement.classList.contains('box2_collumn1__typePactive')){
                     box2_collumn1__typePelement.classList.remove('box2_collumn1__typePactive')
                 }else{
                     box2_collumn1__typeP.forEach((event2) => event2.classList.remove("box2_collumn1__typePactive"));
                     box2_collumn1__typePelement.classList.add('box2_collumn1__typePactive')
                 }
             })
           });
        box2_1160__MenuHead.addEventListener('click' , function(){
            box2_1160__MenuContent.classList.toggle('box2__1160__activeMenu')
          })
    
    
    
          
          box2_collumn1__text.forEach(box2_collumn1__textelement => {
            box2_collumn1__textelement.addEventListener('click' , function(){
                box2_collumn1__textelement.classList.toggle('box2_collumn1__textActive')
            })
           });
    
    
    
           box2_collumn2__filter.addEventListener("click" , function(){
            box2_collumn1.classList.add('box2_collumn1__active20')
            dark__box2_collumn1.classList.add('dark_collumn1__active')
            body.classList.add('remove')
           })
    
          box2_collumn1__close.addEventListener('click' , function(){
              box2_collumn1.classList.remove('box2_collumn1__active20')
              dark__box2_collumn1.classList.remove('dark_collumn1__active')
              body.classList.remove('remove')
          })
          dark__box2_collumn1.addEventListener('click' , function(){
              box2_collumn1.classList.remove('box2_collumn1__active20')
              dark__box2_collumn1.classList.remove('dark_collumn1__active')
              body.classList.remove('remove')
          })
    
    
    
          acardion2__header__box1.addEventListener('click' , function(){
            acardion2__box1.classList.toggle('acardion-box__active')
            acardion2__header__box1.classList.toggle('acardion-header__active')
          })
          acardion2__header__box2.addEventListener('click' , function(){
            acardion2__box2.classList.toggle('acardion-box__active')
            acardion2__header__box2.classList.toggle('acardion-header__active')
          })
    
    
    
          acardion2__remove.addEventListener('click' , function(){
            input__checkbox.forEach(input__checkboxelement => {
                    input__checkboxelement.classList.remove('inner_checkbox__active')
              });
         })
    
    
          input__checkbox.forEach(input__checkboxelement => {
            input__checkboxelement.addEventListener('click' , function(){
                input__checkboxelement.classList.toggle('inner_checkbox__active')
            })
          });
    
    
          acardion2__header1.addEventListener('click' , function(){
              acardion2__content1.classList.toggle('acardion-active')
              acardion2__header1.classList.toggle('acardion2-header__active')
          })
          acardion2__header2.addEventListener('click' , function(){
              acardion2__content2.classList.toggle('acardion-active')
              acardion2__header2.classList.toggle('acardion2-header__active')
          })
          acardion2__header3.addEventListener('click' , function(){
              acardion2__content3.classList.toggle('acardion-active')
              acardion2__header3.classList.toggle('acardion2-header__active')
          })
          acardion2__header4.addEventListener('click' , function(){
              acardion2__content4.classList.toggle('acardion-active')
              acardion2__header4.classList.toggle('acardion2-header__active')
          })
    
    
          let priceGap = 2500;
          priceInput.forEach(input => {
              input.addEventListener('input' , (e) => {
                  let minVal = parseInt(priceInput[0].value),
                    maxVal = parseInt(priceInput[1].value)
                    
                    if((maxVal - minVal >= priceGap) && maxVal <= 25000 ){
                        if(e.target.className === 'input-min'){
                            rangeInput[0].value = minVal
                            progress2.style.left = (minVal / rangeInput[0].max ) * 100 + "%";
                        }else{
                            rangeInput[1].value = maxVal
                            progress2.style.right = 100 - (maxVal / rangeInput[1].max ) * 100 + "%";
                        }
                    }
              });
              
          });
    
    
          rangeInput.forEach(input => {
              input.addEventListener('input' , (e) => {
                  let minVal = parseInt(rangeInput[0].value),
                      maxVal = parseInt(rangeInput[1].value)
                    
                    if(maxVal - minVal < priceGap){
                        if(e.target.className === 'range__min'){
                            rangeInput[0].value = maxVal - priceGap
                        }else{
                            rangeInput[1].value = minVal + priceGap
                        }
                    }else{
                        priceInput[0].value = minVal;
                        priceInput[1].value = maxVal;
                        progress2.style.left = (minVal / rangeInput[0].max ) * 100 + "%";
                        progress2.style.right = 100 - (maxVal / rangeInput[1].max ) * 100 + "%";
                    }
              });
              
          });
      }
      if(map__dropdown__head){
        search__button.addEventListener('click' , function(){
            let text = 'Каталог'
            localStorage.removeItem('header')
            localStorage.setItem('header' , text )  
            header__link__pelement.classList.toggle('header-link__none')
            localStorage.removeItem('number')
            localStorage.setItem('number' , 0)
          })
      }





        map_dropdown__block.forEach(map_dropdown__blockElement => {
                drop_down_head.forEach( drop_down_headElement => {
                    map_dropdown__blockElement.addEventListener('click' , function(){
                    let city_text = map_dropdown__blockElement.innerHTML
                    localStorage.removeItem('city_selet')
                    localStorage.setItem('city_select' , city_text)
                   })
                   setInterval(() => {
                    drop_down_headElement.innerHTML =  localStorage.getItem('city_select')
                   }, 1000);
                });
          });
    
    if(map__dropdown__head){
          map__dropdown__head.addEventListener("click" , function(){
            map__dropdown__cont.classList.toggle('map__dropdown__active')
          })
        }
      drop_down_head.forEach(drop_down_headElement => {
        navbar__menu__list.forEach(navbar_drop__menuElement => {
            navbar_drop__menuElement.addEventListener('click' , function(){
                let city_text = navbar_drop__menuElement.innerHTML
                localStorage.removeItem('city_selet')
                localStorage.setItem('city_select' , city_text)
            })
            setInterval(() => {
                drop_down_headElement.innerHTML =  localStorage.getItem('city_select')
               }, 500);
          });
          
      });
           

        navbar__button.addEventListener('click' , function(){
            let text = 'Каталог'
            localStorage.removeItem('header')
            localStorage.setItem('header' , text )  
            localStorage.removeItem('number')
            localStorage.setItem('number' , '0')
          }) 


       
      search__name.forEach(search__nameElement => {   
        search__nameElement.addEventListener("click" , function(){
            localStorage.removeItem('header')
            localStorage.setItem('header' , search__nameElement.innerHTML)  
            localStorage.removeItem('number')
            localStorage.setItem('number' , '1')
        })
     });


      footer__column__list1.forEach(footer__column__list1Element => {   
        footer__column__list1Element.addEventListener("click" , function(){
            localStorage.removeItem('header')
            localStorage.setItem('header' , footer__column__list1Element.innerHTML)  
            localStorage.removeItem('number')
            localStorage.setItem('number' , '1')
        })
     });

     navabr_right__list.forEach(navabr_right__listElement => {   
        navabr_right__listElement.addEventListener("click" , function(){
            localStorage.removeItem('header')
            localStorage.setItem('header' , navabr_right__listElement.innerHTML)  
            localStorage.removeItem('number')
            localStorage.setItem('number' , '1')
        })
     });
     if(header__link__p1){
        if(localStorage.getItem('number') == '0'){
        header__head.innerHTML = localStorage.getItem('header')
        header__link__p1.classList.add('header-link__active')
       }
       else if(localStorage.getItem('number') == '1'){
        let header__p2 = document.createElement('p')
        header__link__p1.classList.remove('header-link__active')
        header__link__p2.innerHTML = localStorage.getItem('header')
       }
        header__head.innerHTML = localStorage.getItem('header')
     }
     if(header_link__select3){
        header_link__select3.innerHTML = localStorage.getItem('header')
     }


    

     footer_column1.forEach(footer_column1element => {
        footer_column1element.addEventListener('click' , function(){
            if(footer_column1element.classList.contains('footer-acardion__active')){
                footer_column1element.classList.remove('footer-acardion__active')
            }else{
                footer_column1.forEach((event2) => event2.classList.remove("footer-acardion__active"));
                footer_column1element.classList.add('footer-acardion__active')
            }
        })
     });
  




  
    
    

      new Swiper('.about-box' ,{
        loop:true,
        slidesPerView:2.15,
        slideToClickedSlide: true,
        freeMode:true,
        navigation: {
          nextEl: '.about-arrow__left',
          prevEl: '.about-arrow__right',
        },
        breakpoints: {
            1210:{
                slidesPerView:2.1,
            },
            1200: {
                slidesPerView:1.8,
            },
            992:{
                slidesPerView:1.7,
            },
            768: {
                slidesPerView:1.2,
            },
            480: {
                slidesPerView:1.1,
            },
            320: {
                slidesPerView:1,
            },
        }
       })





      new Swiper('.top-slider__conatiner' ,{
        loop:false,
        slidesPerView:2.35,
        slideToClickedSlide: true,
        freeMode:true,
        navigation: {
          nextEl: '.slider-arrow__right2',
          prevEl: '.slider-arrow__left2',
        },
        breakpoints: {
            1210:{
                slidesPerView:2.3,
            },
            1200: {
                slidesPerView:2.3,
            },
            992:{
                slidesPerView:2.5,
            },
            768: {
                slidesPerView:2.3,
            },
            480: {
                slidesPerView:2.15,
            },
            320: {
                slidesPerView:1.05,
            },
        }
       })
      
      new Swiper('.csearch-cardbox' ,{
        loop:false,
        slidesPerView:1.35,
        slideToClickedSlide: true,
        freeMode:true,
        navigation: {
          nextEl: '.slider-arrow__right',
          prevEl: '.slider-arrow__left',
        },
        breakpoints: {
            1210:{
                slidesPerView:1.35,
            },
            1200: {
                slidesPerView:1.35,
            },
            992:{
                slidesPerView:1.35,
            },
            768: {
                slidesPerView:1.35,
            },
            480: {
                slidesPerView:1.05,
            },
            320: {
                slidesPerView:1.05,
            },
        }
       })

       if(burger_dark){
        burger_dark.addEventListener('click' , function(){
            burger_menu.classList.remove('burger-menu_active')
            burger_dark.classList.remove('burgerd-dark_active')
            body.classList.remove('body-lock')
          })
       }

      burger_btn.addEventListener('click' , function(){
          burger_menu.classList.toggle('burger-menu_active')
          body.classList.toggle('body-lock')
          burger_dark.classList.toggle('burgerd-dark_active')
          burger_btn.classList.toggle('burger-locked')
      })

      burger_drop__menu.addEventListener('click' , function(){
          burger_drop__text.classList.toggle('burger_drop__textActive')
      })   

   
        navabr_right__list[0].addEventListener('click' , function(){
            drop_menu_navbar.classList.toggle('drop-menu-active2')
        })



 navbar_icon.forEach( navbar_icon_element => {
    navbar_icon_element.addEventListener('mouseover' , function(){
        setTimeout(() => {
            navbar_icon_element.classList.remove('navbar-icon__active')
            burger_txt.classList.remove('burger-text__disablade')
            navbar__search__icon.remove('burger-icon__change')
        }, 2000);
    })
    
 
    navbar_icon_element.addEventListener('click' , function(){
        navbar_icon_element.classList.add('navbar-icon__active')
        burger_txt.classList.add('burger-text__disablade') 
        navbar__search__icon.add('burger-icon__change')
    })
    navbar_icon_element.addEventListener('click' ,function(){
        if(navbar_icon_element.containce.classList('navbar-icon__active')){
            navbar__search__icon.forEach(search__icon_element => {
                search__icon_element.classList.remove('burger-icon__change') 
            });
        }
    })
 });



    navbar__search__input.addEventListener('mouseover' , function(){
        setTimeout(() => {
            navbar__search__icon.forEach(search__icon_element => {
                search__icon_element.classList.remove('burger-icon__change') 
            });
        }, 2000);
    })
    
    navbar__search__input.addEventListener('click' , function(){
        navbar__search__icon.forEach(search__icon_element => {
            search__icon_element.classList.add('burger-icon__change') 
        });
    })