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

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
        }
    }
    
    averageDifficulty(){
        if (!this.questions.length){
            return 0
        }
        return this.questions.reduce((sum, question) => sum + question.difficulty, 0) / this.questions.length
    }
}