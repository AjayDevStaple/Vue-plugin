jQuery(document).ready(function($){
    $(document).on("click", ".cstm-url", function() {
        $('.cstm-url').removeClass('active');
        $(this).addClass('active');
    });
})