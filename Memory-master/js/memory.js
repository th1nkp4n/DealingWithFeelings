/**
 * Memory Game
 *
 * This is the wrapper function for my memory game! It contains all of the core
 * functionality for the game to run.
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Call Me Nick
 * http://callmenick.com
 */
 
 /**
  * Team Dealing with Feelings would like to thank Nick Salloum for his open source
  * code, which we modified when creating our game.
  *
  * To provide credit to his work, we have left his information above.
  */

;(function( window ) {

  'use strict';

  /**
   * Extend object function
   *
   */

  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Shuffle array function
   *
   */

  function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  /**
   * Memory constructor
   *
   */

  function Memory( options ) {
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }

  /**
   * Memory options
   *
   * Memory default options. Available options are:
   *
   * wrapperID: the element in which Memory gets built
   * cards: the array of cards
   * onGameStart: callback for when game starts
   * onGameEnd: callback for when game ends
   */

  Memory.prototype.options = {
    wrapperID : "container",
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
            id : 8,
            img: "img/default/Purple_Card2.png"
          },
		  {
            id : 8,
            img: "img/default/Purple_Check2.png"
          },
		  {
            id : 9,
            img: "img/default/Purple_Card3.png"
          },
		  {
            id : 9,
            img: "img/default/Purple_Check3.png"
          },
		  {
            id : 10,
            img: "img/default/Red_Card1.png"
          },
		  {
            id : 10,
            img: "img/default/Red_X1.png"
          },
		  {
            id : 11,
            img: "img/default/Red_Card2.png"
          },
		  {
            id : 11,
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
            id : 13,
            img: "img/default/Red_Card4.png"
          },
		  {
            id : 13,
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
  }

  /**
   * Memory _init - initialise Memory
   *
   * Creates all the game content areas, adds the id's and classes, and gets
   * ready for game setup.
   */

  Memory.prototype._init = function() {
    this.game = document.createElement("div");
    this.game.id = "mg";
    this.game.className = "mg";
    document.getElementById(this.options.wrapperID).appendChild(this.game);

    this.gameMeta = document.createElement("div");
    this.gameMeta.className = "mg__meta clearfix";

    this.gameStartScreen = document.createElement("div");
    this.gameStartScreen.id = "mg__start-screen";
    this.gameStartScreen.className = "mg__start-screen";

    this.gameWrapper = document.createElement("div");
    this.gameWrapper.id = "mg__wrapper";
    this.gameWrapper.className = "mg__wrapper";
    this.gameContents = document.createElement("div");
    this.gameContents.id = "mg__contents";
    this.gameWrapper.appendChild(this.gameContents);

    this.gameMessages = document.createElement("div");
    this.gameMessages.id = "mg__onend";
    this.gameMessages.className = "mg__onend";

    this._setupGame();
  };

  /**
   * Memory _setupGame - Sets up the game
   *
   * We're caching all game related variables, and by default, displaying the
   * meta info bar and start screen HTML.
   *
   * A NOTE ABOUT GAME STATES:
   *
   * There are 4 game states in total, governed by the variable this.gameState.
   * Each game state allows for a certain series of functions to be performed.
   * The gameStates are as follows:
   *
   * 1 : default, allows user to choose level
   * 2 : set when user chooses level, and game is in play
   * 3 : game is finished
   */

  Memory.prototype._setupGame = function() {
    var self = this;
    this.gameState = 1;
    //this.cards = shuffle(this.options.cards);
    this.cards = this.options.cards;
	this.card1 = "";
    this.card2 = "";
    this.card1id = "";
    this.card2id = "";
    this.card1flipped = false;
    this.card2flipped = false;
    this.flippedTiles = 0;
    this.chosenLevel = "";
    this.numMoves = 0;

    this.gameMetaHTML = '<div class="mg__meta--left">\
      <span class="mg__meta--level">Level: \
      <span id="mg__meta--level">' + this.chosenLevel + '</span>\
      </span>\
      <span class="mg__meta--moves">Moves: \
      <span id="mg__meta--moves">' + this.numMoves + '</span>\
      </span>\
      </div>\
      <div class="mg__meta--right">\
      <button id="mg__button--restart" class="mg__button">Start Over</button>\
      </div>';
    this.gameMeta.innerHTML = this.gameMetaHTML;
    this.game.appendChild(this.gameMeta);

    this.gameStartScreenHTML = '<h2 class="mg__start-screen--heading">Welcome to <strong>Dealing with Feelings</strong>!</h2>\
      <h4 id = "paraSpace">A <strong>memory game</strong> for children to raise awareness for mental health</h4>\
	  <div><img src="img/default/dealing_with_feelings.jpg" align = "middle"></div>\
	  <p class="mg__start-screen--text"><div id = "paraSpace">Mental illnesses are extremely prevalent in our society: 1 in 5 adults in the United States experience mental illness during a given year. Interacting with a friend who suffers from a mental illness can be difficult, especially for a young person. </div><div id = "paraSpace">Our team created this memory game to educate children on the appropriate ways in which to interact with a friend who is suffering from a mental illness, thus giving them confidence for future interactions. Our game is centered around three illnesses: eating disorders, depression, and anxiety. In the second and third levels of the game, the memory cards are color coded by illness. This visual effect increases a child\'s ability to succeed while playing the game, and it brings attention to the differences that exist between certain mental illnesses. Cards that are specific to an eating disorder are purple, cards specific to depression are red, and cards specific to anxiety are blue.</div> <div id = "paraSpace">We hope you enjoy our game and see its value for educating the youngest children on a topic that is too easy to shy away from.</div></p>\
      <div id = "box"><h3 class="mg__start-screen--sub-heading" id = "title">Let\'s Play!</h3>\
      <ul class="mg__start-screen--level-select">\
      <li><span data-level="1" id = "bigText">Level 1 - Easy (4 x 2)</span></li>\
	  <li>Match pictures of emotions with comments made by friends.<li>\
      <li><span data-level="2" id = "bigText">Level 2 - Medium (6 x 3)</span></li>\
	  <li>Match hurtful comments with the "X" and nice comments with the check mark.<li>\
      <li><span data-level="3" id = "bigText">Level 3 - Hard (8 x 4)</span></li>\
	  <li>Match statements of mental illness victims with positive, supportive quotes made by friends.<li>\
      </ul></div>';
    this.gameStartScreen.innerHTML = this.gameStartScreenHTML;
    this.game.appendChild(this.gameStartScreen);

    document.getElementById("mg__button--restart").addEventListener( "click", function(e) {
      self.resetGame();
    });

    this._startScreenEvents();
  }

  /**
   * Memory _startScreenEvents
   *
   * We're now listening for events on the start screen. That is, we're waiting
   * for when a user chooses a level.
   */

  Memory.prototype._startScreenEvents = function() {
    var levelsNodes = this.gameStartScreen.querySelectorAll("ul.mg__start-screen--level-select span");
    for ( var i = 0, len = levelsNodes.length; i < len; i++ ) {
      var levelNode = levelsNodes[i];
      this._startScreenEventsHandler(levelNode);
    }
  };

  /**
   * Memoery _startScreenEventsHandler
   *
   * A helper function to handle the click of the level inside the events
   * function.
   */

  Memory.prototype._startScreenEventsHandler = function(levelNode) {
    var self = this;
    levelNode.addEventListener( "click", function(e) {
      if (self.gameState === 1) {
        self._setupGameWrapper(this);
      }
    });
  }

  /**
   * Memory _setupGameWrapper
   *
   * This function sets up the game wrapper, which is where the actual memory
   * tiles will reside and where all the game play happens.
   */

  Memory.prototype._setupGameWrapper = function(levelNode) {
    this.level = levelNode.getAttribute("data-level");
    this.gameStartScreen.parentNode.removeChild(this.gameStartScreen);
    this.gameContents.className = "mg__contents mg__level-"+this.level;
    this.game.appendChild(this.gameWrapper);

    this.chosenLevel = this.level;
    document.getElementById("mg__meta--level").innerHTML = this.chosenLevel;

    this._renderTiles();
  };


  /**
   * Memory _renderTiles
   *
   * This renders the actual tiles with content. A few thing happen here:
   *
   * 1. Calculate grid X and Y based on user level selection
   * 2. Calculate num tiles
   * 3. Create new cards array based on level, and draw cards from original array
   * 4. Shuffle the new cards array
   * 5. Cards get distributed into tiles
   * 6. gamePlay function gets triggered, taking care of all the game play action.
   */

  Memory.prototype._renderTiles = function() {
    this.gridX = this.level * 2 + 2;
    this.gridY = this.gridX / 2;
    this.numTiles = this.gridX * this.gridY;
    this.halfNumTiles = this.numTiles/2;
    this.newCards = [];
	var iterator;
	if (this.level == 1) {
		iterator = 0;
	} else if (this.level == 2) {
		iterator = 8;
	} else {
		iterator = 26;
	}
    for ( i = iterator; i < this.numTiles+iterator; i=i+2 ) {
      this.newCards.push(this.cards[i], this.cards[i+1]);
    }
    this.newCards = shuffle(this.newCards);
    this.tilesHTML = '';
    for ( var i = 0; i < this.numTiles; i++  ) {
      var n = i + 1;
      this.tilesHTML += '<div class="mg__tile mg__tile-' + n + '">\
        <div class="mg__tile--inner" data-id="' + this.newCards[i]["id"] + '">\
        <span class="mg__tile--outside"></span>\
        <span class="mg__tile--inside"><img src="' + this.newCards[i]["img"] + '"></span>\
        </div>\
        </div>';
    }
    this.gameContents.innerHTML = this.tilesHTML;
    this.gameState = 2;
    this.options.onGameStart();
    this._gamePlay();
  }

  /**
   * Memory _gamePlay
   *
   * Now that all the HTML is set up, the game is ready to be played. In this
   * function, we loop through all the tiles (goverend by the .mg__tile--inner)
   * class, and for each tile, we run the _gamePlayEvents function.
   */

  Memory.prototype._gamePlay = function() {
    var tiles = document.querySelectorAll(".mg__tile--inner");
    for (var i = 0, len = tiles.length; i < len; i++) {
      var tile = tiles[i];
      this._gamePlayEvents(tile);
    };
  };

  /**
   * Memory _gamePlayEvents
   *
   * This function takes care of the "events", which is basically the clicking
   * of tiles. Tiles need to be checked if flipped or not, flipped if possible,
   * and if zero, one, or two cards are flipped. When two cards are flipped, we
   * have to check for matches and mismatches. The _gameCardsMatch and 
   * _gameCardsMismatch functions perform two separate sets of functions, and are
   * thus separated below.
   */

  Memory.prototype._gamePlayEvents = function(tile) {
    var self = this;
    tile.addEventListener( "click", function(e) {
      if (!this.classList.contains("flipped")) {
        if (self.card1flipped === false && self.card2flipped === false) {
          this.classList.add("flipped");
          self.card1 = this;
          self.card1id = this.getAttribute("data-id");
          self.card1flipped = true;
        } else if( self.card1flipped === true && self.card2flipped === false ) {
          this.classList.add("flipped");
          self.card2 = this;
          self.card2id = this.getAttribute("data-id");
          self.card2flipped = true;
		  if (self.card1id == 80 || self.card1id == 90) {
			  if (self.card2id == 8) {
				  self._gameCardsMatch();
			  } else {
				  self._gameCardsMismatch();
			  }
		  } else if (self.card2id == 80 || self.card2id == 90) {
			  if (self.card1id == 8) {
				  self._gameCardsMatch();
			  } else {
				  self._gameCardsMismatch();
			  }
		  } else if (self.card1id == 100 || self.card1id == 110 || self.card1id == 130) {
			  if (self.card2id == 10) {
				  self._gameCardsMatch();
			  } else {
				  self._gameCardsMismatch();
			  }
		  } else if (self.card2id == 100 || self.card2id == 110 || self.card2id == 130) {
			  if (self.card1id == 10) {
				  self._gameCardsMatch();
			  } else {
				  self._gameCardsMismatch();
			  }
		  } else {
			  if ( self.card1id == self.card2id ) {
				  self._gameCardsMatch();
			  } else {
				  self._gameCardsMismatch();
			  }
		  }
        }
      }
    });
  }

  /**
   * Memory _gameCardsMatch
   *
   * This function runs if the cards match. The "correct" class is added briefly
   * which fades in a background green colour. The times set on the two timeout
   * functions are chosen based on transition values in the CSS. The "flip" has
   * a 0.3s transition, so the "correct" class is added 0.3s later, shown for
   * 1.2s, then removed. The cards remain flipped due to the activated "flip"
   * class from the gamePlayEvents function.
   */

  Memory.prototype._gameCardsMatch = function() {
    // cache this
    var self = this;

    // add correct class
    window.setTimeout( function(){
      self.card1.classList.add("correct");
      self.card2.classList.add("correct");
    }, 300 );

    // remove correct class and reset vars
    window.setTimeout( function(){
      self.card1.classList.remove("correct");
      self.card2.classList.remove("correct");
      self._gameResetVars();
      self.flippedTiles = self.flippedTiles + 2;
      if (self.flippedTiles == self.numTiles) {
        self._winGame();
      }
    }, 1500 );

    // plus one on the move counter
    this._gameCounterPlusOne();
  };

  /**
   * Memory _gameCardsMismatch
   *
   * This function runs if the cards mismatch. If the cards mismatch, we leave
   * them flipped for a little while so the user can see and remember what cards
   * they actually are. Then after that slight delay, we removed the flipped
   * class so they flip back over, and reset the vars.
   */

  Memory.prototype._gameCardsMismatch = function() {
    // cache this
    var self = this;

    // remove "flipped" class and reset vars
    window.setTimeout( function(){
      self.card1.classList.remove("flipped");
      self.card2.classList.remove("flipped");
      self._gameResetVars();
    }, 3000 );

    // plus one on the move counter
    this._gameCounterPlusOne();
  };

  /**
   * Memory _gameResetVars
   *
   * For each turn, some variables are updated for reference. After the turn is
   * over, we need to reset these variables and get ready for the next turn.
   * This function handles all of that.
   */

  Memory.prototype._gameResetVars = function() {
    this.card1 = "";
    this.card2 = "";
    this.card1id = "";
    this.card2id = "";
    this.card1flipped = false;
    this.card2flipped = false;
  }

  /**
   * Memory _gameCounterPlusOne
   *
   * Each turn, the user completes 1 "move". The obective of memory is to
   * complete the game in as few moves as possible. Users need to know how many
   * moves they've had so far, so this function updates that number and updates
   * the HTML also.
   */

  Memory.prototype._gameCounterPlusOne = function() {
    this.numMoves = this.numMoves + 1;
    this.moveCounterUpdate = document.getElementById("mg__meta--moves").innerHTML = this.numMoves;
  };

  /**
   * Memory _clearGame
   *
   * This function clears the game wrapper, by removing it from the game div. It
   * allows us to rerun setupGame, and clears the air for other info like
   * victory messages etc.
   */

  Memory.prototype._clearGame = function() {
    if (this.gameMeta.parentNode !== null) this.game.removeChild(this.gameMeta);
    if (this.gameStartScreen.parentNode !== null) this.game.removeChild(this.gameStartScreen);
    if (this.gameWrapper.parentNode !== null) this.game.removeChild(this.gameWrapper);
    if (this.gameMessages.parentNode !== null) this.game.removeChild(this.gameMessages);
  }

  /**
   * Memoray _winGame
   *
   * You won the game! This function runs the "onGameEnd" callback, which by
   * default clears the game div entirely and shows a "play again" button.
   */

  Memory.prototype._winGame = function() {
    var self = this;
    if (this.options.onGameEnd() === false) {
      this._clearGame();
      this.gameMessages.innerHTML = '<h2 class="mg__onend--heading">Sweet!</h2>\
        <p class="mg__onend--message">You won the round in ' + this.numMoves + ' moves. Go you.</p>\
        <button id="mg__onend--restart" class="mg__button">Play again?</button>';
      this.game.appendChild(this.gameMessages);
      document.getElementById("mg__onend--restart").addEventListener( "click", function(e) {
        self.resetGame();
      });
    } else {
      // run callback
      this.options.onGameEnd();
    }
  }

  /**
   * Memory resetGame
   *
   * This function resets the game. It can run at the end of the game when the
   * user is presented the option to play again, or at any time like a reset
   * button. It is a public function, and can be used in whatever custom calls
   * in your markup.
   */

  Memory.prototype.resetGame = function() {
    this._clearGame();
    this._setupGame();
  };

  /**
   * Add Memory to global namespace
   */

  window.Memory = Memory;

})( window );