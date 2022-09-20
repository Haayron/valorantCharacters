// selecionando todos os elementos necessários

const filterItem = document.querySelector('.items');
const filterImg = document.querySelectorAll('.image');

 

window.onload = () => { // qnd a janela carregar
    filterItem.onclick = (selectedItem) => { 
        if(selectedItem.target.classList.contains('item')){ // qnd o usuario clicar na div .item
            filterItem.querySelector('.active').classList.remove('active'); // removendo active do 'Todos'
            selectedItem.target.classList.add('active'); // add a classse ativa onde o usuario clicar
           let filterName = selectedItem.target.getAttribute('data-name'); /*pegando o data name value que o usuario selecionou e guardando na variavel filterName*/
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute('data-name'); // pegando image data-name value
                       // se o data-name selecionado for igual ao valor data-name da imagem
                // ou se o data-name selecionado for igual a 'all'
                if((filterImages == filterName) || filterName == 'all'){
                    image.classList.remove('hide');
                    image.classList.add('show');
                } else {
                    image.classList.add('hide')
                    image.classList.remove('show');
                }
            });
        }  
    }
}


// Barra de pesquisa
 

function searchThings (){
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();

    let x = document.getElementsByClassName('image');

    for(i = 0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display='none';
        } else {
            x[i].style.display='image';
        }
    }
    
}
   
    
// darkmode

const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, '--bg'),
    bgHover: getStyle(html, '--bg-hover'),
    bgCards:  getStyle(html, '--bg-cards'),
    bgButton: getStyle(html, '--bg-button'),
    nickColor: getStyle(html, '--nick-color'),
    borderMenu: getStyle(html, '--border-menu'), 
    borderImg: getStyle(html, '--border-img'),
    borderInput: getStyle(html, '--border-input'), 
    txtColor: getStyle(html, '--txt-color'),  
    txtHover: getStyle(html, '--txt-hover'), 
    txtInput:  getStyle(html, '--txt-input'),
    txtShadow: getStyle(html, '--txt-shadow')
}

const darkMode = {
    bg: '#00121E',
    bgHover: '#060a0e', 
    bgCards: 'linear-gradient( rgb(44, 111, 255), black )', 
    bgButton: '#ff4349',
    nickColor: '#1094ff',
    borderMenu: '2px groove #f290ff', 
    borderImg: '2px solid black', 
    borderInput:'2px solid white', 
    txtColor: 'rgb(232, 193, 255)', 
    txtHover: '#ff4349', 
    txtInput:  'rgb(155, 165, 255)',
    txtShadow: 'blue 0.1em 0.1em 0.7em'
}

const transformKey = key => 
    '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()


const changeColors = (colors) => {
     Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
     })

}

checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


/* audio */

const button = document.querySelector('button');
button.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play()
})


 