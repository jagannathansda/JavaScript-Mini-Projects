const generator = document.getElementById('b1');
const num = document.getElementById('myh1');
// const min = Number(document.getElementById('minn').value);
// console.log(min);
// const max = Number(document.getElementById('maxx').value);
// console.log(max);

generator.onclick = function () {
    const minn = Number(document.getElementById('minn').value);
    const maxx = Number(document.getElementById('maxx').value);
    const min = Math.min(minn,maxx);
    const max = Math.max(minn,maxx);
    
    randomnum = Math.floor(Math.random() * (max - min) + min);
    num.textContent = randomnum;
}