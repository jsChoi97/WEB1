
function linksetcolor(cc){
	var alist = document.querySelectorAll('a');
	var i = 0 ;
	while( i < alist.length) {
		alist[i].style.color = cc ;
		console.log(alist[i]);
		i = i + 1;
	}			
}
var Body = {
	setcolor : function(cc){
		$('body').css('color',cc);
		// document.querySelector('body').style.color = cc;			
	},
	backgroundcolor : function (cc){
		$('body').css('backgroundColor',cc);
		// document.querySelector('body').style.backgroundColor =cc;
	}			
}

//데이 앤 나잇
function nightDayHandler(self){	
	if(self.value ==='night') {
		Body.backgroundcolor('black');
		Body.setcolor('white')
		self.value = 'day';
		linksetcolor('powderblue')

		document.querySelector('#main').style.color = 'white';		
		document.querySelector('#active').style.color = 'orange';
	} else {
		Body.backgroundcolor('white')
		Body.setcolor('black')
		self.value = 'night';
		linksetcolor('green');	
		document.querySelector('#main').style.color = 'black';		
		document.querySelector('#active').style.color = 'red';	
	}
}		
