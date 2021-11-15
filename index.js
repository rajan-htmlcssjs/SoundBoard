const audioContainer = document.getElementById('btn-container')
const sounds = ['applause','boo','victory']

sounds.forEach( sound => {
    const btn = document.createElement('button')
    btn.innerText = sound
    btn.classList.add('btn')
    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    audioContainer.append(btn)

})

function stopSongs(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}