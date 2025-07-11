async function getsongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}
const playMusic = (track) => {
  let audio = new Audio("/songs/" + track)
     audio.play()
}

async function main() {

  let songs = await getsongs();
  console.log(songs);
  let songul = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songul.innerHTML =
      songul.innerHTML +
      ` <li>
     
              <img class="invert" src="music.svg" alt="">
              <div class="info">
                <div> ${song
                  .replaceAll("%20", " ")
                  .replaceAll("y2mate.com", " ")
                  .replaceAll("Blockbuster Song Of 2013.mp3", " ")
                  .replaceAll("Full Video Song ", " ")
                  .replaceAll("Yo Yo Honey Singh", " ")
                  .replaceAll(" Yeh Jawaani Hai Deewani ", " ")
                  .replaceAll("Ranbir Kapoor Deepika Padukone", " ")
                  .replaceAll("mp3", " ")
                  .replaceAll("Pritam.", " ")
                  .replaceAll("Full Song  Pritam", " ")
                  .replaceAll("Full Video ", " ")
                  .replaceAll(" YoYoHoneySingh", " ")
                  .replaceAll(".", " ")
                  .replaceAll(" SONG GLORY BHUSHAN KUMAR", " ")
                  .replaceAll("-", " ")
                  .replaceAll("Pritam", " ")}</div>
                <div>Honey Singh </div>
              </div>
              <div class="playnow">
                <span>Play Now </span>
                <img class="invert" src="play.svg" alt="">
              </div>
         
        
        
        
        
        
        
        </li>`;
  }
  Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click", element => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML)
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    })
  })
}
main();