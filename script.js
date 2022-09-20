const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const videoContainer = document.querySelector('.video-container');
let searchLink = "https://www.youtube.com/results?search_query=";


searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
});



fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=NG&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let youtubeContainer =document.querySelector(".video-container")
    for(item of videos){
        // console.log(`${item.id}`)
        youtubeContainer.innerHTML +=`
            <div class="video" >
                <div class="content">
                	<img src="${item.snippet.thumbnails.high.url}" class="thumbnail" alt="" onclick="location.href ='https://www.youtube.com/watch?v=${item.id}'">
                    <div class="info">
                        <h5 class="title">${item.snippet.title} </h5>
                        <p class="channel-name">${item.snippet.channelTitle}</p>
                    </div>
                </div>
            <div>
        `
    }
    
})
.catch((error)=>{
    console.log(error)
})


