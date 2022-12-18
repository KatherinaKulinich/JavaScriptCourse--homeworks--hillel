const container = document.querySelector('.content');


function showProductInfo(elem) {
    container.append(createCard(elem))
}


if (history.state) {

    for (let prod of productsList) {
        if (prod.id === history.state.id) {
            showProductInfo(prod);
        }
    }
}





