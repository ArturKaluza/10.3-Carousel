$(function() {
    
    var carouselList = $('#carousel ul');
    
    var arrowLeft = $('#arrowLeft');
    var arrowRight = $('#arrowRight');
    
    var circkle1 = $('#carousel .circkle .circkle-1');
    var circkle2 = $('#carousel .circkle .circkle-2');
    var circkle3 = $('#carousel .circkle .circkle-3');
    var circkle4 = $('#carousel .circkle .circkle-4');
    var circkle5 = $('#carousel .circkle .circkle-5');
   // carouselList.css({'marginLeft':-400});
    
    circkle1.click(function(){
        sortLiElements();
        carouselList.css('marginLeft',0);
        removeActive();
        $(this).addClass('active');
    })
    
    circkle2.click(function(){
        sortLiElements();
        carouselList.css('marginLeft',-400);
        removeActive();
        $(this).addClass('active');
    })
    
    circkle3.click(function(){
        sortLiElements();
        carouselList.css('marginLeft',-800);
        removeActive();
        $(this).addClass('active');
    })
    
    circkle4.click(function(){
        sortLiElements();
        carouselList.css('marginLeft',-1200);
        removeActive();
        $(this).addClass('active');
    })
    
    circkle5.click(function(){
        sortLiElements();
        carouselList.css('marginLeft',-1600);
        removeActive();
        $(this).addClass('active');
    })
        
    function chceckActive() {
        removeActive();
        addActive();
    }
     
    function removeActive() {
       var circkle = $('#carousel div div');
       
        circkle.each(function(index, element){
            $(this).removeClass('active');
        }) 
    }
    
    function addActive() {
        var circkle = $('#carousel div div');
        var firstItem = carouselList.find("li:first");
        
        if (firstItem.hasClass('1')) {
            $('#carousel .circkle div:first-of-type').addClass('active');
        } else if (firstItem.hasClass('2')) {
            $('#carousel .circkle div:nth-of-type(2)').addClass('active');
        } else if (firstItem.hasClass('3')) {
            $('#carousel .circkle div:nth-of-type(3)').addClass('active');
        } else if (firstItem.hasClass('4')) {
            $('#carousel .circkle div:nth-of-type(4)').addClass('active');
        } else if (firstItem.hasClass('5')) {
            $('#carousel .circkle div:nth-of-type(5)').addClass('active');
        } 
        
    }
        
    function sortLiElements() {
        var carouselLi = $('#carousel ul li');
                        
        for(var i = 0; i<carouselLi.length; i++) {
            
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            
            if(!(firstItem.hasClass('1'))) {
                lastItem.after(firstItem);
            } 
        }
    }
        
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
        chceckActive();
    }
    
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:0});
        chceckActive();
    }
    
     
        arrowRight.click(function(){
            carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
        })    
    
        arrowLeft.click(function() {
            carouselList.animate({'marginLeft':400}, 500, moveLastSlide);
        })
    
        function changeSlide() {
            carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
        }
    
    
        setInterval(changeSlide, 3000);
})