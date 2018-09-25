import _ from 'lodash';
import $ from 'jquery';
import './style.scss';




$(document).ready(function(){
  $('#btn').on('click',function(){
    $('.box').addClass('bigger')
  })
})

let message = document.querySelector('#btn2')
message.addEventListener('click',()=>{
  alert('信息')
})
