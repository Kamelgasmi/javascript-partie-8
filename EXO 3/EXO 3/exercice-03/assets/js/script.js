window.onscroll = function(){ /* fonction auscroll*/
    var paragraphList = document.getElementsByTagName('p');/* on fait une variable qui prend en compte tous les elements p*/
    var index = parseInt(window.pageYOffset / 50);/*var index = scroll fait sur la page divisé par 50 pixels*/
        if(index < paragraphList.length){ /*condition: si index est inferieur a la longueur du nombre de paragraphe*/
            paragraphList[index].style.display = 'block';/* alors on affiche le paragraphe*/
        }
}