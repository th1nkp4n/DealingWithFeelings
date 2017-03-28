# Dealing With Feelings

Dealing With Feelings is a memory game for children to raise awareness for mental health. It is a modified version of Nick Saloum's "Memory Game." The objective of Dealing With Feelings is to flip and match all the turned-down cards in as few moves as possible.
The game itself built entirely with JavaScript, so you can just drop it into your site / app into any element you like. The making of this game was inspired by [this pen](http://codepen.io/natewiley/pen/HBrbL), but we went about it using plain JS, and making 3 different levels. Because it's all front end tech in action, it should work across all devices, tablets, etc.

## Demo

A working demo can be seen here - [http://callmenick.com/memory/](http://callmenick.com/memory/)

## Usage

Usage is easy. Just markup the div you want Memory to exist in, and create a new instance of Memory.

```language-markup
<div id=""my-memory-game"></div>

<script src="path/to/memory.js"></script>
<script>
  var myMem = new Memory({
    wrapperID : "my-memory-game",
  });
</script>
```

## Options

Memory ships with 4 options. They are:

1. `wrapperID` - the ID of the div you want to attach Memory to
2. `cards` - the array of cards to use during Memory. More on this below.
3. `onGameStart` - a callback function that runs once the game starts, i.e. once a user clicks on a level.
4. `onGameEnd` - a callback function that runs once the game ends. More on this below.

## Defaults

The default options for Memory are as follows:

```language-javascript
wrapperID : "my-memory-game",
cards : [
  {
	id : 1,
	img: "img/default/embarrassed.png"
  },
  {
	id : 1,
	img: "img/default/embarrassed-quote.png"
  },
  {
	id : 2,
	img: "img/default/fearful.png"
  },
  {
	id : 2,
	img: "img/default/fearful-quote.png"
  },          
  {
	id : 3,
	img: "img/default/accepted.png"
  },
  {
	id : 3,
	img: "img/default/accepted-quote.png"
  },
  {
	id : 4,
	img: "img/default/comforted.png"
  },
  {
	id : 4,
	img: "img/default/comforted-quote.png"
  },
  {
	id : 5,
	img: "img/default/Blue_Card1.png"
  },
  {
	id : 5,
	img: "img/default/Blue_X1.png"
  },
  {
	id : 6,
	img: "img/default/Blue_Card2.png"
  },
  {
	id : 6,
	img: "img/default/Blue_Check2.png"
  },
  {
	id : 7,
	img: "img/default/Purple_Card1.png"
  },
  {
	id : 7,
	img: "img/default/Purple_X1.png"
  },
  {
	id : 80,
	img: "img/default/Purple_Card2.png"
  },
  {
	id : 8,
	img: "img/default/Purple_Check2.png"
  },
  {
	id : 90,
	img: "img/default/Purple_Card3.png"
  },
  {
	id : 8,
	img: "img/default/Purple_Check3.png"
  },
  {
	id : 100,
	img: "img/default/Red_Card1.png"
  },
  {
	id : 10,
	img: "img/default/Red_X1.png"
  },
  {
	id : 110,
	img: "img/default/Red_Card2.png"
  },
  {
	id : 10,
	img: "img/default/Red_X2.png"
  },
  {
	id : 12,
	img: "img/default/Red_Card3.png"
  },
  {
	id : 12,
	img: "img/default/Red_Check3.png"
  },
  {
	id : 130,
	img: "img/default/Red_Card4.png"
  },
  {
	id : 10,
	img: "img/default/Red_X4.png"
  },
  {
	id : 14,
	img: "img/default/R1.png"
  },
  {
	id : 14,
	img: "img/default/RA1.png"
  },
  {
	id : 15,
	img: "img/default/R2.png"
  },
  {
	id : 15,
	img: "img/default/RA2.png"
  },
  {
	id : 16,
	img: "img/default/R3.png"
  },
  {
	id : 16,
	img: "img/default/RA3.png"
  },
  {
	id : 17,
	img: "img/default/R4.png"
  },
  {
	id : 17,
	img: "img/default/RA4.png"
  },
  {
	id : 18,
	img: "img/default/R5.png"
  },
  {
	id : 18,
	img: "img/default/RA5.png"
  },
  {
	id : 19,
	img: "img/default/R6.png"
  },
  {
	id : 19,
	img: "img/default/RA6.png"
  },
  {
	id : 20,
	img: "img/default/P1.png"
  },
  {
	id : 20,
	img: "img/default/PA1.png"
  },
  {
	id : 21,
	img: "img/default/P2.png"
  },
  {
	id : 21,
	img: "img/default/PA2.png"
  },
  {
	id : 22,
	img: "img/default/P3.png"
  },
  {
	id : 22,
	img: "img/default/PA3.png"
  },
  {
	id : 23,
	img: "img/default/P4.png"
  },
  {
	id : 23,
	img: "img/default/PA4.png"
  },
  {
	id : 24,
	img: "img/default/P5.png"
  },
  {
	id : 24,
	img: "img/default/PA5.png"
  },
  {
	id : 25,
	img: "img/default/B1.png"
  },
  {
	id : 25,
	img: "img/default/BA1.png"
  },
  {
	id : 26,
	img: "img/default/B2.png"
  },
  {
	id : 26,
	img: "img/default/BA2.png"
  },
  {
	id : 27,
	img: "img/default/B3.png"
  },
  {
	id : 27,
	img: "img/default/BA3.png"
  },
  {
	id : 28,
	img: "img/default/B4.png"
  },
  {
	id : 28,
	img: "img/default/BA4.png"
  },
  {
	id : 29,
	img: "img/default/B5.png"
  },
  {
	id : 29,
	img: "img/default/BA5.png"
  }
],
onGameStart : function() { return false; },
onGameEnd : function() { return false; }
```

## The Cards

Right now, Memory's biggest game size is a 8 x 4 grid, meaning 32 cards. Therefore, users must specify 16 cards with unique id's and image paths in order for Memory to run at all three levels. If you don't specify any cards in the new instance of Memory, the default set will be used.

## onGameEnd Callback

The `onGameEnd` callback gets triggered when the game has ended. If you don't specify a callback (i.e. the callback defaults to returns `false`), then when the game has ended, a default operation occurs. The board is cleared, and the user is presented with a "win" screen showing how many moves they completed the game in, and a button to start over.

## Public Functions

There is one "public" function available for you to use, and that is `resetGame`. It basically clears the board and resets all variables, taking you back to the start screen. You can use it like this:

```language-javascript
var myMem = new Memory;
myMem.resetGame();
```

## Sass

Sass was used quite a lot, as well as some related libraries like Auto Prefixer and Sassy Math. I also use Compass. In order for the Sass files to run as is, take a look at the compass config.rb file and make sure you have everything set up! Otherwise, plain old CSS for you.

## Support

Memory has been tested in the following browsers:

* Chrome - 37
* Firefox - 32
* Safari - 7

Anyone who conducts tests and gets positive or negative results, please let me know!

## External Libs

I used the `classList` property a bit throughout the script, and you can read more documentation on that [here](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList). Because of poor IE support though (10 and up), I made sure to include the `classList` polyfill, which you can find [here](https://github.com/eligrey/classList.js/).

## License

Licensed under the MIT license - http://www.opensource.org/licenses/mit-license.php

## THANK YOU

Thanks again to Nick Saloum for his open source code. We really appreciate this help and would like to give credit to his algorithm.