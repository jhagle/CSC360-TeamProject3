var objs = [];

obj =
  {
		storeimage: 'falafel.jpeg',
    	storename: 'I Dream of Falafel',
		storedistance: 1.5,
		storeaddresslineone: '18W066 22nd St',
		storeaddresslinetwo: 'Oakbrook, IL 60181',
		storepoints: 90
  };
  
obj1 =
  {
		storeimage: 'mcdonalds.png',
    	storename: 'McDonalds',
		storedistance: 3,
		storeaddresslineone: '500 W Madison St #6',
		storeaddresslinetwo: 'Chicago, IL 60661',
		storepoints: 50
  };
  
obj2 =
  {
		storeimage: 'dunkindonuts.jpg',
    	storename: 'Dunkin Donuts',
		storedistance: 2,
		storeaddresslineone: '33 E Lake St',
		storeaddresslinetwo: 'Addison, IL 60101',
		storepoints: 30
  };
  
obj3 =
  {
		storeimage: 'kfc.jpg',
    	storename: 'Kentucy Fried Chicken',
		storedistance: 10,
		storeaddresslineone: '334 W Army Trail Rd',
		storeaddresslinetwo: 'Bloomingdale, IL 60108',
		storepoints: 10
  };
  
var clearArray = function() {
	while(objs.length > 0) {
    		objs.pop();
	}
}
  
myStoresPopulate = function(x) {
	clearArray();
	document.getElementById("storesResult").innerHTML = '';
	if(x === 'points') {
		objs.push(obj);
		objs.push(obj1);
		objs.push(obj2);
		objs.push(obj3);
	} else if(x === 'nearby') {
		objs.push(obj);
		objs.push(obj2);
		objs.push(obj1);
		objs.push(obj3);
	} else if(x === 'storeName') {
		objs.push(obj2);
		objs.push(obj);
		objs.push(obj3);
		objs.push(obj1);
	} else {
		//clearArray();
		objs.push(obj);
		objs.push(obj1);
		objs.push(obj2);
		objs.push(obj3);
	}
	
	$.each(objs, function(index){
		var html = "<table width='350' border='0'><tr>";
		html += "<td width='70'>";
		html += "<img src='" + this.storeimage + "' width='75' height='75'>";
		html += "</td>";
        html += "<td width='175' align='left'>";
		html += "<b>" + this.storename + "</b>";
		html += "<br>Nearby: " + this.storedistance + " miles";
		html += "<br>" + this.storeaddresslineone + "<br>" + this.storeaddresslinetwo;
		html += "</td>";
       	html += "<td width='105'>" + this.storepoints + " <a href='myrewards.html'><img align='right' src='arrow.png' width='25' height='25' style='padding-bottom: 10px; padding-right: 10px'></a></td>";
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
