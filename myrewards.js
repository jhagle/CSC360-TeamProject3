var objs = [];

obj =
  {
		rewardpoints: 15,
    	rewardname: 'Backhlava',
		rewarddescription: 'Sweet Pastry with peanuts and pistachios.'
  };
  
obj1 =
  {
		rewardpoints: 25,
    	rewardname: 'Chips',
		rewarddescription: 'Freshly cooked chips made right in-front of you.'
  };
  
obj2 =
  {
		rewardpoints: 50,
    	rewardname: 'Fountain Drink',
		rewarddescription: 'Choose from any one of our 10+ flavors.'
  };
  
  
obj3 =
  {
		rewardpoints: 100,
    	rewardname: 'Rice Plate',
		rewarddescription: 'Rice plate with any choice of topping.'
  };
  
obj4 =
  {
		rewardpoints: 125,
    	rewardname: 'All-In Platter',
		rewarddescription: 'All the meat we have to offer, on one plate.'
  };
  
var clearArray = function() {
	while(objs.length > 0) {
    		objs.pop();
	}
}

var myAlert = function(x) {
	var st = "Thank you for redeeming this reward.";
	alert(st);
	window.location.href = "index.html";
}
  
myStoresPopulate = function(x) {
	clearArray();
	document.getElementById("storesResult").innerHTML = '';
	if(x === 'pointcostinc') {
		objs.push(obj);
		objs.push(obj1);
		objs.push(obj2);
		objs.push(obj3);
		objs.push(obj4);
	} else if(x === 'pointcostdec') {
		objs.push(obj4);
		objs.push(obj3);
		objs.push(obj2);
		objs.push(obj1);
		objs.push(obj);
	} else {
		//clearArray();
		objs.push(obj);
		objs.push(obj1);
		objs.push(obj2);
		objs.push(obj3);
		objs.push(obj4);
	}
	
	$.each(objs, function(index){
		var html = "<table width='350' border='0'><tr>";
		html += "<td width='70' align='center'>";
		html += this.rewardpoints;
		html += "</td>";
        html += "<td width='175' align='left'>";
		html += "<b>" + this.rewardname + "</b>";
		html += "<br>" + this.rewarddescription;
		html += "</td>";
       	html += "<td width='105' align='center'>";
		if(this.rewardpoints <= 90) {
			html += "<button type='button' onclick='myAlert()'>Redeem</button>" + "</td>";
		} else {
			html += "<button type='button' disabled>Redeem</button>" + "</td>";
		}
      	html += "</tr></table>";
		if(index == objs.length - 1) {
			
		} else {
			html += "<hr class='storebar'>";
		}
		$("#storesResult").append(html);
	});
}

window.onload = function()
{
	$(document).ready(myStoresPopulate);
	$(document).ready(function(){ 
  		$('#button1').click(function(){ 
    		myStoresPopulate($('#sort').val());
  		});
	});
  //document.getElementById("calcFeesAndEarnings").onclick = calcFeesAndEarningsFunction;
  //document.getElementById("reset").onclick = feesAndEarningsFormResetFunction;
}
