import { Details } from './display.js';
let getDetails = new Details()
const searchParam = location.search
const params = new URLSearchParams(searchParam)
const idGames = params.get('id')

async function detailsPage(){
    let allDetails = await getDetails.detailsData(idGames)
    /*########### Close Page By Escape ###########*/
    $(document).on('keydown',function(e){
        if(e.key == "Escape"){
            location.href = '../index.html'
        }
    })
    /*########### Close Page By Exit (X) ###########*/
    $('.head-details i').on('click', function(){
        location.href = '../index.html'
    })
    return allDetails
}
detailsPage()