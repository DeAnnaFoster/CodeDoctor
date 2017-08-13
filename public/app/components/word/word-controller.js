function WordController() {
    var ws = new WordService();
    var code = [];

    this.getWordFromForm = function(e) {
        e.preventDefault();
        var newWord = e.target.word.value;

        code = document.getElementById('codeText').value.split('\n');

        console.log('Let\'s try this:');
        //console.log(code[3]);

        for(var i = 0; i < code.length; i++){
            console.log(code[i]);
        }

        console.log(newWord);

        document.getElementById("theForm").reset();
    }

}