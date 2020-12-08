/*
 * @Author: Hujianbo
 * @Date: 2020-12-05 19:59:48
 * @LastEditors: Hujianbo
 * @LastEditTime: 2020-12-08 23:14:55
 * @FilePath: /snake/src/main.js
 */
import $ from 'jquery';
import Game from './components/Game';
import Snake from './components/Snake';
import Food from './components/Food';

new Game('game',new Snake(),new Food(Math.floor(Math.random()*20),Math.floor(Math.random()*20)));

