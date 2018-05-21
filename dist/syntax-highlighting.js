// ==UserScript==
// @name         steemit - Syntax-Highlighting
// @icon         https://steemit.com/images/favicons/apple-touch-icon-144x144.png
// @namespace    https://github.com/drookyn
// @match        https://steemit.com/*
// @version      1.0
// @description  Tries to detect language in code blocks and does some syntax highlighting
// @author       Drookyn
// @run-at       document-start
// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js
// @resource     hljsCSS https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css
// @downloadURL  https://raw.githubusercontent.com/drookyn/steemit-customization/master/dist/syntax-highlighting.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
'use strict';/* eslint-disable no-undef */var newCSS=GM_getResourceText('hljsCSS');GM_addStyle(newCSS);/* eslint-enable */(function(hljs){function configureHljs(){hljs.configure({tabReplace:'  '})}function createHighlighting(){var $codes=document.querySelectorAll('pre code');if($codes&&$codes.length){$codes.forEach(function(element){hljs.highlightBlock(element)})}}function onDomReady(){configureHljs();createHighlighting();var mutationObserver=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.target.nodeName==='TITLE'){createHighlighting()}})});mutationObserver.observe(document.documentElement,{childList:true,subtree:true,attributeOldValue:true,characterDataOldValue:true})}document.addEventListener('DOMContentLoaded',onDomReady)})(window.hljs);