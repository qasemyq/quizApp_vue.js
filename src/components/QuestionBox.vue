<template>
<div class="question-box-conteiner">
    <b-jumbotron>
      <template #lead>
        {{currentQuestion.question}}
      </template>
 
      <hr class="my-4">
        <!-- answers inja az computed miyad yani functon data hast -->
        <b-list-group>
        <b-list-group-item
        v-for="(answer,index) in answers"
         :key="index"
         @click="selectAnswer(index)"
         :class="answerClass(index)"
        >{{answer}}
        </b-list-group-item>
</b-list-group>

      <b-button 
      variant="primary"
      @click="submitAnswer"
      :disabled="selectedIndex === null || answered"
      >Submit</b-button>
      <b-button @click="next" variant="success" href="#">Next</b-button>
    </b-jumbotron>
  </div>
</template>


<script>
// lodash ro ke ba npm i lodash nasb kardam inaja import mikonam ke az tush shuffel ro mikham ke karesh ine ke array ro shuffel mikone 
import _ from 'lodash'
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function 
  },
  data(){
    return {
      selectedIndex: null,
      correctIndex: null,
      answered: false,
      shuffelAnswers: []
    }
  },
  computed: {
    answers(){ // mikham ba in hame jvabhaye galt va javabe dorost ro begiram 
      let answers = [...this.currentQuestion.incorrect_answers] 
       answers.push(this.currentQuestion.correct_answer)
       return answers 
    }
  },
  watch:{
    currentQuestion: {
      immediate:true,
      handler(){
        this.selectedIndex = null 
        this.answered = false
        this.shuffleAnswers()
      }
    }
    },
   methods:{
    selectAnswer(index){
      this.selectedIndex = index
    },
    submitAnswer(){
      let isCorrect = false
      if(this.selectedIndex === this.correctIndex){
        isCorrect = true
      }
      this.answered = true
      this.increment(isCorrect)
    },
    shuffleAnswers(){
      // javabhaie nadorost va javabe dorost ro hamsho mirizam tuye watchAnswers
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      // _.shuffle az lodash miyad 
      this.shuffelAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffelAnswers.indexOf(this.currentQuestion.correct_answer)
},
answerClass(index){
  let answerClass = ''
  if (!this.answered && this.selectedIndex === index){
    answerClass = 'selected'
  } else if(this.answered && this.correctIndex === index){
    answerClass = 'correct'
  } else if(this.answered && this.selectedIndex === index && this.correctIndex !== index){
    answerClass = 'incorrect'
  }
  return answerClass
}
}
} 
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #EEE;
  cursor: pointer;
}
.btn {
  margin: 0 5px;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: red;
}
</style>