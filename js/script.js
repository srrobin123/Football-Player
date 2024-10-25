const btnMessi = document.getElementById("btnMessi")
const btnAndres = document.getElementById("btnAndres")
const btnMbpappe = document.getElementById("btnMbpappe")
const btnMene = document.getElementById("btnMene")
const btnEden = document.getElementById("btnEden")
const btnPogba = document.getElementById("btnPogba")


let playerCount = 0;

function addList(PlayerName) {
    const oderList = document.getElementById("oderList")
    const li = document.createElement("li");
    li.innerText = PlayerName;
    li.classList.add("text-xl")
    oderList.appendChild(li)
}

function altMiximum() {
    playerCount > 6 ? playerCount = 6: playerCount;
    if (playerCount === 6) {
        alert("You add maximum 5 player")
    }
}



btnMessi.addEventListener("click",function () {
    playerCount++
    altMiximum()
    if(playerCount <= 5){
        addList("Lionel Messi")
        btnMessi.classList.remove("bg-blue-500")
        btnMessi.classList.add("bg-blue-300")
        btnMessi.disabled = true;
    }
})

btnAndres.addEventListener("click",function () {
    playerCount++
    altMiximum()
    if(playerCount <= 5){
        addList("Andres")
        btnAndres.classList.remove("bg-blue-500")
        btnAndres.classList.add("bg-blue-300")
        btnAndres.disabled = true;
    }
})

btnMbpappe.addEventListener("click",function () {
    playerCount++
    altMiximum()
    if(playerCount <= 5){
        addList("Mbpappe")
        btnMbpappe.classList.remove("bg-blue-500")
        btnMbpappe.classList.add("bg-blue-300")
        btnMbpappe.disabled = true;
    }
})

btnMene.addEventListener("click",function () {
    playerCount++
    altMiximum()
    if(playerCount <= 5){
        addList("Sadio Mene")
        btnMene.classList.remove("bg-blue-500")
        btnMene.classList.add("bg-blue-300")
        btnMene.disabled = true;
    }
})

btnEden.addEventListener("click",function () {
    playerCount++
    altMiximum()
    if(playerCount <= 5){
        addList("Eden Hazard")
        btnEden.classList.remove("bg-blue-500")
        btnEden.classList.add("bg-blue-300")
        btnEden.disabled = true;
    }
})

btnPogba.addEventListener("click",function () {
    playerCount++
    altMiximum()
    if(playerCount <= 5){
        addList("Paul Pogba")
        btnPogba.classList.remove("bg-blue-500")
        btnPogba.classList.add("bg-blue-300")
        btnPogba.disabled = true;
    }
})



// Player Budget 


const perPlayerin = document.getElementById("perPlayerin")
const perPlayerbtn = document.getElementById("perPlayerbtn")
const totalPlayerCost = document.getElementById("totalPlayerCost")

perPlayerbtn.addEventListener("click",function () {
    let playerCost = parseInt(perPlayerin.value)
    playerCount > 5 ? playerCount = 5: playerCount;
    if(playerCost <= 0 || isNaN(playerCost)){
        perPlayerin.value = ''
    }
    playerCost *= playerCount
    totalPlayerCost.innerText = playerCost
})


const mangerIn = document.getElementById("mangerIn")
const coachIn = document.getElementById("coachIn")
const totalCostBtn = document.getElementById("totalCostBtn")
const totalCost = document.getElementById("totalCost")


totalCostBtn.addEventListener("click",function () {
    let mangerCost = parseInt(mangerIn.value)
    let coachCost = parseInt(coachIn.value)
    let PlayerCost = parseInt(totalPlayerCost.innerText)
    console.log(mangerCost,coachCost,PlayerCost)
    let totalAllCost = mangerCost + coachCost + PlayerCost
    totalCost.innerHTML = totalAllCost
})