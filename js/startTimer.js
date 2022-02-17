let stop = document.querySelector('.btn-stop');

let audio = new Howl({
    src: ['./audio/gong.mp3']
});

export function startTimer() {
    let h = +document.getElementById('h').value;
    let m = +document.getElementById('m').value;
    let s = +document.getElementById('s').value;
    let totalOfMilliseconds = (h * 60 * 60 + m * 60 + s) * 1000;

    let goInterval = setInterval(() => {
        totalOfMilliseconds = totalOfMilliseconds - 1000;
        document.getElementById('h').value = Math.floor(totalOfMilliseconds / 1000 / 60 / 60) % 24;
        document.getElementById('m').value = Math.floor(totalOfMilliseconds / 1000 / 60) % 60;
        document.getElementById('s').value = Math.floor(totalOfMilliseconds / 1000) % 60;
        console.log(totalOfMilliseconds);
    }, 1000);

    let goTimeout = setTimeout(() => {
        clearInterval(goInterval);
        console.log('stop');
        audio.play();
    }, totalOfMilliseconds);

    stop.onclick = (event) => {
        event.preventDefault();
        clearInterval(goInterval);
        clearTimeout(goTimeout);
        console.log('stopBTN');
    }
}