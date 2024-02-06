/**
 * Comp 2680 - Final Project
 * Muhammad Danish Bhombal
 * T00662679
 * 
 * Floosh Streaming Service
 * Script to generate the cart
 * 
 * Function List:
 * 
 * EventListener()
 *      pulls the qty data from the previous shop page 
 *      then calls the function to generate the cart
 * 
 *  CalcTotal(index)
 *      Multiplies the price by the qty by the price to get the total
 *      Iterates once for each index.
 * 
 * checkoutGenerate()
 *      Creates the cart
 * 
 * tableHeadings()
 *      Adds the 5 headings to the top of the cart
 * 
 * checkoutRow(item)
 *      Each iteration generates 1 row of the shop
 *      If the qty of the item in question is 0, it is skipped
 * 
 * numberWithCommas()
 *      Formats the number by adding commas to look more readable
 *      e.g. 1 million = 1000000 = 1,000,000
 */


window.addEventListener("load", function()
{
    var divCart = document.getElementById("divCart");

    //Retrieve the field/value pairs from the URL
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g," ");
    formData = decodeURIComponent(formData);
    var formFields = formData.split(/[&=]/g);

    //Writing the values
    //Increment formFields index by 4 to pull the next qty values
    selectedQty[0] = formFields[1];
    selectedQty[1] = formFields[5];
    selectedQty[2] = formFields[9];
    selectedQty[3] = formFields[13];
    selectedQty[4] = formFields[17];
    selectedQty[5] = formFields[21];
    selectedQty[6] = formFields[25];
    selectedQty[7] = formFields[29];
    selectedQty[8] = formFields[33];

    //Generates the Cart
    divCart.innerHTML = checkoutGenerate();
})

function CalcTotal(index)
{
    total[index] = selectedQty[index] * price[index];
}

function calcSubTotal()
{
    Subtotal = 0;
    for (var i = 0; i < selectedQty.length; i++)
    {
        SubTotal += total[i];
    }
}

function checkoutGenerate()
{
    var checkoutHTML = "<table id='shop'> \
                            <form id='order' name='order'>";

    checkoutHTML += tableHeadings();

    for (var i = 0; i < selectedQty.length; i++)
    {
        CalcTotal(i);
        checkoutHTML += checkoutRow(i);
    }
    calcSubTotal();
    checkoutHTML += checkoutFooter();
    checkoutHTML +=     "</form> \
                    </table>";

    return checkoutHTML;
}

function tableHeadings()
{
    var headingHTML = "";

    headingHTML += "<tr> \
                        <th>Item</th> \
                        <th>Description</th> \
                        <th>Qty</th> \
                        <th>Price</th> \
                        <th>Total</th> \
                    </tr>";

    return headingHTML;
}

function checkoutRow(item)
{
    //Should not execute anything if the qty is 0
    //I.E. if the qty is 0, that item will be skipped
    if(selectedQty[item] != 0)
    {
    var rowHTML = "<tr>";
    
    rowHTML +=  "<td id='shop'><img id='shop' src='Shop/" + itemPics[item] + "'></td> \
                <td id='shop'>" + products[item] + "</td> \
                <td id='qty"+item +"'>" + selectedQty[item] + "</td> \
                <td id='shop'><img id='price' />" + numberWithCommas(price[item]) + "</td> \
                <td id='total'><img id='price' />" + numberWithCommas(total[item]) + "</td> \
            </tr>";
            return rowHTML;
    }
    return "";
}

function checkoutFooter()
{
    var footerHTML = "<tr id='footer'>";

    footerHTML +=  "<td></td> \
                    <td></td> \
                    <td></td> \
                    <td id='sub'>SubTotal: </td> \
                    <td id='subTotal'><img id='price' />" + numberWithCommas(SubTotal) + "</td> \
                    </tr>";
                    
    return footerHTML;
}

function numberWithCommas(price) {
    var parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}