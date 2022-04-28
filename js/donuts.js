const listBtn = document.querySelectorAll(".donuts_list_btn");
//console.log(listBtn);
for(let i = 0; i < listBtn.length; i++){
    listBtn[i].addEventListener("click", (e) => {
        //e.preventDefault();
        console.log(listBtn[i]);
      });
}

