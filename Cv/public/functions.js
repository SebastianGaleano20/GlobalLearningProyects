document.addEventListener('DOMContentLoaded', ()=>{
    //Funcion para botones en SobreMi
    const btnData = document.getElementById('data-btn');
    const btnHobbie = document.getElementById('hobbie-btn');
    const btnEdu = document.getElementById('education-btn');
    const infoData = document.getElementById('txt-data');
    const infoHobbie = document.getElementById('txt-hobbie');
    const infoEdu = document.getElementById('txt-edu');

    btnData.addEventListener('click', ()=>{
        showTxt(infoData);
    })
    btnHobbie.addEventListener('click', ()=>{
        showTxt(infoHobbie);
    })
    btnEdu.addEventListener('click', ()=>{
        showTxt(infoEdu);
    })

    const showTxt = (info) => {
         const allTxt = document.querySelectorAll('.txt');
         allTxt.forEach((p)=>{
            p.style.display = 'none' 
         })
         info.style.display = 'block'
    }

})