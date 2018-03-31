
    //Uppercasing first letter
    function uppercaseLetter(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
console.log(uppercaseLetter("this is a test.") + "<br>");
