/*
 * @Author: Hujianbo
 * @Date: 2020-12-07 00:10:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2020-12-08 23:11:33
 * @FilePath: /snake/src/components/Snake.js
 */

/**
 * @description: 
 * @param {*}
 * @return {*}
 */
const directionMap = {
  '38': 'up',
  '40': 'down',
  '37': 'left',
  '39': 'right'
}
function Snake(){
  this.length = 5;
  this.tail = null;
  this[0] = {row:9,col:8};
  this[1] = {row:9,col:9};
  this[2] = {row:9,col:10};
  this[3] = {row:9,col:11};
  this[4] = {row:9,col:12};
  this.direction = 'left';
};
Snake.prototype.pop = Array.prototype.pop;
Snake.prototype.push = Array.prototype.push;
Snake.prototype.unshift = Array.prototype.unshift;
Snake.prototype.kill = function () {
  for(let i = 1; i < this.length;i++){
    if(this[i].row === this[0].row && this[i].col === this[0].col){
      return true;
    }
  };
  return false;
};
Snake.prototype.changeDirection  = function (direction) {
  if(Math.abs(direction - this.direction) !== 2){
    this.direction = direction;
  }
}
Snake.prototype.move = function () {
  this.tail = this.pop();
  let dir = directionMap[this.direction.toString()];
  if(dir === 'left'){
    this.unshift({
      row: this[0].row,
      col: this[0].col - 1
    })
  }else if(dir === 'right'){
    this.unshift({
      row: this[0].row,
      col: this[0].col + 1
    })
  }else if(dir === 'up'){
    this.unshift({
      row: this[0].row - 1,
      col: this[0].col
    })
  }else {
    this.unshift({
      row: this[0].row + 1,
      col: this[0].col
    })
  }
}
Snake.prototype.eat = function () {
  this.push(this.tail);
  this.length = this.length + 1;
}
export default Snake;