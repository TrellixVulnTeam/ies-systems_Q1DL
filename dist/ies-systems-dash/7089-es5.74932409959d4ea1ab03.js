(self.webpackChunkies_systems_dash=self.webpackChunkies_systems_dash||[]).push([[7089],{7089:function(n,t,e){"use strict";e.r(t),e.d(t,{startFocusVisible:function(){return o}});var s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],o=function(){var n=[],t=!0,e=document,o=function(t){n.forEach(function(n){return n.classList.remove("ion-focused")}),t.forEach(function(n){return n.classList.add("ion-focused")}),n=t},i=function(){t=!1,o([])};e.addEventListener("keydown",function(n){(t=s.includes(n.key))||o([])}),e.addEventListener("focusin",function(n){if(t&&n.composedPath){var e=n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains("ion-focusable")});o(e)}}),e.addEventListener("focusout",function(){e.activeElement===e.body&&o([])}),e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}}}]);