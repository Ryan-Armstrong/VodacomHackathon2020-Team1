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
    + shopItem.id +')">Add to cart</button></div></div></div>';

    for (var i = 0; i < shopItems.length; i++) {
        if (i != itemNo - 1)
        {
            var shopItem = shopItems[i];
            productItemsDiv.innerHTML += '<div class="row product-item"><div class="col-4"><img src="' 
            + shopItem.image + '" class="product-image"></div><div class="col-8"><div class="product-info"><span class="product-title">'
            + shopItem.title +'</span><br><span>'
            + shopItem.description +'</span><br><button class="product-addcart-button" onclick="addToCart('
            + shopItem.id +')">Add to cart</button></div></div></div>';
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

function addToCart(itemId)
{
    // For now just assume itemId - 1 as the index
    var index = itemId - 1;
    if (cartItems[index] == null)
    {
        cartItems[index] = {
            count : 1,
            description: shopItems[index].title,
            cost : shopItems[index].cost,
        }
    }
    else
    {
        cartItems[index] = {
            count : cartItems[index].count + 1,
            description: shopItems[index].title,
            cost : cartItems[index].cost + shopItems[index].cost,
        }
    }
    console.log(cartItems);
}

initializeShopItems();
// viewShopItems(1);
// document.getElementById('salesDiv').classList.remove('hidediv');