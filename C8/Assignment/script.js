const images = [
    {
        link: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture1',
        description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
        name: 'Picture2',
        description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80',
        name: 'Picture3',
        description: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture4',
        description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
        name: 'Picture5',
        description: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'Picture6',
        description: '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture7',
        description: '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
        name: 'Picture8',
        description: '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture9',
        description: '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture10',
        description: '10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    },
    {
        link: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80',
        name: 'Picture11',
        description: '11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec posuere lectus.'
    }
];

let counterImg = 0;

window.addEventListener('load', (event) => {
    this.updateElements();
});

function nextPicture () {
    counterImg++;
    if (counterImg > images.length - 1) { // 0 1 2 / len 3 - 1 = 2
        counterImg = 0;
    }
    this.updateElements();
    this.hidePicture();
}

function previousPicture () {
    counterImg--;
    if (counterImg < 0) {
        counterImg = images.length - 1;
    }
    this.updateElements();
    this.hidePicture();
}

function updateElements () {
    document.getElementById('picture').setAttribute('src', images[counterImg].link);
    document.getElementById('counter').innerText = `${counterImg} / ${images.length - 1}`
}

function showPictureInfo () {
    document.getElementById('showContent').hidden = false;
    document.getElementById('name').innerText = images[counterImg].name;
    document.getElementById('description').innerText = images[counterImg].description;
}

function hidePicture () {
    document.getElementById('showContent').hidden = true;
}

async function downloadImage() {
    const image = await fetch(images[counterImg].link);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = images[counterImg].name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
