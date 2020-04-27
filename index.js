function copy_to_clipboard(elem){
    copyElem = $("#generatedpasswordcopy")
    copyElem.val(elem.val())
    copyElem.show()
    copyElem.select()
    document.execCommand('copy')
    copyElem.hide()
}

function password_generator(domain, password){

}

function generate_password_button_handler(){
    let domain = $('#domain').val() //todo: sanitize domain to only have second level domain name i.e amazon, google
    let password = $('#password').val()
    generated_password = encryption_arr_rotation(password, domain)
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
        event.preventDefault();
        generate_password_button_handler()
    });

    $("#generatedpasswordcopydiv").click(function(){
        console.log($("#generatedpassword").val())
        copy_to_clipboard($("#generatedpassword"))
    });

});