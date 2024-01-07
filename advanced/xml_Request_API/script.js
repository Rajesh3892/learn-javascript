const jsonWraper = document.querySelector('.jsonWraper')
const submit = document.querySelector('#submit')
submit.addEventListener('click', () => {
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const proImage = document.createElement('div')
            proImage.className = "pro-image"
            proImage.innerHTML = `<img src="${JSON.parse(this.response).avatar_url} style:"width=200px">`
            const userInfo = document.createElement('div');
            userInfo.className = "user-info";
            userInfo.innerHTML = `<h3>${JSON.parse(this.response).name}</h3>`
            jsonWraper.appendChild(proImage, userInfo)
            jsonWraper.appendChild(userInfo)
        }
    }
    xhr.send()
})