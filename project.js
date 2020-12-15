let countval = 0;

let products = [{
        id: 1,
        name: "Check Blazer",
        size: "M",
        color: "Brown",
        price: 1800,
        image: "1.jpg",
        description: "Good looking Brown Blazer",
    },
    {
        id: 2,
        name: "Gray Blazer",
        size: "M",
        color: "Gray",
        price: 2000,
        image: "2.jpg",
        description: "Both Formal and Casual",
    },

    {
        id: 3,
        name: "Black Blazer",
        size: "L",
        color: "Black",
        price: 1900,
        image: "3.jpg",
        description: "Plain black Blazer",
    },

    {
        id: 4,
        name: "Purple Blazer",
        size: "L",
        color: "Purple",
        price: 3000,
        image: "4.jpg",
        description: "Nice Blazer",
    },

    {
        id: 5,
        name: "Pink White Basket",
        size: "M",
        color: "Pink & White",
        price: 1300,
        image: "5.jpg",
        description: "Traditional Basket",
    },

    {
        id: 6,
        name: "Indian Dress",
        size: "M",
        color: "Light blue",
        price: 1500,
        image: "6.jpg",
        description: "Good looking Traditional Dress",
    },
    {
        id: 7,
        name: "Red Saree",
        size: "L",
        color: "Red",
        price: 1200,
        image: "7.jpg",
        description: "Beautiful Saree  ",
    },
    {

        id: 8,
        name: "Female basket",
        size: "S",
        color: "Green",
        price: 800,
        image: "8.jpg",
        description: "Good looking basket",
    },
    {
        id: 9,
        name: "Blue top",
        size: "M",
        color: "Blue",
        price: 1100,
        image: "9.jpg",
        description: "Pretty Blue top",
    },
    {
        id: 10,
        name: "Designer dress",
        size: "S",
        color: "white",
        price: 1200,
        image: "10.jpg",
        description: "Beautiful designer white dress",
    }, {
        id: 11,
        name: "Long top",
        size: "L",
        color: "Cream",
        price: 1400,
        image: "11.jpg",
        description: "Beautiful Cream color long t",
    }, {
        id: 12,
        name: "Summer collection",
        size: "S",
        color: "Gray",
        price: 1200,
        image: "12.jpg",
        description: "Very pretty short summer wear",
    },
];

cart = [];

function displayProduct(productData, targetid) {
    let productString = "";
    let buttonDis = "Add To Cart"
    let funToCall = "addToCart";
    console.log(funToCall);
    if (targetid == "cart") {
        funToCall = "removeFromCart";
        buttonDis = "Remove From Cart"
    }
    productData.forEach(function (product, index) {
        let {
            id,
            name,
            image,
            color,
            description,
            price,
            size
        } = product;

        productString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="${funToCall}(${index})">${buttonDis}</button>
        </p>
      </div>`;
    });
    console.log('productString');


    document.getElementById(targetid).innerHTML = productString;
}
displayProduct(products, "productwrapper");

function searchProduct() {
    let searchValue = document.getElementById('search').value;
    let searchedProducts = products.filter(function (product) {
        let searchString = product.name + " " + product.color + " " + product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;

    });
    displayProduct(searchedProducts, "productwrapper");


}


function updateCount() {
    document.getElementById("count").innerHTML = countval;
}

function addToCart(index) {
    // console.log("hello");

    let check = true;
    check = checkduplicate(index)
    if (check) {
        cart.push(products[index]);
        displayProduct(cart, "cart");
        countval++;
        updateCount();
    }
}

function removeFromCart(index) {

    cart.splice(index, 1);
    displayProduct(cart, "cart");
    countval--;
    updateCount();
}

function checkduplicate(index) {
    let flag = cart.filter(val => val.id == products[index].id);
    console.log(cart.id);
    if (flag != 0) {
        alert("Product Already in Cart !");
        return false;
    } else {
        return true;
    }
}



function filterprod() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    console.log(min);
    let res = products.filter((val) => val.price >= min && val.price <= max);
    displayProduct(res, "productwrapper");
}
