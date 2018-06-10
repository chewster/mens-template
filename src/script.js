$(document).ready(function() {
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
});