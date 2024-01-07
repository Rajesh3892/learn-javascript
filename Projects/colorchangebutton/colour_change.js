const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // console.log(e.target.id)
        /*if (e.target.id == 'gray') {
            body.style.backgroundColor = e.target.id
        } if (e.target.id == 'red') {
            body.style.backgroundColor = e.target.id
        } if (e.target.id == 'green') {
            body.style.backgroundColor = e.target.id
        } if (e.target.id == 'orange') {
            body.style.backgroundColor = e.target.id
        }*/
        // Using switch case
        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = e.target.id
                break;
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    });
});