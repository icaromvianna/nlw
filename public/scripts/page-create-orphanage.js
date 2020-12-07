//create map
const map = L.map('mapid').setView([-19.9651902,-44.200796], 15);

//create and add tile layer 
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
})

let marker

//create and add marker

//quando clicar a funcao vai ser executada.
map.on('click',(event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker) //se ja existir o marker ele remove o anterior

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//photos uploads
function addPhotoField(){
    //pegar o container de foto #images
    const container = document.querySelector("#images")

    //pegar o container para duplicar .new-image
    const fieldContainer = document.querySelectorAll(".new-upload")
   
    //realizar o clone da ultima imagem adicionada
    const newFiledContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    
    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFiledContainer.children[0]

    if(input.value == ""){
        return
    }else{
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    //adicionar o clone ao container de #images
    container.appendChild(newFiledContainer)
    }
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()

}

//selecionar sim e não
function toggleSelect(event) {
    //pegar o botao clicado

    //verificar se sim ou nao 
    

    //atualizar o meu iput hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')


    //retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active')) //função simplificada arrow function

    //colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    input.value = button.dataset.value
}

function validate(event) {
    
    // validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}