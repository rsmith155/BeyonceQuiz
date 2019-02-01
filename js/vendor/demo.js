


function check(){

	var question1 = document.quiz.Q1.value;
	var question2 = document.quiz.Q2.value;
	var question3 = document.quiz.Q3.value;
	var question4 = document.quiz.Q4.value;
	var question5 = document.quiz.Q5.value;
	var question6 = document.quiz.Q6.value;
	var correct = 0;


	if (question1 == "Virgo") {
		correct++;
}
	if (question2 == "Houston, TX") {
		correct++;
}	
	if (question3 == "Hot Sauce") {
		correct++;
}
	if (question4 == "2003") {
		correct++;
}
	if (question5 == "Blue Ivy, Rumi and Sir") {
		correct++;
}	
	if (question6 == "Beyonce, Lativia, Nicky, Ashley, Nina, Kelly") {
		correct++;
}		
	
	var vids = ["https://www.youtube.com/embed/-FjG5dI_d5c?enablejsapi=1", "https://www.youtube.com/embed/IyuUWOnS9BY?enablejsapi=1","https://www.youtube.com/embed/4S37SGxZSMc?enablejsapi=1","https://www.youtube.com/embed/XQtoCz9dIJQ?enablejsapi=1"];
	var messages = ["Welcome to the illustrious Alpha chapter of BAK. You are clearly a Beyonce STAN and WORTHY of the black and gold. Stay in formation, make err'body mad. ", "You wake up…Flawless. Post up...Flawless. Your quiz score...(nearly) Flawless. You know enough to stand by the Beyhive and not get stung.", " To My dearest Michelle, youve left Destinys Child and are on your way to stardom, but you have a long way to go.", "Hey, farrah."];
	var titles = ["BΔK (Alpha Chapter)","Beyhive Adjacent","A Child of Destiny","Destinys (Disowned)Step-Child"]
	var songs = ["Formation", "***Flawless", "Me, Myself and I", "No,No,No,No pt1"]
	var vidID =[]
	var albumart=[]
	var score;

	if (correct <=2) {
		score = 3;
	}

	if (correct == 3) {
		score = 2;
	}

	if (correct > 3 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}

	
	document.getElementById("existing-iframe-example").src=vids[score];
	
		 					var tag = document.createElement('script');
		 					tag.id = 'iframe-demo';
		 					tag.src = 'https://www.youtube.com/iframe_api';
		 					var firstScriptTag = document.getElementsByTagName('script')[0];
		 					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		 					var player;
		 					function onYouTubeIframeAPIReady() {
		 						player = new YT.Player('existing-iframe-example', {
		 							events: {
		 								'onReady': onPlayerReady,
		 								'onStateChange': onPlayerStateChange
		 							}
		 						});
		 					}
		 					function onPlayerReady(event) {
		 						document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
		 					}
		 					function changeBorderColor(playerStatus) {
		 						var color;
		 						if (playerStatus == -1) {
		 						color = "#37474F"; // unstarted = gray
		 					} else if (playerStatus == 0) {
		 					color = "#FFFF00"; // ended = yellow
		 				} else if (playerStatus == 1) {
		 				color = "#33691E"; // playing = green
		 			} else if (playerStatus == 2) {
		 			color = "#DD2C00"; // paused = red
		 		} else if (playerStatus == 3) {
		 		color = "#AA00FF"; // buffering = purple
		 	} else if (playerStatus == 5) {
		 	color = "#FF6DOO"; // video cued = orange
		 }
		 if (color) {
		 	document.getElementById('existing-iframe-example').style.borderColor = color;
		 }
		}
		function onPlayerStateChange(event) {
			changeBorderColor(event.data);
			}
	
	console.log(vids[score]);
	document.getElementById("crew-result").style.display="block";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = titles[score];
	
	document.getElementById("preamble").innerHTML = "You are...";

	var element = document.getElementById("crew-result");

	element.scrollIntoView({ behavior: 'smooth' });

	
	}
	

			
			
