// ==UserScript==
// @name         GC_Hotline_Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Link to people.epfl.ch on user name
// @author       nicrausaz
// @match        https://gchotline.epfl.ch/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js
// ==/UserScript==

$(document).ready(function () {
    let infos = ($('.tooltip-content p span')[0].innerText).split(' ');
    let url = 'https://people.epfl.ch/' + infos[0];
    let name = $('.article-header span')[0].innerText;

    $('.article-header span').each( function () {
        console.log(this);
        this.innerHTML = `<a href=${url}>${name}</a>`;
    });
});