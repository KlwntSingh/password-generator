function copy_to_clipboard(elem){
    copyElem = $("#generatedpasswordcopy")
    copyElem.val(elem.val())
    copyElem.show()
    copyElem.select()
    document.execCommand('copy')
    copyElem.hide()
}
function generate_password(){
    var domain = $('#domain').val()
    var password = $('#password').val()
    generated_password = domain + password
    console.log(generated_password)
    $('#generatedpassword').val(generated_password)
    $('#generatedpassword').show()
}

function initial_page_setup(){
    $('#generatedpassword').hide()
    $('#generatedpasswordcopy').hide()
}

$( document ).ready(function() {
    initial_page_setup()
    $("#gen_button").click(function(event){
        generate_password()
        event.preventDefault();
    });
    $("#generatedpasswordcopydiv").click(function(){
        console.log($("#generatedpassword").val())
        copy_to_clipboard($("#generatedpassword"))
    });
});