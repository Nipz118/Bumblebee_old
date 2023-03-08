var PagesUserProfile = function () {
    
    var runPulsate = function () {
        $('.pulsate').pulsate({
            color: '#C43C35', 
            reach: 20, 
            speed: 1000, 
            pause: 0, 
            glow: true, 
            repeat: 3, 
            onHover: false 
        });
    };
    return {
        
        init: function () {
            runPulsate();
        }
    };
}();