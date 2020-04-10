
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#status").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#exampleModal").on('hide.bs.modal', function(){
        $("#status").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#exampleModal").on('show.bs.modal', function(){
        $("#status").attr('src', url);
    });
});
