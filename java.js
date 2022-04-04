const img = [
    "https://media.istockphoto.com/photos/snowstorm-in-the-mounatins-picture-id824914792?b=1&k=20&m=824914792&s=170667a&w=0&h=Y7tWXP3-nUy8orbZ7bE1eDySGYTfzWnyJgLUg9EoQQ0=",
    "https://images.unsplash.com/photo-1647891938203-5142145668ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJ8Z58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1519873174361-37788c5a73c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://media.istockphoto.com/photos/globularia-cordifolia-flower-in-mountains-close-up-picture-id1385613138?b=1&k=20&m=1385613138&s=170667a&w=0&h=GzGYs63VKh5qV72kZHNdpOtCtut60kRvs9_h7nkJ_6k=",
    "https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
];

    var currentImageIndex = 0;
    function onNextClick() {
        currentImageIndex++;
        if(currentImageIndex >= img.length) {
            currentImageIndex = 0;
        }
        var imgBox = document.getElementById("imgCarousel");
        imgBox.style.backgroundImage = "url(" + img[currentImageIndex] + ")";
    }

    function onPreviousClick() {
        currentImageIndex--;
        if(currentImageIndex < 0) {
            currentImageIndex = img.length - 1;
        }

    var imgBox = document.getElementById("imgCarousel");
        imgBox.style.backgroundImage = "url(" + img[currentImageIndex] + ")";
    }

    setTimeout(() => {
    console.log('display first img')
    getImgCarousel().style.backgroundImage = "url(" + img[0] + ")";
},1000) 