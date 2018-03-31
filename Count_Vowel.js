
        //count vowel
        function countVowel(str){
        var count = 0;
        for (var i = 0; i < str.length; i++){      
            if(str.charAt(i).match(/[aeiouAEIOU]/)){
                count += 1;
            }
        }
        return count;
    }
    console.log(countVowel("abcdeiouz") + "<br>");
