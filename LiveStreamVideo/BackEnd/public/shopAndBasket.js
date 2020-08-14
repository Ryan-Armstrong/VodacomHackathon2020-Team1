const shopItems = [
    {
        id : 1,
        image : 'shopimages/shop_item_1.png',
        title : 'Burgundy Velvet Dress ',
        description : "You will love this in the winter",
        cost : 99
    },
    {
        id : 2,
        image : 'shopimages/shop_item_2.png',
        title : 'Red Floral Slip',
        description : "This one is more for the winter",
        cost : 120
    },
    {
        id : 3,
        image : 'shopimages/shop_item_3.png',
        title : 'Navy Stripe Playsuit',
        description : "For those days you want to visit the farm",
        cost : 122
    },
    {
        id : 4,
        image : 'shopimages/shop_item_4.png',
        title : 'Gold Gold Gold',
        description : "It is time to party with this one",
        cost : 200
    },
];
let cartCount = 0;

const cartItems = [];

function viewShopItems(itemNo)
{
    console.log("Shop item clicked", itemNo);

    var productsDiv = document.getElementById('productsDiv');
    productsDiv.classList.remove('hidediv');
    document.getElementById('salesDiv').classList.add('hidediv');
    document.getElementById('chatContainer').classList.add('hidediv');

    var productItemsDiv = document.getElementById('productItems');
    productItemsDiv.innerHTML = "";

    var shopItem = shopItems[itemNo - 1];
    productItemsDiv.innerHTML += '<div class="row product-item"><div class="col-4"><img src="' 
    + shopItem.image + '" class="product-image"></div><div class="col-8"><div class="product-info"><span class="product-title">'
    + shopItem.title +'</span><br><span>'
    + shopItem.description +'</span><br><button class="product-addcart-button" onclick="addToCart('
    + shopItem.id +', false)">Add to cart</button></div></div></div>';

    for (var i = 0; i < shopItems.length; i++) {
        if (i != itemNo - 1)
        {
            var shopItem = shopItems[i];
            productItemsDiv.innerHTML += '<div class="row product-item"><div class="col-4"><img src="' 
            + shopItem.image + '" class="product-image"></div><div class="col-8"><div class="product-info"><span class="product-title">'
            + shopItem.title +'</span><br><span>'
            + shopItem.description +'</span><br><button class="product-addcart-button" onclick="addToCart('
            + shopItem.id +', false)">Add to cart</button></div></div></div>';
        }
    }
}

function initializeShopItems()
{
    var salesItemsDiv = document.getElementById('salesItems');
    salesItemsDiv.innerHTML = "";
    for(var i = 0; i < shopItems.length; i++ )
    {
        salesItemsDiv.innerHTML += '<div class="scrollItemSquare" onclick="viewShopItems('+ (i+1) +')"><image class="scrollImageSquare" src="'+ shopItems[i].image +'"/></div>';        
    }
}

function addToCart(itemId, remove)
{
    var index = itemId - 1;
    var cartItemToTest = cartItems[index];
    if (cartItemToTest != null && remove && cartItemToTest.count == 0)
    {
        return;
    }
    document.getElementById('cartControl').classList.remove('hidediv');
    // For now just assume itemId - 1 as the index
    
    if (cartItems[index] == null)
    {
        cartItems[index] = {
            count : 1,
            description: shopItems[index].title,
            cost : shopItems[index].cost,
            id : itemId
        }
    }
    else
    {        
        cartItems[index] = {
            count : remove ? cartItems[index].count - 1 : cartItems[index].count + 1,
            description: shopItems[index].title,
            cost : remove ? cartItems[index].cost - shopItems[index].cost : cartItems[index].cost + shopItems[index].cost,
            id : itemId
        }
    }
    cartCount = cartCount + 1;
    console.log(cartItems);
    document.getElementById('cartCountControl').innerHTML = cartCount;
}

function populateCart()
{
    var cartItemsEl = document.getElementById('cartItems');
    cartItemsEl.innerHTML = "";
    var cartTotalEl = document.getElementById('cartTotal');
    cartTotalEl.innerHTML = "";
    var total = 0;
    for(var i = 0; i < cartItems.length; i++)
    {
        var cartItem = cartItems[i];
        if (cartItem != null)
        {
        total += cartItem.cost;

        cartItemsEl.innerHTML += '<div class="row cart-row-main"><div class="col-6"><span class="cart-description">'+
        cartItem.description + '</span></div><div class="col-3"><span onclick="removeCartItem('+
        cartItem.id+')" class="cart-remove">&nbsp;&nbsp;－</span><span class="cart-number">&nbsp;'+
        cartItem.count+'</span><span onclick="addCartItem('+
        cartItem.id+')" class="cart-add">+</span></div><div class="col-3"><span>R</span><span>'+ 
        cartItem.cost +'</span></div></div><div class="cart-row"></div>';
        }
    }
    cartTotalEl.innerHTML = total;
}


function addCartItem(id)
{
    console.log("add", id);
    addToCart(id,false);
    populateCart();
}

function removeCartItem(id)
{
    console.log("remove", id);
    addToCart(id, true);
    populateCart();
}

function checkoutBasket()
{
    console.log("check out");
    cartClose();
    my.postMessage({ type : 'ConfirmCheckout' });
}

initializeShopItems();
// viewShopItems(1);
// document.getElementById('salesDiv').classList.remove('hidediv');
//document.getElementById('cartDiv').classList.remove('hidediv');