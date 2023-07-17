const ratings = document.querySelectorAll("span")
const ratingContainer = document.querySelector(".rating-container")

// const ratingsArr = [...ratingContainer.children]
const submitBtn = document.querySelector("#submit")


console.log(ratingContainer.children)



// ratingsArr.forEach(item =>  item.addEventListener("click", () => {
//     const userRating = item.getAttribute("data-rating")
//      outputRating(userRating)

//     const div = document.createElement("div")
//     const para = document.createElement('p')
//     const text = document.createTextNode( userRating )

//     para.appendChild(text)
//     div.appendChild(para)
//     document.body.appendChild(div)
//     })
// )

let userRate;

ratingContainer.addEventListener("click", (e) => {

    const items = document.querySelectorAll(".rating")    
    items.forEach(item => {
        item.classList.remove("active")
    })

    if( e.currentTarget === document.querySelector(".rating-container") ){
        e.target.classList.add("active")
    }
    console.log(items)
    let userRating = e.target.classList.contains("rating") ?  e.target.getAttribute("data-rating") : console.log(false)
    userRate = userRating

})


const onBtnSubmit = (value) => {

    if(userRate === undefined){
        alert("please select rating")
        return
    }
    toggleModal()
    createUserRes( )
    

}

function toggleModal (){
    document.querySelector(".main").classList.toggle('hide')
    document.querySelector(".modal").classList.toggle("hide")
}

function createUserRes(userRes){
 return userRes = document.querySelector('.user-response').textContent = `You selected ${userRate} out of 5` 

}



submitBtn.addEventListener("click", onBtnSubmit)



   