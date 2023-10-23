allproducts=[];
console.log(allproducts);
function add(){
if (product.value != "" && des.value != "" && price.value != "") {
    obj = {
      title: product.value,
      des: des.value,
      price: price.value,
    };
    allproducts.push(obj);
    meter();
  } else {
    showerr.innerHTML = `<p style="color:red; text-align: center; font-size:20px; font-weight: 400;">Input must be filled </p>`;
  }
}
function meter() {
    disp.innerHTML = "";
    disp.innerHTML = `
      <table class="table">
    <thead>
      <tr>
        <th scope="col" class=' col-4'>S/N</th>
        <th scope="col" class=' col-4'>Title</th>
        <th scope="col" class=' col-4'>Details</th>
        <th scope="col" class='  text-center col-4'>Action</th>
      </tr>
    </thead>
  
  </table>
        `;
  }
  for (let i = 0; i < allproducts.length; i++) {
    disp.innerHTML += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${allproducts[i].title}</td>
        <td>${allproducts[i].des}</td>
        <td>${allproducts[i].price}</td>
        
      </tr>
     
            `;
  }

