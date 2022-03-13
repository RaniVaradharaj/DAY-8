class uber{ 
    price(distance, waitingCharge = 0) { //giving parameters that dynamically change
        var baseprice = 20;
        var priceperkm = 10;
        let price = distance * priceperkm + baseprice+waitingCharge;
        console.log(price);
    }
}
let obj = new uber(); //creating object
obj.price(10); //calling function "price"
