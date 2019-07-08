var button_audio=new Audio(" http://www.monoame.com/awi_class/ballsound/click14.wav");

$(".i6").click(function(){
	$(".phone").css("width","");
	$(".screen").css("height","");
	$(".phonename").text($(this).text());
	button_audio.play();
});
$(".i6s").click(function(){
	$(".phone").css("width","250px");
	$(".screen").css("height","380px");
	$(".phonename").text($(this).text());
	button_audio.play();
});

$(".i7").click(function(){
	$(".phone").css("width","270px");
	$(".screen").css("height","440px");
	$(".phonename").text($(this).text());
	button_audio.play();
});

$(".i8").click(function(){
	$(".phone").css("width","300px");
	$(".screen").css("height","480px");
	$(".phonename").text($(this).text());
	button_audio.play();
});

var screen_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");


var page=0;
$(".screen").click(function(){
	page+=1;
	if(page>3){
		page=0;
	}
	$(".pages").css("left","-"+page*100+"%");
	screen_audio.play();
});

var homebtn_audio=new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");

$(".iphonebtn").click(function(){
	page=0;
	$(".pages").css("left","-"+page*100+"%");
	homebtn_audio.play();
});


$(".wiggle").click(function(){
  wiggletime=0;
  wiggle_audio.play();
});


var wiggle_audio=new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");
var wiggletime=21;
setInterval(function(){
  if (wiggletime<=20){
    wiggletime+=1;
    console.log(wiggletime);
    if (wiggletime%2==0){
      $(".phone").css("left","-30px");
    }else{
      $(".phone").css("left","30px");
    }
    
    if (wiggletime==21){
      $(".phone").css("left","");
    }
    
  }
},60);