const baseUrl = `https://api.nationalize.io?name= `;


  const input$$  = document.querySelector('input')
  const button$$ = document.querySelector('button')

const evento = () => {
 fetch(`${baseUrl}${input$$.value}`)
.then((response) => response.json())
.then((resjson) => drawData(resjson));
  }
  
  drawData = ({country, name}) => {
    console.log(country)

for (const element of country) {
  let p = document.createElement('p');
  p.textContent = `El nombre ${name} tiene un ${element.probability * 100} porciento de ser de ${element.country_id}.`
  

  document.body.appendChild(p);

}

  }

  
button$$.addEventListener('click', evento) 
  
 


