class Quiz {
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion(){
        this.currentQuestionIndex++
    }

    shuffleQuestions(){
        shuffleArray(this.questions)
    }

    checkAnswer(answer){
        if (answer === this.getQuestion().answer){
            this.correctAnswers++
        }
    }

    hasEnded(){
        return this.currentQuestionIndex >= this.questions.length;
    }
}