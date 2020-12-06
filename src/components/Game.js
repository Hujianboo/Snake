/*
 * @Author: Hujianbo
 * @Date: 2020-12-06 23:02:00
 * @LastEditors: Hujianbo
 * @LastEditTime: 2020-12-07 00:29:58
 * @FilePath: /snake/src/components/Game.js
 */
function Game(id,snake,food){
  this.mapDom = document.getElementById(id);
  this.map = [];
  this.snake = snake;
  this.row = 20;
  this.col = 20;
  this.init();
}
Game.prototype.init = function(){
  this.renderMap();
  this.initMapStyle();
  this.renderSnake();
  // this.renderSnake
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
Game.prototype.initMapStyle = function(){
  this.mapDom.className = 'game';
  let rowWidth = document.getElementsByClassName('col')[0].offsetWidth;
  let colWidth = document.getElementsByClassName('col')[0].offsetHeight;
  this.mapDom.style.width = rowWidth * this.row + 'px';
  this.mapDom.style.height = colWidth * this.col + 'px';
}
export default Game;