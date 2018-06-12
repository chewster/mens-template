$(document).ready(function() {
    /*materialize initializers*/
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();

    $('.dropdown-trigger').click(function(){
       $(this).toggleClass('open');
    });
    $('.dropdown-content').on('click', function(event) {
        event.stopPropagation();
    });
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