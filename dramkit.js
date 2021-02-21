
var numberOfButton = document.querySelectorAll(".dram").length;

for (var i = 0; i < numberOfButton; i++) 
{

	document.querySelectorAll(".dram")[i].addEventListener("click",function() 
	{
		var innerButton = this.innerHTML;

		makeSound(innerButton);

		buttonAnimation(innerButton);
	});

}

    document.addEventListener("keypress",function(event){

    	makeSound(event.key);

    	buttonAnimation(event.key);
    });

        function makeSound(key){

		switch (key){

			case "e":
			    var audio1 = new Audio("sound/sound8.mp3");
		        audio1.play(); 
		        break;


           case "a":
			    var audio2 = new Audio("sound/sound7.mp3");
		        audio2.play(); 
		        break;

		    case "s":
			    var audio3 = new Audio("sound/sound3.mp3");
		        audio3.play(); 
		        break;
		    
		    case "d":
			    var audio4 = new Audio("sound/sound4.mp3");
		        audio4.play(); 
		        break;

		    case "j":
			    var audio5 = new Audio("sound/sound5.mp3");
		        audio5.play(); 
		        break;
		        
		    case "k":
			    var audio6 = new Audio("sound/sound6.mp3");
		        audio6.play(); 
		        break;
		        
		    case "l":
			    var audio7 = new Audio("sound/cash.mp3");
		        audio7.play(); 
		        break;      

		    default:
		        console.log("wrong key");                  
		}
	}

    function buttonAnimation(currentKey)
    {
    	var activeButton = document.querySelector("."+currentKey);

    	activeButton.classList.add("press");

    	setTimeout(function(){
    		activeButton.classList.remove("press");
    	},100);
    }

