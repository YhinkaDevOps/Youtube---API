
fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=NG&key=AIzaSyCJ8IYdyJgbQqhUhoXl9gWNCRYJLJlUVqE")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let youtubeContainer =document.querySelector(".video-container")
    for(item of videos){
        // console.log(`${item.snippet.channelTitle}`)
        youtubeContainer.innerHTML +=`
            <div class="video" onclick="video_location = 'https'">
                <div class="content">
                	<img src="${item.snippet.thumbnails.high.url}" class="thumbnail" alt="">
                    <div class="info">
                        <h4 class="title">${item.snippet.title} </h4>
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

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

