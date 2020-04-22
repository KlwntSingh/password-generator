let capital_alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lower_alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']

function arr_rotation(ch_arr, rotation_number){
    arr_len = ch_arr.length
    return ch_arr[rotation_number % arr_len]
}

function get_arr_based_on_char(ch){
    if(capital_alphabets.includes(ch))
        return capital_alphabets
    else if(lower_alphabets.includes(ch))
        return lower_alphabets
    else if(numerics.includes(ch))
        return numerics
    else
        return special_characters
}

function encryption_arr_rotation(password, key){
    key = key.toLowerCase()
    let generated_password = ''
    for(let index = 0; index < password.length; index++){
        ch = password[index]
        pass_ch_ascii_code = password.charCodeAt(index)
        key_ch_ascii_code = key.charCodeAt(index%key.length)
        generated_password += arr_rotation(get_arr_based_on_char(ch), pass_ch_ascii_code + key_ch_ascii_code)
    }
    return generated_password
}