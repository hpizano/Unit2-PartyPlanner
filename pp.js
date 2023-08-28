const div = document.querySelector('.events')
let planner = [] ;

function renderEvents() {
    const html = planner.map(function(event){
        return `<h3> Event: ${ event.name } </h3
        <p> ${event.description} </p> 
        <p> Location: ${event.location} </p>
        <ul> <li> Date/Time: ${event.date} </li> </ul>
        `
    }).join('') ;
    return html ;
}

async function fetchEvents(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events') ;
    const json = await response.json() ;
    planner = json ;
    renderEvents() ;

}

fetchEvents() ;