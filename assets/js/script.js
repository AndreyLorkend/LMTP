function App () {
    function logoPreAnimation () {
        var logo = document.getElementById("logo");
        var logoValue = logo.textContent.trim();
        var spanFirst = document.createElement("span");
        var spanSecond = document.createElement("span");
        var half = Math.round(logoValue.length / 2);
        var withoutHalf = logoValue.length - half;
        spanFirst.setAttribute("class", "spanFirst");
        spanSecond.setAttribute("class", "spanSecond");
        spanFirst.appendChild(document.createTextNode(logoValue.substring(0, withoutHalf )));
        spanSecond.appendChild(document.createTextNode(logoValue.substring(withoutHalf)));
        logo.textContent = null;
        logo.appendChild(spanFirst);
        logo.appendChild(spanSecond);
    }
    
    function logoAnimation () {
        setTimeout(function(){
            var sf = document.querySelector( ".spanFirst" );
            var ss = document.querySelector( ".spanSecond" );
            sf.classList.add("returnSpan");
            ss.classList.add("returnSpan");
        },100)
    }
    
    document.body.onload = function () {
        logoPreAnimation();
        var preloader = document.getElementById( "preloader" )
        var preloader_first = document.querySelector( "#preloader-block-first" );
        var preloader_second = document.querySelector( "#preloader-block-second" );
        var spinner = document.querySelector( ".spinner" );
        if( !preloader_first.classList.contains( "cfa" ) && !preloader_second.classList.contains( "csa" )){
            setTimeout(function(){
                preloader_first.classList.add( "cfa" );
                preloader_second.classList.add( "csa" );
                spinner.classList.add( "hide_spinner_animation" );
                setTimeout(function(){
                    var text_box = document.querySelector( ".text-box" );
                    logoAnimation();
                    setTimeout(function(){
                        var logo = document.querySelector( "#logo" );
                        logo.classList.add( "la" );
                    },300)
                    if( text_box != null ) {
                        text_box.classList.add( "tba" );
                    }
                },300)
                setTimeout(function(){
                    preloader.style.display = "none"; 
                },800)
            },400)
        }     
    }
    
    function chessBg() {
    
        var content = document.querySelector( "#lt-content" );
    
        if ( content != null ) {
            var contentObject = content.children;
            for (let i = 0; i < (contentObject.length); i++) {
                if(i % 2 != 0){
                    contentObject[i].classList.add( "grey" );
                    if( (i+1) == contentObject.length ) {
                        contentObject[i].style.margin = "0px";
                        contentObject[i].style.padding = "0px 0px 20px 0px";
                    }
                }    
            }
        }
    
    }
    
    function Scroll(stoped, currentPreview) {
    
        var nav = document.querySelector( ".fixed-nav" );
        var preview = currentPreview;
    
        if(stoped === true) {
            nav.classList.remove( "fixed-in" );
            nav.classList.add( "fixed-out" );
            setTimeout(function(){
                nav.style.display = "none";
            },300);
        } else {
            window.onscroll = function () {
                var scrolled = document.documentElement.scrollTop;
                if( preview == null ) {
                    if( scrolled >= 80 && !nav.classList.contains( "fixed-in" ) ) {
                        nav.classList.remove("fixed-out"); 
                        nav.style.display = "block";
                        nav.classList.add("fixed-in");
                    } else if (scrolled < 80 && nav.classList.contains( "fixed-in" )) {
                        nav.classList.remove( "fixed-in" );
                        nav.classList.add( "fixed-out" );
                        setTimeout(function(){
                            nav.style.display = "none";
                        },300);
                    }
                } else if( Preview.style.display == "block" ) {
                    nav.classList.remove( "fixed-in" );
                    nav.classList.add( "fixed-out" );
                    setTimeout(function(){
                        nav.style.display = "none";
                    },300);
                }
            }
        }
    
    }
    
    var searchClick = document.getElementById( "lt-search-header" );
    
    searchClick.addEventListener( "click", function() {
        var input = document.getElementById( "lt-search-input-header" );
        var searchWrap = document.querySelector( "#lt-unput-wrap-header" );
        var iconSearch = document.querySelector( "#search-item-search" );
        var iconClose = document.querySelector( "#search-item-close" );
        var searchBtn = document.querySelector( "#lt-search-btn" );
        searchClick.classList.toggle( "show-input" );
    
        if( searchClick.classList.contains( "show-input" ) ) {
            iconSearch.style.transform = "translateY(30px)";
            iconClose.style.transform = "translateY(0px)";
            searchWrap.classList.add( "width-in" );
            input.style.display = "block";
            input.classList.remove( "remove-input-area" );
            input.classList.add( "show-input-area" );
            searchBtn.style.display = "block";
            setTimeout(function(){
                searchBtn.style.opacity = "1"; 
            },300)
        } else {
            searchBtn.style.display = "none";
            searchBtn.style.opacity = "0";
            iconSearch.style.transform = "translateY(0px)";
            iconClose.style.transform = "translateY(-30px)";
            input.classList.remove( "show-input-area" );
            input.classList.add( "remove-input-area" );
            setTimeout(function(){
                input.style.display = "none";
                searchWrap.classList.remove( "width-in" );
            },300)
        }
    });
    
    var footer_subscribe = document.querySelector( "#lt-footer-subscribe" );
    
    footer_subscribe.addEventListener( "click", function(){
        var label_subscribe = document.querySelector( "#label-subscribe" );
        label_subscribe.style.top = "0";
        label_subscribe.style.left = "0";
        label_subscribe.style.fontSize = "14px";
        label_subscribe.style.color = "#ac4e56";
    })
    
    footer_subscribe.addEventListener( "blur", function(){
        var label_subscribe = document.querySelector( "#label-subscribe" );
        if( footer_subscribe.value == "" ) {
            label_subscribe.style.top = "15px";
            label_subscribe.style.left = "15px";
            label_subscribe.style.fontSize = "18px";
            label_subscribe.style.color = "#f0f0f0";
        }
    })
    
    var previewBtn = document.querySelectorAll( ".blog-preview-btn" );
    var preview = document.querySelectorAll( ".lt-blog-post-preview" );
    var currentPreview;
    previewBtn.forEach(function(event){
        event.addEventListener( "click", function(){
            var currentBtn = event;
            preview.forEach(function(el){
                if( el.dataset.postId == currentBtn.dataset.postId) {
                    el.style.display = "block";
                    el.classList.add( "preview-fade-in" );
                    currentPreview = el;
                    Scroll(true, currentPreview);
                }
                window.addEventListener( "keydown",function(key){
                    if(key.keyCode === 27) {
                        currentPreview.classList.add( "preview-fade-out" );
                        setTimeout(function(){
                            currentPreview.style.display = "none";
                            currentPreview.classList.remove( "preview-fade-in" );
                            currentPreview.classList.remove( "preview-fade-out" );
                            Scroll(false, null);
                        },300)
                    }
                })
            })
        });
    })
    
    // Переделать dataChange( поменять data- атрибуты всех элементом => )
    // data-bg => data-color-box
    // data-color-text
    // data-color-header
    // data-color-footer
    // data-color-content
    
    function dataChange (colorScheme) {
        var elements = document.querySelectorAll(' [data-theme] ');
        elements.forEach(element => {
            switch (colorScheme) {
                case 'darkTheme':
                    if( element.hasAttribute("data-color-box") ) {
                        element.setAttribute("data-color-box", "darkTheme");
                    }
    
                    if( element.hasAttribute("data-color-box-pseudo") ) {
                        element.setAttribute("data-color-box-pseudo", "darkTheme");
                    }
                    
                    if( element.hasAttribute("data-color-box-alt") ) {
                        element.setAttribute("data-color-box-alt", "darkTheme");
                    }
    
                    if( element.hasAttribute("data-color-header") ) {
                        element.setAttribute("data-color-header", "darkTheme");
                    }
    
                    if( element.hasAttribute("data-color-text") ) {
                        element.setAttribute("data-color-text", "darkTheme");
                    }
    
                    if( element.hasAttribute("data-color-footer") ) {
                        element.setAttribute("data-color-footer", "darkTheme");
                    }
    
                    if( element.hasAttribute( "data-color-header-img" ) ) {
                        element.setAttribute( "data-color-header-img", "darkTheme" );
                    }
    
                    if( element.hasAttribute( "data-color-box-border" ) ) {
                        element.setAttribute( "data-color-box-border", "darkTheme" );
                    }
    
                break;
    
                case 'default':
                        if( element.hasAttribute("data-color-box") ) {
                            element.setAttribute("data-color-box", "default");
                        }
    
                        if( element.hasAttribute("data-color-box-pseudo") ) {
                            element.setAttribute("data-color-box-pseudo", "default");
                        }
                        
                        if( element.hasAttribute("data-color-box-alt") ) {
                            element.setAttribute("data-color-box-alt", "default");
                        }
        
                        if( element.hasAttribute("data-color-header") ) {
                            element.setAttribute("data-color-header", "default");
                        }
        
                        if( element.hasAttribute("data-color-text") ) {
                            element.setAttribute("data-color-text", "default");
                        }
        
                        if( element.hasAttribute("data-color-footer") ) {
                            element.setAttribute("data-color-footer", "default");
                        }
    
                        if( element.hasAttribute( "data-color-header-img" ) ) {
                            element.setAttribute( "data-color-header-img", "default" );
                        }
    
                        if( element.hasAttribute( "data-color-box-border" ) ) {
                            element.setAttribute( "data-color-box-border", "default" );
                        }
    
                    break;
    
                default:
                    break;
            }
        });
    }
    
    var themeClose = document.getElementById("theme-close");
    var themeDefault = document.getElementById("theme-btn-default");
    var themeDark = document.getElementById("theme-btn-dark");
    
    themeClose.addEventListener("click", function(){
        var themeWindow = document.querySelector(" .theme-settings ");
        themeWindow.style.display = "none";
    })
    
    themeDefault.addEventListener("click", function(){
        dataChange("default");
        localStorage.setItem("theme", "default");
    })
    
    themeDark.addEventListener("click", function(){
        dataChange("darkTheme");
        localStorage.setItem("theme", "darkTheme");
    })
    
    var ls = localStorage.getItem("theme");
    
    dataChange(ls);
    Scroll();
    chessBg();   
}

App();