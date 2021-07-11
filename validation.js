

// regex patterns
const patterns = {
        telephone: /^[0-9]{11}$/,
        username: /^[a-z]{5,12}$/i,
        password: /^[a-z0-9@-]{8,20}$/i,
        slug: /^[a-z0-9-]{8,20}$/,
        email: /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .uk )
};


function validate(field){
    if(patterns[field.name].test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}



    