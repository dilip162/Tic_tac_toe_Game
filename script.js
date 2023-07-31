const col=document.querySelectorAll('.col')
let array=Array(9).fill(null)
let currentPlayer='X'
const winner=document.querySelector('#winner')
const restart=document.querySelector('#restart')

restart.addEventListener('click',()=>{
    location.reload()
})

function checkWinner(cha){
    if(
        (array[0]!==null && array[0]==array[1] && array[1]==array[2]) ||
        (array[3]!==null && array[3]==array[4] && array[4]==array[5]) ||
        (array[6]!==null && array[6]==array[7] && array[7]==array[8]) ||
        (array[0]!==null && array[0]==array[3] && array[3]==array[6]) ||
        (array[1]!==null && array[1]==array[4] && array[4]==array[7]) ||
        (array[2]!==null && array[2]==array[5] && array[5]==array[8]) ||
        (array[0]!==null && array[0]==array[4] && array[4]==array[8]) ||
        (array[2]!==null && array[2]==array[4] && array[4]==array[6])

    ){
       winner.innerHTML=`The winner is ${cha}`
       restart.style.display='block'
        return;
    }
    if(!array.some((e)=>e===null)){
        winner.innerHTML=`Draw !!!`;
        restart.style.display='block'
    }
}


col.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const id=e.target.id
        if(array[id]!== null) return;
        array[id]=currentPlayer;
        champ=currentPlayer=='X'?"0":"X"
        checkWinner(champ)
        currentPlayer=currentPlayer=='X'?"0":"X";
        e.target.innerHTML=currentPlayer;
        
    })
})

console.log(restart)

