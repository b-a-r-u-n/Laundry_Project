let services = [
    {
        name: 'Dry Cleaning',
        price: 200,
    },
    {
        name: 'Wash & Fold',
        price: 100,
    },
    {
        name: 'Ironing',
        price: 30,
    },
    {
        name: 'Stain Removal',
        price: 500,
    },
    {
        name: 'Leather & Suede Cleaning',
        price: 999,
    },
    {
        name: 'Wedding Dress Cleaning',
        price: 2800,
    }
];

let serviceContainer = document.querySelector(".serviceContainer");

let i = 1;

let temp;
let arr = [];
let count = 0;




// display = (service) => {
//     console.log(service);
//     serviceContainer.innerHTML = `
//                                     ${serviceContainer.innerHTML}
//                                     <div class="service">
//                                         <div class="nameAndPrice">
//                                             <p class="serviceName">${service.name}</p>
//                                             <p class="servicePrice">${service.price}.00</p>
//                                         </div>
//                                         <button id="id${i} class="buttons">Add item <i class="fa-solid fa-circle-plus"></i></button>
//                                     </div>
//                                 `
//     i++;
// }

// services.forEach((service) => {
//     display(service);
// })

display = ((newarr1 , idx) => {
    
    
    addeditems.innerHTML = `
                                ${addeditems.innerHTML}
                                <div class="itemAdded">
                                    <div class="slNo">${idx+1}</div>
                                    <div class="serviceName">${newarr1.name}</div>
                                    <div class="servicePrice">${newarr1.price}</div>
                                </div>
                           `

})

reset = () => {
    totalprice.innerText = 0;
    namee.value = "";
    email.value = "";
    phone.value = "";
    addeditems.innerHTML  = `   
                                <div class="cart">
                                    <i class="fa-solid fa-circle-info"></i>
                                    <b>No items Added</b>
                                    <p>Add items to the cart from the service bar</p>
                                </div>
                            `

    // count = 0;
    i = 1;
    btn1isClick = false;
    btn2isClick = false;
    btn3isClick = false;
    btn4isClick = false;
    btn5isClick = false;
    btn6isClick = false;

    btn1.style.color = "";
    btn1.style.backgroundColor = "";
    btn1.innerText = "Add item";

    btn2.style.color = "";
    btn2.style.backgroundColor = "";
    btn2.innerText = "Add item";

    btn3.style.color = "";
    btn3.style.backgroundColor = "";
    btn3.innerText = "Add item";

    btn4.style.color = "";
    btn4.style.backgroundColor = "";
    btn4.innerText = "Add item";

    btn5.style.color = "";
    btn5.style.backgroundColor = "";
    btn5.innerText = "Add item";

    btn6.style.color = "";
    btn6.style.backgroundColor = "";
    btn6.innerText = "Add item";
}

let emailSent = () => {
    let customerData = {
        from_name: "Team PLAY",
        to_name: namee.value,
        email_id: email.value,
        reply_to: "laundryplay@gmail.com"
    }
    emailjs.send("service_961cq6w" , "template_u8zpyjh" , customerData)
}




let addeditems = document.querySelector(".addeditems");
let totalprice = document.querySelector(".totalprice span");

clicked = (count , isClick) => {   

    // console.log("Button clicked");
    let {name , price} = services[count];
    
    // console.log(name);
    // console.log(price);
    // console.log(i);
     
    

    if(isClick == false){

        if(i == 1){
            addeditems.innerHTML = "";
            // temp = "";
            addeditems.innerHTML = `
                                ${addeditems.innerHTML}
                                <div class="itemAdded">
                                    <div class="slNo">${i}</div>
                                    <div class="serviceName">${name}</div>
                                    <div class="servicePrice">${price}</div>
                                </div>
                                `
            i++;
            totalprice.innerText = parseInt(totalprice.innerText) + parseInt(price) ;
        }
        else{
            // temp = `
            //             ${addeditems.innerHTML}
                        
            //         `;

            addeditems.innerHTML = `
                                ${addeditems.innerHTML}  
                                <div class="itemAdded">
                                    <div class="slNo">${i}</div>
                                    <div class="serviceName">${name}</div>
                                    <div class="servicePrice">${price}</div>
                                </div>
                                `
            i++;
            totalprice.innerText = parseInt(totalprice.innerText) + parseInt(price) ;
        }
        isClick = true;

        arr.push(services[count]);
        // console.log(arr);
        
    }
    else{
        
        
        for(let a = 0; a < arr.length; a++){
            if(arr[a].name == name){    
                arr.splice(a,1);
            }
        }


        if(i == 2){
            addeditems.innerHTML = "";
        }else{
            
            addeditems.innerHTML = "";
            
            arr.forEach((arr1 , idx) => {
                
                display(arr1 , idx);
            });
        }

        
        totalprice.innerText = parseInt(totalprice.innerText) - parseInt(price) ;
        i--;
        isClick = false;
    }
    
    bookButton.style.opacity = 1 ;
    return(isClick);
}


let btn1isClick = false;
let btn2isClick = false;
let btn3isClick = false;
let btn4isClick = false;
let btn5isClick = false;
let btn6isClick = false;

let btn1 = document.querySelector("#id1");
let btn2 = document.querySelector("#id2");
let btn3 = document.querySelector("#id3");
let btn4 = document.querySelector("#id4");
let btn5 = document.querySelector("#id5");
let btn6 = document.querySelector("#id6");

btn1.addEventListener('click' , () => {
    if(btn1isClick == false){
        btn1.style.color = "green";
        btn1.style.backgroundColor = "#92e6a75c";
        btn1.innerHTML = `Added <i class="fa-solid fa-circle-minus"></i>`;
    }
    else{
        btn1.style.color = "red";
        btn1.style.backgroundColor = "rgba(255, 0, 0, 0.162)";
        btn1.innerHTML = `Removed <i class="fa-solid fa-circle-plus"></i>`;
    }
    btn1isClick = clicked(0 , btn1isClick);
});

btn2.addEventListener('click' , () => {
    if(btn2isClick == false){
        btn2.style.color = "green";
        btn2.style.backgroundColor = "#92e6a75c";
        btn2.innerHTML = `Added <i class="fa-solid fa-circle-minus"></i>`;
    }
    else{
        btn2.style.color = "red";
        btn2.style.backgroundColor = "rgba(255, 0, 0, 0.162)";
        btn2.innerHTML = `Removed <i class="fa-solid fa-circle-plus"></i>`;
    }
    btn2isClick = clicked(1 , btn2isClick);
});

btn3.addEventListener('click' , () => {
    if(btn3isClick == false){
        btn3.style.color = "green";
        btn3.style.backgroundColor = "#92e6a75c";
        btn3.innerHTML = `Added <i class="fa-solid fa-circle-minus"></i>`;
    }
    else{
        btn3.style.color = "red";
        btn3.style.backgroundColor = "rgba(255, 0, 0, 0.162)";
        btn3.innerHTML = `Removed <i class="fa-solid fa-circle-plus"></i>`;
    }
    btn3isClick = clicked(2 , btn3isClick);
});

btn4.addEventListener('click' , () => {
    if(btn4isClick == false){
        btn4.style.color = "green";
        btn4.style.backgroundColor = "#92e6a75c";
        btn4.innerHTML = `Added <i class="fa-solid fa-circle-minus"></i>`;
    }
    else{
        btn4.style.color = "red";
        btn4.style.backgroundColor = "rgba(255, 0, 0, 0.162)";
        btn4.innerHTML = `Removed <i class="fa-solid fa-circle-plus"></i>`;
    }
    btn4isClick = clicked(3 , btn4isClick);
});

btn5.addEventListener('click' , () => {
    if(btn5isClick == false){
        btn5.style.color = "green";
        btn5.style.backgroundColor = "#92e6a75c";
        btn5.innerHTML = `Added <i class="fa-solid fa-circle-minus"></i>`;
    }
    else{
        btn5.style.color = "red";
        btn5.style.backgroundColor = "rgba(255, 0, 0, 0.162)";
        btn5.innerHTML = `Removed <i class="fa-solid fa-circle-plus"></i>`;
    }
    btn5isClick = clicked(4 , btn5isClick);
});

btn6.addEventListener('click' , () => {
    if(btn6isClick == false){
        btn6.style.color = "green";
        btn6.style.backgroundColor = "#92e6a75c";
        btn6.innerHTML = `Added <i class="fa-solid fa-circle-minus"></i>`;
    }
    else{
        btn6.style.color = "red";
        btn6.style.backgroundColor = "rgba(255, 0, 0, 0.162)";
        btn6.innerHTML = `Removed <i class="fa-solid fa-circle-plus"></i>`;
    }
    btn6isClick = clicked(5 , btn6isClick);
});


let bookButton = document.querySelector(".right-buttom-button button");
let alert = document.querySelector(".alert");
let namee = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phnumber");

bookButton.addEventListener('click' , () => {
  if(totalprice.innerText == 0){
    console.log("hello");
    alert.innerHTML = `<p><span><i class="fa-solid fa-circle-info"> </i></span> Add the items to the cart to book</p>`;
    alert.style.color = "red";
  }
  else if(namee.value == ""){
    alert.innerHTML = `<p><span><i class="fa-solid fa-circle-info"> </i></span> Name must required</p>`;
    alert.style.color = "red";
  }
  else if(email.value == ""){
    alert.innerHTML = `<p><span><i class="fa-solid fa-circle-info"> </i></span> Email must required</p>`;
    alert.style.color = "red";
  }
  else if(phone.value == ""){
    alert.innerHTML = `<p><span><i class="fa-solid fa-circle-info"> </i></span> Phone Number must required</p>`;
    alert.style.color = "red";
  }
  else{
    alert.style.color = "#29bf12";
    alert.innerHTML = `<p><span><i class="fa-solid fa-circle-check"> </i></span> Booked Successfully</p>`;
    
    emailSent();
    reset();
    
  }  
});











