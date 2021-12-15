                //   fixed nav bar start
                window.onscroll = function(){myFunction()};
                var navbar = document.querySelector(".main-nav");
                var sticky = navbar.offsetTop;
                
                function myFunction(){
                    if(window.pageYOffset>=sticky){
                        navbar.classList.add("sticky");
                        
                    }
                    else{
                        navbar.classList.remove("sticky");
                    }
                }
                            // fixed nav bar closed

                            // slider card start
                            var slides = document.querySelectorAll('.slide');
                            var btns = document.querySelectorAll('.btn');
                            let currentSlide = 1;
                        
                            // Javascript for image slider manual navigation
                            var manualNav = function(manual){
                              slides.forEach((slide) => {
                                slide.classList.remove('active');
                        
                                btns.forEach((btn) => {
                                  btn.classList.remove('active');
                                });
                              });
                        
                              slides[manual].classList.add('active');
                              btns[manual].classList.add('active');
                            }
                        
                            btns.forEach((btn, i) => {
                              btn.addEventListener("click", () => {
                                manualNav(i);
                                currentSlide = i;
                              });
                            });
                        
                            // Javascript for image slider autoplay navigation
                            var repeat = function(activeClass){
                              let active = document.getElementsByClassName('active');
                              let i = 1;
                        
                              var repeater = () => {
                                setTimeout(function(){
                                  [...active].forEach((activeSlide) => {
                                    activeSlide.classList.remove('active');
                                  });
                        
                                slides[i].classList.add('active');
                                btns[i].classList.add('active');
                                i++;
                        
                                if(slides.length == i){
                                  i = 0;
                                }
                                if(i >= slides.length){
                                  return;
                                }
                                repeater();
                              }, 2000);
                              }
                              repeater();
                            }
                            repeat();
                        // slider card end