function WordController() {
    var ws = new WordService();

    function getUpper(word){
        let tmp = [];
        tmp = word;
        let ltr = tmp[0].toUpperCase();
        tmp = ltr + word.substr(1);
        //let newWord2 = tmp;
        return tmp;
    }

    this.getWordFromForm = function (e) {
        e.preventDefault();
        var code = [];
        var newArray = [];
        //need to save entered word and capitalize first letter. Save it.
        var oldWordLower = e.target.wordOld.value;
        var newWordlower = e.target.wordNew.value;

        // var tmp = [];
        // tmp = newWord1;
        // var ltr = tmp[0].toUpperCase();
        // tmp = ltr + newWord1.substr(1);

        var newWordUpper = getUpper(newWordlower);
        var oldWordUpper = getUpper(oldWordLower);

        code = document.getElementById('codeText').value.split('\n');


        //need to code for passing in old words
        var book = 'book';
        var Book = 'Book';

        for (var i = 0; i < code.length; i++) {
            //flag to alert if there is a word that matches for either case.
            var exists1 = false;
            var exists1 = false;

            if (code[i].indexOf(oldWordLower) != -1) {
                exists1 = true;
            }
            if (code[i].indexOf(oldWordUpper) != -1) {
                exists2 = true;
            }

            if (exists1 || exists2) {
                //found a line with at least one keyword in it
                //now need to loop until no more exist

                var str = '';
                var flag = 0;

                //grab the line and store as string
                str = code[i].toString();

                //this loops through the line itself and changes any occurences
                do {
                    index = -1;
                    if (str.indexOf(oldWordLower) != -1) {
                        index = str.indexOf(oldWordLower);
                    } else if (str.indexOf(oldWordUpper) != -1) {
                        index = str.indexOf(oldWordUpper);
                    }

                    if (index != -1) {

                        //check to see if the entry equals either value
                        if (str.substr(index, oldWordLower.length) == oldWordLower) {
                            str = str.replace(oldWordLower, newWordlower);
                        }

                        if (str.substr(index, oldWordUpper.length) == oldWordUpper) {
                            //not replacing it
                            str = str.replace(oldWordUpper, newWordUpper);
                        }

                    } else {
                        flag = -1;
                    }

                } while (flag != -1);

                newArray.push(str + '\n');
            }
        }

        //debugger
        //console.log(newArray.join(''));
        document.getElementById("theForm").reset();
        document.getElementById("codeText").value = newArray.join('');

    }

    this.clearForm = function(){
        document.getElementById("codeText").value = '';
    }



}

