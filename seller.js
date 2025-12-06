const urlParams = new URLSearchParams(window.location.search)
let user_id = urlParams.get("user_id")
console.log(user_id)

const BASE_URL = "https://my-json-server.typicode.com/BSenichak/wm_shop"
let main = document.querySelector("main")


function getUser(){
    fetch(BASE_URL + "/user?id=" + user_id)
    .then(async (res)=>{
        let data = await res.json()
        data = data[0]
        console.log(data)
        document.querySelector(".seller h1").innerHTML = data.name
        document.querySelector(".seller h3").innerHTML = "Ел пошта: " + data.email
        document.querySelector(".seller h4").innerHTML = "#"+ data.id
    })
}
getUser()

function getProducts(){
    fetch(BASE_URL + "/products?user_id=" + user_id)
    .then(async (res)=>{
        let data = await res.json()
        console.log(data)
        drawProducts(data)
    })
}
getProducts()

function drawProducts(products){
    main.innerHTML = ""
    products.forEach(p=>{
        main.innerHTML += `
        <div class="product">
            <h3>${p.name}</h3>
            <h4>$${p.price}</h4>
        </div>
        `
    })
}