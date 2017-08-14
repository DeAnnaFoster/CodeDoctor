function WordController() {
    var ws = new WordService();

    function getUpper(word) {
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

        var newWordUpper = getUpper(newWordlower);
        var oldWordUpper = getUpper(oldWordLower);

        code = document.getElementById('codeText').value.split('\n');

        for (var i = 0; i < code.length; i++) {
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
                        str = str.replace(oldWordUpper, newWordUpper);
                    }

                } else {

                    flag = -1;
                }

            } while (flag != -1);

            newArray.push(str + '\n');
        }

        document.getElementById("theForm").reset();
        document.getElementById("codeText").value = newArray.join('');

    }

    this.changeTags = function (e) {
        e.preventDefault();
        var code = [];
        var newArray = [];

        code = document.getElementById('htmlText').value.split('\n');
        console.log(code);
        //need to code for passing in old words
        var lt = '&lt';
        var gt = '&gt';

        for (var i = 0; i < code.length; i++) {
            var str = '';
            var flag = 0;

            //grab the line and store as string
            str = code[i].toString();

            //this loops through the line itself and changes any occurences
            do {
                index = -1;
                if (str.indexOf('<') != -1) {
                    index = str.indexOf('<');
                } else if (str.indexOf('>') != -1) {
                    index = str.indexOf('>');
                }

                if (index != -1) {
                    //check to see if the entry equals either value
                    if (str.substr(index, 1) == '<') {
                        str = str.replace('<', lt);
                    }

                    if (str.substr(index, 1) == '>') {
                        //not replacing it
                        str = str.replace('>', gt);
                    }

                } else {
                    flag = -1;
                }

            } while (flag != -1);

            newArray.push(str + '\n');
        }

        document.getElementById("theForm").reset();
        document.getElementById("htmlText").value = newArray.join('');
    }


}

this.clearForm = function () {
    document.getElementById("codeText").value = '';
}
this.clearForm2 = function () {
    document.getElementById("htmlText").value = '';
}



