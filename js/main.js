import { Games } from './display.js'
let getGames = new Games()

async function homeGame(category = 'mmorpg'){
    let allData = await getGames.getGames(category)
    /*########### Active Link ###########*/
    $('nav .navbar-nav .nav-item').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        const category = $(this).attr('data-category')
        $('.loading').removeClass('d-none')
        homeGame(category)
    });
    /*########### Get Game ID And Add To URL ###########*/
    $('.game-info').on('click',function(){
        let id = $(this).attr('data-id')
        location.href= `./details.html?id=${id}`
    })
    /*########### Navbar Background Change ###########*/
    $(window).on('scroll', function(){
        if(document.documentElement.scrollTop > 50){
            $('nav').css({
                'background-color': '#000',
                'box-shadow':'0 0 5px 5px #333' 
            })
        } else{
            $('nav').css({
                'background-color': '#14111471',
                'box-shadow':'none' 
            })
        }
    })
    return allData
}

homeGame()

