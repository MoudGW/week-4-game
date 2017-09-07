
var players=[{name:"Obi-Wan kenobi",image:'assets/images/yobi.jpg',power:120,attack:20},
{name:"Luke skywalker",image:'assets/images/Luke.jpg',power:100,attack:10},
{name:"Darth Sidious",image:'assets/images/darth.jpg',power:150,attack:15},
{name:"Dath Maul",image:'assets/images/Darth_maul.png',power:100,attack:5}];
var player;
var enemie;
function display(x){
	for (var i = 0; i < players.length; i++) 
	{   
		$("#"+x).append("<div class='"+x+"' id="+i.toString()+'>'+players[i].name+'<img src='+players[i].image+'></img>'+players[i].power+'</div>');
	}
}
function fight(){
	if (player.power>0)
	{
		      	  player.power=player.power-enemie.attack;
      enemie.power=enemie.power-player.attack;
      $('#defender').html("<div class='players'>"+enemie.name+'<img src='+enemie.image+'></img>'+enemie.power+'</div>'); 
      $('#playerSelcted').html("<div class='players'>"+player.name+'<img src='+player.image+'></img>'+player.power+'</div>');

	 player.attack=player.attack+20;
	  $('#containerd').find('p').text('you will hit back '+player.attack+' and you will be attacked by '+enemie.attack);

	if (enemie.power<0)
	{
	if(players.length>0)
	{
    enemie=players[0];
    players.splice(0,1);
    $('#defender').html("<div class='players'>"+enemie.name+'<img src='+enemie.image+'></img>'+enemie.power+'</div>');
    $('#enemies').html('');
    display("enemies");
	}else{
       $('#Attack').off();
	   $('#containerd').find('p').text('you Won!!!!');
	   $('#containerd').append("<a href='index.html'><button 'id='Attack'>Replay</button></a>");
	}
    }

	}
	else{
	   $('#Attack').off();
	   $('#containerd').find('p').text('Game over !!!!');
	   $('#containerd').append("<a href='index.html'><button 'id='Attack'>Replay</button></a>");
	}

}

$('#document').ready(function(){

	$('#container').append("<h1>Your caracters</h1>");
	display('players');
	$('.players').click(function() {
		var i=parseInt($(this).attr('id'));
		player=players[i];
		players.splice(i,1);
		$('#players').html('');
		$('#playerSelcted').append("<div class='players'>"+player.name+'<img src='+player.image+'></img>'+player.power+'</div>');
	    display("enemies");
	    $('.players').off();
	    $('.enemies').click(function() {
     	var j=parseInt($(this).attr('id'));
		enemie=players[j];
		players.splice(j,1);
		$('#enemies').html('');
		display("enemies");
   	$('#defender').append("<div class='players'>"+enemie.name+'<img src='+enemie.image+'></img>'+enemie.power+'</div>');
			$('#Attack').click(function(){
		fight();
			});
		}
	);
	});

     



});