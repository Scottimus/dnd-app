//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch) //Event listener

function getFetch(){
  const choice = document.querySelector('input').value //Grab value from input
  const url = `https://www.dnd5eapi.co/api/spells/${choice}` //fetch the data from the API

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subclasses) //Console log to see if it works (web.postman.co)
       // console.log(data.subclasses[0].name)
       // console.log(data.subclasses[1].name)
       data.subclasses.forEach( obj => {   //use forEach to loop through EACH item
           console.log(obj.name)
           //create an li
           const li = document.createElement('li') //Created a list (li)
           //add text to li
           li.textContent = obj.name //Makes the li the item from the obj
           //append the li to the ul
           document.querySelector('ul').appendChild(li) //append the li to the ul in the HTML
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//acid-arrow
//beacon-of-hope