var currentQuiz;

$(function(){

    $(document).on('click', '.get-random', function (e) {
        e.preventDefault();
        $.get('/random-word', {}, function (word) {
            $('.word-display').html('<div class="word">' + word.word + '</div>');
        });
    });

    $(document).on('click', '.get-translation', function(e) {
        e.preventDefault();
        var phrase = $('.translate-phrase').val();
        var lang = $('.translate-lang').val();

        $.get('/get-translation', {text: phrase, to: lang}, function(phrase) {
            $('.translate-display').html(phrase.translation);
        });

    });

    $(document).on('click', '.next-word', function (e) {
        e.preventDefault();
        var display = $('.word-display');
        $.get('/findQuizId', {id: currentQuiz}, function (quiz) {
            console.log(currentQuiz);
            $(display).html('<div class="word">' + quiz.wordArray[quiz.index].word + '</div>');
            $('.next-word').addClass('disabled');
            $('.answer-submit').removeClass('disabled');
        });
    });

    $(document).on('click', '.answer-submit', function (e) {
        e.preventDefault();
        var answerSel = $('.answer')
        var answer = answerSel.val();
        var display = $('.word-display');

        $('.next-word').removeClass('disabled');
        $('.answer-submit').addClass('disabled');


        $.get('/findQuizId', {id: currentQuiz}, function (quiz) {
            console.log(quiz);

            if(answer !== ''){
                if(answer.toLowerCase() === quiz.wordArray[quiz.index].translation.toLowerCase()){
                    answerSel.val('');
                    display.html('<div class="word">correct</div>');
                    
                    $.get('/updateIndex', {id: currentQuiz, index: (quiz.index+1)}, function (quiz){
                        console.log('updated: ' + quiz);
                    });
                }else{
                    answerSel.val('');
                    display.html('<div class="word">fail<br>' + quiz.wordArray.translation + '</div>');
                    $.get('/updateIndex', {id: currentQuiz, index: (quiz.index+1)}, function (quiz){
                        console.log('updated: ' + quiz);
                    });

                }
            }

        });

    });

    $(document).on('click', '.new-quiz', function (e) {
        e.preventDefault();
        var lang = $('.quiz-lang').val();

        console.log(lang);
        if(lang === null){
            alert('please select a language');
            return false;
        }

        $.get('/newQuiz', {to: lang}, function (quizId) {
            console.log(quizId);
            currentQuiz = quizId
        })

        $('.word-display').html('<div class="word">Click Next to Begin</div>');
        if(!$('.answer-submit').hasClass('disabled')){
            $('.answer-submit').addClass('disabled')
        }
        $('.next-word').removeClass('disabled');
    })

});

