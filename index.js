let data= [
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "https://unsplash.com/photos/double-patty-cheeseburger-jh5XyK4Rr3Y"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "https://unsplash.com/photos/two-tortillas-with-vegetables-and-sauce-on-a-table-VMrIQ9hDaZk"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "https://unsplash.com/photos/sushi-on-black-ceramic-plate-iOHJKJqO6E0"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "https://unsplash.com/photos/closeup-photo-of-spaghetti-pasta-with-a-tomato-meat-sauce-shot-with-selective-focus-Gi4njnD6isM"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "https://unsplash.com/photos/food-lot-on-a-green-leaf-plate-nwmZhwOSVnM"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "https://unsplash.com/photos/bread-with-cheese-fillings-on-white-ceramic-plate-ZB8NK8cB4EE"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "https://unsplash.com/photos/meat-with-lettuce-on-white-ceramic-plate-63mHpYEyjCA"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "https://unsplash.com/photos/fried-chicken-with-fries-and-sauce-Pf-bZQpCaMI"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "https://unsplash.com/photos/a-bowl-of-ramen-with-chopsticks-and-a-glass-of-beer-mE6kjov4rTg"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
  ]

  let orders=[];
  
function getMenu(){
    return new Promise((resolve,reject)=>{
       resolve(data);
    })
}


function TakeOrder(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let orders= data.sort(() => Math.random() - 0.5).slice(0, 3);
        resolve(orders)
        },2500)
     })

}

function  orderPrep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:false});
        },1500)
    })
}

function  payOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({order_status:true,paid:true})
        },1000)
    })
}

function thankyouFnc(){
    return new Promise((resolve,reject)=>{
        resolve( {paid:true} );
    })
}

getMenu().then((d)=>{
    for(let i=0;i<d.length;i++){
        console.log(d[i]);
    }
    return TakeOrder();
}).then((d2)=>{
    for(let i=0;i<d2.length;i++){
        console.log(d2[i]);
    }
    return orderPrep();
}).then((d3)=>{
    console.log(d3)
    return payOrder();
}).then((d4)=>{
    console.log(d4);
    return thankyouFnc();
}).then((d5)=>{
    console.log(d5);
    alert('thank you for eating with us today!')
}).catch((e)=>{
    console.log(e);
});

