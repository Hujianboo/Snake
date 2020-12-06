/*
 * @Author: Hujianbo
 * @Date: 2020-12-07 00:10:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2020-12-07 00:31:21
 * @FilePath: /snake/src/components/Snake.js
 */

/**
 * @description: 
 * @param {*}
 * @return {*}
 */
function Snake(){
  this.length = 3;
  this[0] = {row:9,col:8};
  this[1] = {row:9,col:9};
  this[2] = {row:9,col:10};
}
export default Snake;