var allProducts = [];
var edInd = 0;
function add(){
  Erro.innerHTML = "";

  if (product.value != "" && des.value != ""  && price.value != "") {
    obj = {
      title: product.value,
      des: des.value,
      price: price.value,
    };
    allProducts.push(obj);
    meter();
  } else {
    Erro.innerHTML = `<p style="color:red; text-align: center; font-size:20px; font-weight: 400;">Input must be filled </p>`;
  }
  product.value= "";
  des.value = "";
  price.value = "";
}

function meter() {
  display.innerHTML = "";
  display.innerHTML = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col" class=' col-4'>S/N</th>
      <th scope="col" class=' col-4'>Title</th>
      <th scope="col" class=' col-4'>description</th>
      <th scope="col" class=' col-4'>price</th>
      <th scope="col" class='  text-center col-4'>Action</th>
    </tr>
  </thead>

</table>
      `;
  for (let i = 0; i < allProducts.length; i++) {
    display.innerHTML += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${allProducts[i].title}</td>
        <td>${allProducts[i].des}</td>
        <td> ${allProducts[i].price}</td>
        <td class='d-flex'>
        <button style="border: none; background-color: red; color:white;  text-align: center; padding: 10px 20px 10px 20px; border-radius: 5px; margin:10px;" onclick="edit(${i})">Edit</button>
        <button style="border: none; background-color: blue; color:white;  text-align: center; padding: 10px 20px 10px 20px; border-radius: 5px; margin:10px;" onclick="del(${i})">Delete</button>
        </td>
      </tr>
     
            `;
  }
}

function del(ind) {
    var  confirmalert=confirm("Are you sure you want to delete")
 
 if (confirmalert) {
    allProducts.splice(ind, 1);
 } 
  meter();
}

function edit(ind) {
  repDiv.style.display = "block";
  edInd = ind;
}

function change() {
  newObj = {
    title: repTitle.value,
    detail: repDetails.value,
  };
  allProducts.splice(edInd, 1, newObj);
  meter();
  repDiv.style.display = "none";
  edInd = 0;
}
