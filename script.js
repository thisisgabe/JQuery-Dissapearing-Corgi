$(document).ready(function(){
    $("img").click(function() {
        $(this).toggle();
    })

    $(".restore-btn").click(function() {
        $("img").each(function () {
            $(this).show();
        })
    })

});