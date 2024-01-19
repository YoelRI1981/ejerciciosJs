const main$$ = document.querySelector('main');



const getDiary = async ()=> {
const response = await fetch(`http://localhost:3000/diary`);
const result = await response.json();
//console.log(result);
const dateOrdenado = result.sort((a, b) =>
{const dateA = new Date (a.date)
const dateB = new Date (b.date)
return dateA - dateB

})
const paintDates = (diaryDatas) => {
    for (const diaryData of diaryDatas) {
        let datasDiv$$ = document.createElement('div');
        datasDiv$$.innerHTML = `
        <h3>${diaryData.title}</h3>
        <h5>${diaryData.date}</h5>
        <p>${diaryData.description}</p>
        <button>X</button>   
        `
        const button = datasDiv$$.querySelector('button')
        
        
       
main$$.appendChild(datasDiv$$)  
button.addEventListener('click', () => datasDiv$$.remove()) 

     //console.log(result.title);
    }
    
}
paintDates(result);
}



   getDiary();



   

