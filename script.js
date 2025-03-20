let dis = document.getElementById('display');
let task = document.getElementById('task');
let txt = document.getElementById('text')

function add(){
 if(dis.value==""){
alert('please inter your task');
 }else{
    let ad = document.createElement('ul');
 ad.innerHTML = `${dis.value} <i class="fa fa-trash"></i>`;
 txt.appendChild(ad);
 dis.value="";
 ad.querySelector('i').addEventListener('click',remove);
 function remove(){
   ad.remove()
 }

}
};

