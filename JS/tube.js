const getCategory = async () => {
   const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/categories`
   );
   const data = await res.json();
   setCategory(data.data);
};
const setCategory = (categories) => {
   const categorieContainer = document.getElementById("category-container");
   categories.forEach((element) => {
      const div = document.createElement("div");

      div.innerHTML = `<button id="btn" onclick="getData(${element.category_id})" class="btn text-lg font-semibold rounded-md">
        ${element.category}
     </button>`;
      // console.log(element.category_id);
      categorieContainer.appendChild(div);
   });
};
const getData = async (id) => {
   const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
   );
   const data = await res.json();
   const massageId = document.getElementById("massage");
   massageId.innerText = "";
   massageId.innerText = data.message;
   // console.log(data)
   setLodedData(data.data);
};
const setLodedData = (cardCategoris) => {
   const cardContainer = document.getElementById("card-container");
   cardContainer.innerHTML = "";
   cardCategoris.forEach((element) => {
      // console.log(element);
      const div = document.createElement("div");
      div.innerHTML = ` <div class="card bg-base-100 shadow-xl p-2 space-y-4">
            <figure class="w-[315px] h-[210px]">
               <img
                  src="${
                     element.thumbnail
                        ? element.thumbnail
                        : "/Design in png/Icon.png"
                  }"
               />
            </figure>
            <div class="flex items-start gap-2">
               <div class="w-10 h-10 bouded-full">
                  <img src="${element.authors[0].profile_picture}" alt="" />
               </div>
               <div class="space-y-2">
                  <h2 class="card-title">${element.title}</h2>
                <div class="flex gap-1">
              <p>${element.authors[0].profile_name}</p>
              <img src="${
                 element.authors[0].verified ? "/Design in png/true.png" : ""
              }">
              </div>
                  <p>${element.others.views} <span>Views</span></p>
               </div>
            </div>
         </div>`;
      cardContainer.appendChild(div);
   });
};

const sortByView = async () => {
   const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/1000`
   );
   const data = await res.json();
   data.data.forEach((element) => {
      console.log(element.others.views);

})};
sortByView()

getCategory();
getData(1000);
