$(document).ready(function() {
    /*materialize initializers*/
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();

    $('.dropdown-trigger').click(function(){
       $(this).toggleClass('open');
    });
    $('ul.dropdown-content').click(function(event) {
        console.log("testing wht this click event is functioning");
        event.stopPropagation();
    });
    $('ul.dropdown-content').on('blur', function(){
        event.stopPropagation();
        console.log("what the hell is a blur");
    });
    $('ul#categories').click(function (event) {
        event.stopPropagation();
    })
    $('.module-type').click(function(){
        $('.module-type').removeClass('active');
        moduletype=$(this).attr('id');
        $(this).toggleClass('active');
    });
    $('.continue').click(function(){
        $('.module-type').removeClass('active');
        //$('.modal.fade').removeClass('in');
        $.get("../templates/"+moduletype+".html", function(data){
            $('.container.info').append(data);
        });
    });
    $("#tags input").on({
        focusout : function() {
            var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
            if(txt) $("<span/>", {text:txt.toLowerCase(), insertBefore:this});
            this.value = "";
        },
        keyup : function(ev) {
            // if: comma|enter (delimit more keyCodes with | pipe)
            if(/(188|13)/.test(ev.which)) $(this).focusout();
        }
    });
    $('#tags').on('click', 'span', function() {
        if(confirm("Remove "+ $(this).text() +"?")) $(this).remove();
    });
});