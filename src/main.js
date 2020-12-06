/*
 * @Author: Hujianbo
 * @Date: 2020-12-05 19:59:48
 * @LastEditors: Hujianbo
 * @LastEditTime: 2020-12-07 00:10:48
 * @FilePath: /snake/src/main.js
 */
import $ from 'jquery';
import Game from './components/Game';
import Snake from './components/Snake';

function Food(){

}
new Game('game',new Snake());
// new Game('app',new Snake(), new Food());

