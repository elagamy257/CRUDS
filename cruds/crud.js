let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count')
let category=document.getElementById('category');
let submit=document.getElementById('submit');

// console.log(title,discount,price,taxes,ads,total,count,category,submit);
// get total
function getTotal(){
    // console.log('done');
    if(price.value !=''){
        let res=(+price.value+ +ads.value+ +taxes.value)- +discount.value;
        total.innerHTML=res;
        total.style.background='#040'
    }
    else{
        total.innerHTML='';
        total.style.background='#e61025'
    }
}

// create product

let dataPro;
if(localStorage.product !=null)
    dataPro=JSON.parse(localStorage.product)
else
        dataPro=[];
submit.onclick=function(){
    let newPro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount: discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    // console.log(newPro);
    dataPro.push(newPro);
    localStorage.setItem('product', JSON.stringify(dataPro) )
    console.log(newPro);
}



// save localStorage
// clear input
//read