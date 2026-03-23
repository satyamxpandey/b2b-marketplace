let products = JSON.parse(localStorage.getItem("products")) || [];
let filtered = [...products];

function renderProducts(list = products){

const container = document.getElementById("productList");
container.innerHTML="";

list.forEach(p=>{
container.innerHTML+=`
<div class="product">

<img src="${p.image}">
<h3>${p.productName}</h3>

<p>Supplier: ${p.supplierName}</p>
<p>Category: ${p.category}</p>

<p>Price: ₹${p.price}</p>
<p class="moq">MOQ: ${p.moq}</p>
<p>${p.location}</p>

<button class="contact-btn"
onclick="contactSupplier('${p.whatsapp}','${p.productName}')">
Contact Supplier
</button>

</div>
`;
});

}

function addProduct(){

const product={
supplierName:document.getElementById("supplierName").value,
productName:document.getElementById("productName").value,
category:document.getElementById("category").value,
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

function searchProducts(){
const search = document.getElementById("searchInput").value.toLowerCase();

const filtered = products.filter(p =>
p.productName.toLowerCase().includes(search)
);

renderProducts(filtered);
}

function filterCategory(cat){

if(cat===""){
renderProducts(products);
return;
}

const filtered = products.filter(p =>
p.category === cat
);

renderProducts(filtered);
}

function contactSupplier(number,product){
const msg=`Hello I want ${product}`;
window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`);
}

function openSupplierForm(){
document.getElementById("supplierModal").style.display="block";
}

function closeSupplierForm(){
document.getElementById("supplierModal").style.display="none";
}

function openLogin(){
document.getElementById("loginModal").style.display="block";
}

function closeLogin(){
document.getElementById("loginModal").style.display="none";
}

function login(){
alert("Login system coming next upgrade");
closeLogin();
}

renderProducts();
