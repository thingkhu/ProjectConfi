
/*	This is for top search animation	*/

	function animateSearchBox() {

		$('.searchIcon').click(function(){

			var newWidth = 300;
			var oldWidth = 0;

			$('.searchInput').css({

				'display' : 'block'

			}).animate({

				'width': newWidth + 'px'

			}, 200, function(){

				$('.searchIcon').fadeOut();

				$(this).focus();

				$(this).blur(function(){

					$(this).animate({

						'width' : oldWidth + 'px'

					}, 200, function(){

						$(this).css({

							'display':'none'

						});

						$('.searchIcon').fadeIn();

					});

				});

			});

		});

	}

/*	This is for top search animation	*/

/*	This is for active list selection	*/

	function activeMenu(element,className) {

		$(element).each(function(){

			var currIndex = $(this).index();

			var currClass = '.' + $(this).attr('class');

			$(currClass).click(function(){

				$(currClass).parent('ul').children().removeClass(className);

				$(currClass).addClass(className);

				//console.log(currClass);

			});

		});

	}

/*	This is for active list selection	*/

/* This is for toggle List Option */

	function toggleListOption(element) {

		var listOptionDetailsHolder = $('.listOptionDetailsHolder');

		$('.listOptionsHolder').html(listOptionDetailsHolder);

		$(element).each(function(){

			$(this).children().find('.fileLabel').click(function(){

				$(this).parent().parent().parent().parent().toggleClass('selectedList');

				//console.log($(this).parent().parent().parent().parent());

			});

			
		});

	}

/* This is for toggle List Option */

/* This is for lock screen */

	function lockScreen() {

		$('.lockIcon').click(function(){

			$('.lockScreenHolder').fadeIn(1000);

		});

		$('.unlockScreen').click(function(){

			$('.lockScreenHolder').fadeOut(1000);

		});		

	}

/* This is for lock screen */

/* This is for filtering Lists */

	function filterList() {

		$('.allHolder').click(function() {

			$('.listDetailsHolder > li').fadeIn(500);

		});

		$('.docsHolder').click(function() {

			$('.listDetailsHolder > li').each(function(){

				if ($(this).hasClass('docFiles') == true) {

					$(this).fadeIn();

				} else {

					$(this).fadeOut();

				}

			});

		});

		$('.imgsHolder').click(function() {

			$('.listDetailsHolder > li').each(function(){

				if ($(this).hasClass('imgFiles') == true) {

					$(this).fadeIn();

				} else {

					$(this).fadeOut();

				}

			});

		});	

		$('.othersHolder').click(function() {

			$('.listDetailsHolder > li').each(function(){

				if ($(this).hasClass('otherFiles') == true) {

					$(this).fadeIn();

				} else {

					$(this).fadeOut();

				}

			});

		});				

	}

/* This is for filtering Lists */

/* temp populate list */

	function populateList() {

		var liDom = $('.listDetailsHolder').html();
	
		for (var i = 2; i <= 19; i++) {

			$('.listDetailsHolder').append(liDom);

			$('.listDetailsHolder > li').each(function() {

				var fileTypes = ['.TXT','.DOCX','.MP3','.JPG','.PNG'];

				var fileTypesRandom = fileTypes[Math.floor(Math.random()*fileTypes.length)]

				var findDOM = $(this).children().find('.kindHolder .fileLabel');

				findDOM.html('');

				findDOM.html(fileTypesRandom);

				var currFileType = findDOM.html();

				if (currFileType === '.DOCX') {

					$(this).removeAttr('class');

					$(this).addClass('docFiles');

				} else if (currFileType === '.TXT') {

					$(this).removeAttr('class');

					$(this).addClass('otherFiles');

				} else if (currFileType === '.PNG' || currFileType === '.JPG' ) {

					$(this).removeAttr('class');

					$(this).addClass('imgFiles');

				} else if (currFileType === '.MP3' ) {

					$(this).removeAttr('class');

					$(this).addClass('otherFiles');

				}

				

			});

		}	

		//console.log($('.listDetailsHolder').children('li').size());

	}

/* temp populate list */

/* This is for screen resize */

	function windowResize() {

		$(window).resize(function(){

			console.log($(this).width());

		});

	}

/* This is for screen resize */

/* this is for list scroll bar */

	function scrollBar() {

		var parH = $('.listDetails').outerHeight();

		var areaH = $('.listDetailsHolder').outerHeight();

		var scrH = parH / (areaH/parH);

		console.log(parH);

		function dragging(){     

		    var scrPos = $('.scroll').position().top;   
		
		    $('.listDetailsHolder').css({top: -(scrPos*(areaH/parH)-1)});

		    //var ulTop = $('.listDetailsHolder').css('top').replace('px','');	
		
		}

		$('.scroll').height(scrH);
		
		$('.scroll').draggable({
		    axis: 'y',
		    containment: 'parent',    
		    drag: function() {
		    
		         dragging();

		    }

		});


	}


/* this is for list scroll bar */