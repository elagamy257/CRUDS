let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count')
let category=document.getElementById('category');
let submit=document.getElementById('submit');

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
    if(newPro.count>1){
        for (let i = 0; i <newPro.count; i++) {
            dataPro.push(newPro);
        }
    }else{
        dataPro.push(newPro);
    }
    

// save localStorage
    localStorage.setItem('product', JSON.stringify(dataPro) )
    // console.log(newPro);

    clearData();
    showData();
}

// clear input
function clearData(){
        title.value='';
        price.value='';
        taxes.value='';
        ads.value='';
        discount.value='';
        total.innerHTML='';
        count.value='';
        category.value='';
}

//read
function showData(){
    let table='';
    for (let i = 0; i < dataPro.length; i++) {
        table +=`
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>`;
        
        
    }

    document.getElementById('tbody').innerHTML=table;
    let btnDelete=document.getElementById('deleteAll');
    if(dataPro.length>0){
        btnDelete.innerHTML=`
        <button onclick="deleteAll()"> delete All (${dataPro.length})</button>
        `
    }else{
        btnDelete.innerHTML=''
    }
}

//delete
function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product=JSON.stringify(dataPro);
    showData();
}

//delete All
function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData();

}
