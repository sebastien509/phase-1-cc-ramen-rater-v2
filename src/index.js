// index.js
const ramenBox = document.querySelector('#ramen-detail')
const ramenMenu = document.querySelector('#ramen-menu')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')

const submitForm = document.querySelector('#new-ramen')
const restoSubmit = document.querySelector('#new-restaurant')

const ramenInfo = document.querySelector('#ramen-detail')
const updatedForm = document.querySelector('#update-ramen')


// Page refresh Mods


// Async-await FETCH function 
async function getRamenToBox() {
  const response = await fetch('http://localhost:3000/ramens');
  console.log(response)
  const data = await response.json()
  console.log(data)
  
  data.forEach(ramenBar)
  
  
  
  const firstNameDisplay = document.querySelector('.name')
  firstNameDisplay.textContent = data[0].name
  
  const firstRestaurantNameDisplay = document.querySelector('.restaurant')
  firstRestaurantNameDisplay.textContent = data[0].restaurant
  
  
  const firstRatingDisplay = document.querySelector('#rating-display')
  firstRatingDisplay.textContent = data[0].rating
  
  const firstCommentDisplay = document.querySelector('#comment-display')
  firstCommentDisplay.textContent = data[0].comment
  
  const firstRamenImage = document.querySelector('#ramen-image')
  firstRamenImage.src = data[0].image
};



//  callback function
function ramenBar(data){
  const ramenImage = document.createElement('img')
  ramenImage.src = data.image
  ramenMenu.append(ramenImage)
  
  // Callbacks
  ramenImage.addEventListener('click', ()=> handleClick(data))
  
}

const handleClick = (data => {
  // console.log(data)
  // Add code 
    ramenBox.innerHTML = ""
    ramenRating.innerHTML = ""
    ramenComment.innerHTML = ""
    
    const popUpImage = document.createElement('img')
    popUpImage.classList = 'detail-image'
    popUpImage.src = data.image
    ramenBox.append(popUpImage)
    
    const ramenName = document.createElement('H2')
    ramenName.textContent = data.name
    ramenName.className = 'name'
    ramenBox.append(ramenName)
    
    
    const ramenRestaurant = document.createElement('h3')
    ramenRestaurant.textContent = data.restaurant
    ramenRestaurant.className ='restaurant'
    ramenBox.append(ramenRestaurant)
    
    const rating = document.createElement('span')
    rating.textContent = data.rating
    ramenRating.append(rating)
    
    const comment = document.createElement('p')
    comment.textContent = data.comment
    ramenComment.append(comment)
    
    let ramenData = {
      id: data.id,
      rating: data.rating,
      comment : data.comment
    }

    
    
    updatedForm.addEventListener('submit',async (event) => {;
      event.preventDefault()
      // const rating = ramenRating
      // const comment = ramenComment
      
      const newRating = document.querySelector('#update-rating').value
      const newComment = document.querySelector('#update-comment').value
      
      ramenData.rating = newRating
      ramenData.comment = newComment
      
      // function renderRamenData(){
      //   ramenInfo.querySelector('#rating-display').textContent = ramenData.rating
      //   ramenInfo.querySelector('#comment-display').textContent = ramenData.comment
      // }
  
      
      // const updateData ={newRating, newComment} 
      
      await fetch(`http://localhost:3000/ramens/${ramenData.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({rating: ramenData.rating, comment: ramenData.comment})
        
      })
    })
  });
  

  getRamenToBox()
  
  
  const addSubmitListener = (event) => {
    event.preventDefault()
    
    const newRamen = document.querySelector('#new-name')
    const nameInput = newRamen.value
    
    const newRamenRestaurant = document.querySelector('#new-restaurant')
    const restaurantInput = newRamenRestaurant.value
    
    const newRamenImage = document.querySelector('#new-image')
    const imageInput = newRamenImage.value
    
    const newRating = document.querySelector('#new-rating')
    const ratingInput = newRating.value
    
    const newComment = document.querySelector('#new-comment')
    const commentInput = newComment.value
    
    // const newRamenRating = document.querySelector('')
    
    // const newRamenComment = document.querySelector('')
    
    
    const response = fetch("http://localhost:3000/ramens",{
      method:"POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({name: nameInput, restaurant: restaurantInput, image: imageInput, rating: ratingInput, comment: commentInput },)
    })}
    
    const displayRamens = () => {
      // Add code 
    };
    
    const main = () => {
      // Invoke displayRamens here
      // Invoke addSubmitListener here
    }
    
    main()
    
    // Export functions for testing
    export {
      displayRamens,
      addSubmitListener,
      handleClick,
      main,
    };

    
    submitForm.addEventListener('submit', addSubmitListener)
    