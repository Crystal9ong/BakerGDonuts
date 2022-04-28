const change = document.querySelector(".faqs_title");

//const afterStyle = window.getComputedStyle(change, ":after");

//console.log(afterStyle);

const q_containers = document.querySelectorAll(".q_container");
const faqs_titles = document.querySelectorAll(".faqs_title");
const ans_containers = document.querySelectorAll(".ans_container");

//console.log(q_containers.length);

for(let i=0; i< q_containers.length; i++){

    //console.log(q_containers[i]);
    q_containers[i].addEventListener("click", e => {
        if(document.getElementsByClassName("faqs_title_open").length != 0){
            document.getElementsByClassName("faqs_title_open")[0].classList.remove("faqs_title_open");
            document.getElementsByClassName("ans_container_open")[0].classList.remove("ans_container_open");
        }
        faqs_titles[i].classList.toggle("faqs_title_open");
        ans_containers[i].classList.toggle("ans_container_open");

    
    });
}
