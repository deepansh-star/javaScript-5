let urlPattern =  /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function isValidURL (inp) {
    return urlPattern.test(inp);
}
let url = "https://pwskills.com"
if (isValidURL(url)) {
    console.log(`${url} Is A Valid URL`) ;
} else {
    console.log(`${url} Is Not A Valid URL`) ;  
}


