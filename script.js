let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(){
const list = document.getElementById("productList");
list.innerHTML="";

products.forEach(p=>{
list.innerHTML += `
<div class="product">
<img src="${p.image}">
<h3>${p.productName}</h3>
<p>Supplier: ${p.supplierName}</p>
<p>Price: ₹${p.price}</p>
<p class="moq">MOQ: ${p.moq}</p>
<p>${p.location}</p>

<button class="contact-btn"
onclick="contactSupplier('${p.whatsapp}','${p.productName}')">
Contact on WhatsApp
</button>

</div>
`;
});
}

function addProduct(){

const product={
supplierName:document.getElementById("supplierName").value,
productName:document.getElementById("productName").value,
price:document.getElementById("price").value,
moq:document.getElementById("moq").value,
location:document.getElementById("location").value,
whatsapp:document.getElementById("whatsapp").value,
image:document.getElementById("image").value
};

products.push(product);

localStorage.setItem("products",JSON.stringify(products));

closeSupplierForm();
renderProducts();
}

function contactSupplier(number,product){
const msg=`Hello I want to buy ${product}`;
window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`);
}

function openSupplierForm(){
document.getElementById("supplierModal").style.display="block";
}

function closeSupplierForm(){
document.getElementById("supplierModal").style.display="none";
}

renderProducts();
