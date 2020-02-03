function copy_to_clipboard(){
    document.execCommand('copy')
}
function generate_password(){
    var domain = document.getElementById('domain').value
    var password = document.getElementById('password').value
    generated_password = domain + password
    document.getElementById('generatedpassword').innerHTML = generated_password
}
$( document ).ready(function() {
    $("#gen_button").click(function(){
        generate_password()
    });
    $("#generatedpassword").click(function(){
        copy_to_clipboard()
    });
});