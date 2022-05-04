const listBtn = document.querySelectorAll(".donuts_list_btn");
//console.log(listBtn);
for(let i = 0; i < listBtn.length; i++){
    listBtn[i].addEventListener("click", (e) => {
        //e.preventDefault();
        console.log(listBtn[i]);
      });
}

// --------------------------------------------------------------------------

let donut_data = {
  "YEAST":[
      {"src":"./image/donuts/d_03.png", "h5":"Vanilla Bean", "h4":"$70"},
      {"src":"./image/donuts/d_04.png", "h5":"Cinnamon, Cardamom", "h4":"$65"}
  ],
  "CAKE":[
      {"src":"./image/donuts/d_01.png", "h5":"Hot Cross", "h4":"$85"},
      {"src":"./image/donuts/d_02.png", "h5":"Maple Walnut & Butter", "h4":"$85"}
  ],
  "CIDER":[
      {"src":"./image/donuts/d_05.png", "h5":"Earl Grey", "h4":"$75"},
      {"src":"./image/donuts/d_06.png", "h5":"Matcha", "h4":"$75"},
      {"src":"./image/donuts/d_07.png", "h5":"Chai Tea", "h4":"$70"}
  ],
  "BOSTON_CREAM":[
      {"src":"./image/donuts/d_10.png", "h5":"Apple Pie", "h4":"$95"},
      {"src":"./image/donuts/d_11.png", "h5":"Boston Cream", "h4":"$75"},
      {"src":"./image/donuts/d_12.png", "h5":"Fluffernutter", "h4":"$85"}
  ],
  "CRULLER":[
      {"src":"./image/donuts/d_08.png", "h5":"Iced Coffee", "h4":"$70"},
      {"src":"./image/donuts/d_09.png", "h5":"Honey & Sea Salt", "h4":"$65"}
  ]
};


//查詢參數
let search_obj = new URLSearchParams(location.search);
let donut_index = search_obj.get("donut");


//塞資料
const donuts_items_ul = document.getElementById("donuts_items_ul");
let dount_items = donut_data[donut_index];
let donut_html = '';

if(donut_index === null){

  for(let all_dount_index in donut_data){
    //console.log(all_dount_index);

    dount_items = donut_data[all_dount_index];

    for(let i=0; i<dount_items.length; i++){
      donut_html += `
      <li>
        <a href="#">
          <div class="donuts_container">
              <img class="donuts_item" src="${dount_items[i]["src"]}" alt="">
          </div>
          <h5>${dount_items[i]["h5"]}</h5>
          <h4>${dount_items[i]["h4"]}</h4>
        </a>
      </li>
      `;
    }
  }

  donuts_items_ul.insertAdjacentHTML("beforeend", donut_html);
  

}else{

  for(let i=0; i<dount_items.length; i++){
    donut_html += `
    <li>
      <a href="#">
        <div class="donuts_container">
            <img class="donuts_item" src="${dount_items[i]["src"]}" alt="">
        </div>
        <h5>${dount_items[i]["h5"]}</h5>
        <h4>${dount_items[i]["h4"]}</h4>
      </a>
    </li>
    `;
  }
  
  donuts_items_ul.insertAdjacentHTML("beforeend", donut_html);

}







