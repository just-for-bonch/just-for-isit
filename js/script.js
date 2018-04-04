/*
*
**
VueQuiz v1.0.0
github: vikapitoshka/vueQuiz
**
*
*/

var app = new Vue({
  el: '#app',
  data: {
    questions: [
      { question: 'Это Юра. Правда ли, что у Юры есть крутая синяя тачка?', img: 'img/1.jpg', imgAnswer: 'img/answer1.jpg'},
      { question: 'А это Максимка. Ходят легенды, что у него 3 руки. Веришь ли ты в это?', img: 'img/2.jpg', imgAnswer: 'img/answer2.png' },
      { question: 'Также поговаривают, что у него есть третья нога. Согласен(на) ли ты с этим?', imgAnswer: 'img/answer3.png' },
      { question: 'Правда ли, что ИСиТ сотрудничает с почтой России?' },
      { question: 'Это Никитос. Веришь ли ты, что у этого парня есть пирсинг в носу?', img: 'img/5.jpg', imgAnswer: 'img/answer5.png' },
      { question: 'В новостных рассылках ИСиТа есть раздел "стипендии"?', imgAnswer: 'img/answer6.jpg' },
      { question: 'В меню группы факультета ИСиТ есть контакты всех сотрудников деканата?', imgAnswer: 'img/answer7.jpg', imgAnswer: 'img/answer7.jpg' },
      { question: 'Сколько букв в слове IT?', imgAnswer: 'img/answer8.png' },
      { question: 'Правда ли, что в переводе с латинского морж означает "гуляющая с помощью зубов морская лошадь"?', imgAnswer: 'img/answer9.jpg' }
    ],
    answers: [
      { answer: [ 1 ] },
      { answer: [ 1 ] },
      { answer: [ 2 ] },
      { answer: [ 1 ] },
      { answer: [ 1 ] },
      { answer: [ 2 ] },
      { answer: [ 1 ] },
      { answer: [ 2 ] },
      { answer: [ 1 ] }
    ],
    options: [
      { option: [
        'Думаю, да', 
        'Нет'
      ]},
      { option: [
        'Верю', 
        'Не верю'
      ]},
      { option: [
        'Согласен', 
        'Не согласен'
      ]},
      { option: [
        'Конечно правда',
        'Не может такого быть!'
      ]},
      { option: [
        'Верю', 
        'Неверю'
      ]},
      { option: [
        'Верно', 
        'Неверно'
      ]},
      { option: [
        'Верно', 
        'Неверно'
      ]},
      { option: [
        '2', 
        '4'
      ]},
      { option: [
        'Да, это так!', 
        'Ты недооцениваешь моржей'
      ]},
    ],
    id: 0,
    checkedValue: [],
    correct: [],
    incorrect: [],
    show: 'none',
    button: 'Ответить',
    isAnswer: false,
    isCorrect: null
  },
  methods: {
    start: function() {   
      this.id = 0;
      this.checkedValue = [];
      this.correct = [];
      this.incorrect = []; 
      this.show = 'test';  
      this.button = 'Ответить';
      this.isAnswer = 0;  
    },
    toAnswer: function() {
      this.button = 'Следующий';
      this.isAnswer = true;
      let countCorrect = 0;  // 3 2 1
      for (let i = 0; i < this.checkedValue.length; i++) { // 0 1 2
        for (let k = 0; k < this.answers[this.id].answer.length; k++ ){ // 0 1 
          if (this.checkedValue[i] === (this.answers[this.id].answer[k] - 1)) {
            countCorrect++;
          } 
        }
      }
      if ((countCorrect === this.answers[this.id].answer.length) && (this.checkedValue.length === this.answers[this.id].answer.length)) {
        this.isCorrect = 'Правильно';
        this.correct.push(this.id);
      } else {
        this.isCorrect = 'Неправильно';
        this.incorrect.push(this.id);
      }      
      if(this.id === (this.questions.length - 1)) {
        this.button = 'Результаты';
      } 
    },
    next: function() {
      this.isAnswer = false;
      this.button = 'Ответить';

      if (this.id === this.questions.length - 1) {
        this.show = 'result';
      }
      this.checkedValue = [];
      if (this.id < this.questions.length) {
        setTimeout(function() {app.id++}, 100);
      }      
    }
  }
});

window.onload = function() {
  const load = document.querySelector('.preload');
  load.style.display = 'none';
  app.show = 'start'; // плавное появление
}