/*
	Welcome to Amazon Fees, Earnings, and Investment Calculator!
	Made by Sohel Mansuri
	
	The basic goal of this simple Amazon Fees, Earnings, and Investment Calculator is to help Amazon Sellers
	easily calculate Amazon fees and Earnings in order to determine if an investment is worth it.
	
	Simply enter the cost of the product, the product price on Amazon you intent to list it for, the type of product to get started!
*/ 

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
	//document.getElementById("storesResult").innerHTML = '';
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
       	html += "<td width='105'>" + this.storepoints + "</td>";
      	html += "</tr></table>";
		if(index == objs.length - 1) {
			
		} else {
			html += "<hr class='storebar'>";
		}
		$("#storesResult").append(html);
		/*
		
		$("#storesResult").append(); */
	});
}

var calcFeesAndEarningsFunction = function()
{
  var productPrice, typeOfSeller, typeOfProduct, amazonFees, referralFee, variableClosingFee, sellerFee, totalSellerAmazonEarningBeforeShipping, standardShippingCredit, earnings, invest, profit;
  standardShippingCredit = 3.99;
  
  productPrice = document.getElementById("productPrice").value;
  productPrice = Number(productPrice);
  
  productCost = document.getElementById("productCost").value;
  productCost = Number(productCost);
  
  typeOfSeller = document.getElementById("typeOfSeller").value;
  if (typeOfSeller === "Individual") {
    sellerFee = 0.99;	  
  } else if (typeOfSeller === "Professional") {
    sellerFee = 0.00;
  } 
  
  typeOfProduct = document.getElementById("typeOfProduct").value;
  variableClosingFee = 0.45;
  if (typeOfProduct === "3D Printed Products") {
  	referralFee = 0.12;
  } else if (typeOfProduct === "Amazon Device Accessories") {
  	referralFee = 0.45;
  } else if (typeOfProduct === "Automotive & Powersports") {
  	referralFee = 0.10;
  } else if (typeOfProduct === "Camera and Photo") {
  	referralFee = 0.08;
  } else if (typeOfProduct === "Cell Phone Devices") {
  	referralFee = 0.08;
  } else if (typeOfProduct === "Consumer Electronics") {
  	referralFee = 0.08;
  } else if (typeOfProduct === "Entertainment Collectibles") {
  	referralFee = 0.20;
  } else if (typeOfProduct === "Independent Design") {
  	referralFee = 0.25;
  } else if (typeOfProduct === "Industrial & Scientific (including Food Service and Janitorial & Sanitation)") {
  	referralFee = 0.12;
  } else if (typeOfProduct === "Jewelry") {
  	referralFee = 0.20;
  } else if (typeOfProduct === "Personal Computers") {
  	variableClosingFee = 1.35;
  	referralFee = 0.06;
  } else if (typeOfProduct === "Sports Collectibles") {
  	referralFee = 0.20;
  } else if (typeOfProduct === "Tools & Home Improvement") {
  	referralFee = 0.12;
  } else if (typeOfProduct === "Video Game Consoles") {
 	variableClosingFee = 1.35;
  	referralFee = 0.08;
  } else if (typeOfProduct === "Books") {
  	variableClosingFee = 1.35;
	referralFee = 0.15; 
  } else if (typeOfProduct === "Video Games") {
  	variableClosingFee = 1.35;
	referralFee = 0.15;
  } else {
  	referralFee = 0.15;
  }
  
  
  amazonFees = (productPrice * referralFee) + variableClosingFee + sellerFee;
  totalSellerAmazonEarningBeforeShipping = productPrice - amazonFees;
  earnings = totalSellerAmazonEarningBeforeShipping + standardShippingCredit;
  profit = earnings - productCost;
  
  if(earnings > productCost) {
  	invest = "Yes";
  } else {
  	invest = "No";
  }
  
  document.getElementById("result").innerHTML = 
  	"Price: $" + productPrice +
  	"<br>Shipping: $" + standardShippingCredit +
  	"<br>Amazon Fees: $" + amazonFees.toFixed(2) +
  	"<br>Your Earnings: $" + earnings.toFixed(2) +
  	"<br><br>Invest? " + invest +
  	"<br>Profit: $" + profit.toFixed(2);
  	  	
  
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
