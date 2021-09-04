
/* -------
 problem 1: Seer to Moon convert.
  -------*/
function seerToMon(seer) {

    if (typeof seer != 'number') // check the valid condition  for input parameter
    {
        return 'please enter a number';
    }
    else if (seer < 0)  // check the valid condition  for input parameter
    {
        return 'Please enter a positive number!';
    }
    else {

        let mon;
        mon = seer / 40;     /// convert seer to mon
        return mon;
    }


}

const resultSeer = seerToMon(60);    ///declare variable and call function.
console.log(resultSeer);

/* -------
 problem 2: totalSales calculation
 -------*/

// declaration of totalSales funcntion
function totalSales(shirtQuantity, pantQuantity, shoeQuantity)  // check the valid condition  for input parameter
{
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
        return 'please enter a number';
    }
    else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) // check the valid condition  for input parameter
    {
        return 'Please enter a positive number!';
    }
    else {
        const perShirt = 100;
        const perPant = 200;
        const perShoe = 500;
        const shirtPriceQuantity = perShirt * shirtQuantity;     /// calculation for shirt priceQuantity
        const pantPriceQuantity = perPant * pantQuantity;     /// calculation for pant priceQuantity
        const shoePriceQuantity = perShoe * shoeQuantity;     /// calculation for shoe priceQuantity
        // adding price
        const totalPrice = shirtPriceQuantity + pantPriceQuantity + shoePriceQuantity;

        return totalPrice;
    }


}

const firstOption = totalSales(2, 3, 4);  ///declare variable and call function.

console.log(firstOption);


/* -------
problem 3:calculation of deliveryCost
-------*/

// declaration deliveryCost function

function deliveryCost(shirts) {

    if (typeof shirts != 'number')  // check the valid condition  for input parameter
    {
        return 'please enter a number';
    }
    else if (shirts < 0) // check the valid condition  for input parameter
    {
        return 'Please enter a positive number!';
    }
    else {
        const deliveryCostFirst100Shirts = 100;
        const deliveryCostSecond200Shirts = 80;
        const deliveryCostRestShirts = 50;
        if (shirts <= 100) /// check the condition for maximum 100 shirts  Quantity
        {
            /// calculation of first 100 shirts delivery cost 
            const totalDeliveryCost = shirts * deliveryCostFirst100Shirts;
            return totalDeliveryCost;
        }
        else if (shirts <= 200)   /// check the condition for maximum 200 shirts Quantity
        {
            /// calculation of first 100 shirts delivery cost 
            const firstShirtsDeliveryCost = 100 * deliveryCostFirst100Shirts;
            const restShirts = shirts - 100;
            /// calculation of rest shirts delivery cost 
            const restDeliveryCost = restShirts * deliveryCostSecond200Shirts;
            /// adding price.
            const totalDeliveryCost = firstShirtsDeliveryCost + restDeliveryCost;
            return totalDeliveryCost;
        }
        else   /// check the condition for larger then 200 shirts quantity
        {
            const firstShirtsDeliveryCost = 100 * deliveryCostFirst100Shirts;  /// calculation of first 100 shirts delivery cost 
            const secondDeliveryCost = 100 * deliveryCostSecond200Shirts;  /// calculation of second 100 shirts delivery cost
            const restShirts = shirts - 200;
            const restDeliveryCost = restShirts * deliveryCostRestShirts;  /// calculation of rest shirts delivery cost

            /// adding cost
            const totalDeliveryCost = firstShirtsDeliveryCost + secondDeliveryCost + restDeliveryCost;
            return totalDeliveryCost;
        }
    }

}

const deliveries = deliveryCost(275);   ///declare variable and call function.

console.log(deliveries);


/*----- ----
problem 4: perfectFriend names
-------*/

// declaration perfectFriend function

function perfectFriend(names) {

    // check all valid input names
    for (const iterator of names) {
        if (typeof iterator != 'string') {
            return 'please enter all string input array.'
        }

    }

    for (const name of names) {
        if (name.length == 5) /// check valid condition for perfect name
        {
            return name;


        }
    }
}


const friendNames = ['mim', 'mamun', 'rashid', 'munira', 'afif', 'ruhul'];

const perfectName = perfectFriend(friendNames);

console.log(perfectName);