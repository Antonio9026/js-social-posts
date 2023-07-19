const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15",
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10",
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20",
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29",
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// seleziono elemento contenitore dei post
const postContainer = document.getElementById("container")

posts.forEach(element => {
    postContainer.innerHTML += ` <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.author.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src="${element.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#0" data-postid="${element.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
</div> `
});




// seleziono tutti i button dei post 
const btnLike = document.querySelectorAll(".js-like-button");
// console.log(btnLike);

// creo un array da popolare con gli id dei post dove ho messo like 
let likesArray = []

// creo cilo for each per selezionare ogni button 
btnLike.forEach((element) => {

    // creo un contatore che sia equivalente al id dei post 
    const counter = element.getAttribute("data-postid")

        // seleziono il counter che corrisponde all'id 
        const likeCounter = document.getElementById(`like-counter-${counter}`)

        // creo oggetto con proprietà id da aggiungere all' array ogni volta che clicco su like
        let newObject = { id: counter };

    //  creo evento al click quando clicco sul bottone like 
    element.addEventListener("click", 
    function () {
        
        
        // creo condizione al click sul button like 
        if (element.classList.contains("like-button-liked")) { //se l'elemeno è liked(già cliccato)classe
            element.classList.remove("like-button-liked") //rimuovi classe

            //  tolgo li like dal contatore 
            likeCounter.innerHTML = parseInt(likeCounter.innerHTML) - 1;

            // tolgo id da array 
            likesArray = likesArray.filter(
                function (object) {
                    return object.id !== counter;

                }
            )
            // Altrimenti 
        } else {
            // aggiungo classe al click 
            element.classList.add("like-button-liked")
            // aggiungo like al counter 
            likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;

            // pusho id nell'array
            likesArray.push(newObject)

        }
        console.log(likesArray);
    });
});

