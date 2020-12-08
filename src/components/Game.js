/*
 * @Author: Hujianbo
 * @Date: 2020-12-06 23:02:00
 * @LastEditors: Hujianbo
 * @LastEditTime: 2020-12-08 23:25:07
 * @FilePath: /snake/src/components/Game.js
 */
function Game(id,snake,food){
  this.mapDom = document.getElementById(id);
  this.map = [];
  this.snake = snake;
  this.food = food;
  this.row = 20;
  this.col = 20;
  this.init();
}
Game.prototype.init = function(){
  this.renderMap();
  this.initMapStyle();
  this.bindEvent();
  this.start();
}
Game.prototype.start = function(){
  let self = this;
  self.timer = setInterval(function(){
    self.snake.move();
    self.clean();
    self.renderSnake();
    self.renderFood();
    setTimeout(() => {
      if(self.food.row === self.snake[0].row && self.food.col === self.snake[0].col){
        self.snake.eat();
      }
      if(self.checkBorder() || self.snake.kill()){
        alert('failed')
      };
    },0)
  },500)
}
Game.prototype.renderMap = function(){
  for(let i = 0; i < this.row; i++){
    let arr = document.createElement('div');
    arr.className = 'row';
    let eleArr = []
    for(let j = 0; j < this.col; j++){
      let el = document.createElement('div');
      el.className = 'col'
      arr.appendChild(el);
      eleArr.push(el);
    }
    this.map.push(eleArr);
    this.mapDom.appendChild(arr);
  }
}
Game.prototype.renderSnake = function(){
  let len = this.snake.length; 
  for(let i = 0; i < len;i++){
    this.map[this.snake[i].row][this.snake[i].col].style.background =  i === 0 ? 'red' : 'black';
  }
}
Game.prototype.renderFood = function(){
  this.map[this.food.row][this.food.col].style.background = 'purple';
}
Game.prototype.initMapStyle = function(){
  this.mapDom.className = 'game';
  let rowWidth = document.getElementsByClassName('col')[0].offsetWidth;
  let colWidth = document.getElementsByClassName('col')[0].offsetHeight;
  this.mapDom.style.width = rowWidth * this.row + 'px';
  this.mapDom.style.height = colWidth * this.col + 'px';
}
Game.prototype.bindEvent = function(){
  let self = this
  window.onkeydown = function(e) {
    let kc = e.keyCode;
    if(kc === 37 || kc === 38 || kc === 39 || kc === 40){
      self.snake.changeDirection(kc)
    }
  };
}
Game.prototype.clean = function(){
  for(let i = 0; i < this.row;i++){
    for(let j = 0; j < this.col;j++){
      this.map[i][j].style.background = '';
    }
  }
}
Game.prototype.checkBorder = function(){
  if(this.snake[0].row <= 0 || this.snake[0].row >= this.row-1
    || this.snake[0].col <=0 || this.snake[0].col >= this.col-1){
      return true
  }else{
    return false
  }
}
export default Game;