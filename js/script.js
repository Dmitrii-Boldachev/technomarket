var sliderButtonOne = document.querySelector(".slider-button-one");
var sliderButtonTwo = document.querySelector(".slider-button-two");
var slideOne = document.querySelector(".slider-1");
var slideTwo = document.querySelector(".slider-2");



var deliveryLink = document.querySelector(".delivery-link");
var delivery = document.querySelector(".delivery");
var guaranteeLink = document.querySelector(".guarantee-link");
var guarantee = document.querySelector(".guarantee");
var creditLink = document.querySelector(".credit-link");
var credit = document.querySelector(".credit");
if (writeUs) {
    var form = writeUs.querySelector("form");
    var inputName = writeUs.querySelector("[name=name]");
    var inputPassword = writeUs.querySelector("[name=password]");    
}

var writeUsButton = document.querySelector(".write_us_button");
var writeUs = document.querySelector(".write_us");


// var storage = localStorage.getItem("name");
var buttonClose = document.querySelector(".button-close");
var buttonCloseMap = document.querySelector(".map-button-close");
var mapLink = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map");
var buttonBuy = document.querySelectorAll(".btn-buy");
var modalOrder = document.querySelector(".form-order");
var closeFormOrder = document.querySelector(".close_form_order");

var isStorageSupport = true;
var storage = "";





// слайдер
if (sliderButtonOne) {
    sliderButtonOne.addEventListener("click", function() {    
        slideOne.classList.toggle("visually-hidden");
        slideTwo.classList.toggle("visually-hidden");
    })
}

if (sliderButtonTwo) {
    sliderButtonTwo.addEventListener("click", function() {    
        slideOne.classList.toggle("visually-hidden");
        slideTwo.classList.toggle("visually-hidden");
    })
}


// 

// сервисы
if (deliveryLink) {
    deliveryLink.addEventListener("click", function(evt) {
        evt.preventDefault();
         delivery.classList.remove("visually-hidden");
         guarantee.classList.add("visually-hidden");
         credit.classList.add("visually-hidden");
     })
}
 
if (guaranteeLink) {
    guaranteeLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        guarantee.classList.remove("visually-hidden");
        delivery.classList.add("visually-hidden");
        credit.classList.add("visually-hidden");
    })
}

if (creditLink) {
    creditLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        guarantee.classList.add("visually-hidden");
        delivery.classList.add("visually-hidden");
        credit.classList.remove("visually-hidden");
    })
}


// 

// форма обратной связи
if (writeUsButton) {
    writeUsButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUs.classList.add("modal-show");
        
        if (storage) {
            inputName.value = storage;
            inputPassword.focus();
        } else {
            inputName.focus();
        }
        
    })
}



if (buttonClose) {
    buttonClose.addEventListener("click", function() {
        writeUs.classList.remove("modal-show"); 
        writeUs.classList.remove("modal-error");   
    })
}

if (form) {
    form.addEventListener("submit", function(evt) {
        if (!inputName.value || !inputPassword.value) {
            evt.preventDefault();
            writeUs.classList.remove("modal-error");
            writeUs.offsetWidth = writeUs.offsetWidth;        
            writeUs.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", inputName.value);
            }        
        }     
    });
}




window.addEventListener("keydown", function(evt) {
    if ( evt.keyCode === 27) {
        if (writeUs.classList.contains("modal-show")) {
            evt.preventDefault();
            writeUs.classList.remove("modal-show");
            writeUs.classList.remove("modal-error");
        }        
    }
})

// 


// карта
if (mapLink) {
    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalMap.classList.add("modal-show");
    });
}

if (buttonCloseMap) {
    buttonCloseMap.addEventListener("click", function() {
        modalMap.classList.remove("modal-show");    
    })
}

window.addEventListener("keydown", function(evt) {
    if ( evt.keyCode === 27) {
        if (modalMap.classList.contains("modal-show")) {
            evt.preventDefault();
            modalMap.classList.remove("modal-show");
            modalMap.classList.remove("modal-error");
        }        
    }
})

// 

// модалка в каталоге


buttonBuy.forEach(function(element) {
    element.addEventListener("click", function(evt){
        evt.preventDefault();   
        modalOrder.classList.add("modal-show");
    });
});


closeFormOrder.addEventListener("click", function() {
    modalOrder.classList.remove("modal-show");    
})

window.addEventListener("keydown", function(evt) {
    if ( evt.keyCode === 27) {
        if (modalOrder.classList.contains("modal-show")) {
            evt.preventDefault();
            modalOrder.classList.remove("modal-show");
            modalOrder.classList.remove("modal-error");
        }        
    }
})
    
