let input  =  "PW SKILLS" ;
function revStr(inp) {
    return inp.split(" ").reverse().join(" ") ;
}
function reverseDelay (inp) {
    setTimeout(()=> {
        let reverse = revStr(inp) ;
        console.log("Reversed String: " + reverse);
    }, 2000) ;
}
reverseDelay(input) ;









