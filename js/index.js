class TableContent {
  constructor(title, quantity, price) {
    this.title = title;
    this.quantity = quantity;
    this.price = price;
  }
}

let productList = [
  new TableContent("Apple", 5, 10),
  new TableContent("Banana", 12, 11),
  new TableContent("Water Melon", 1, 12),
  new TableContent("Grapes", 11, 13),
  new TableContent("Coconut", 2, 14),
  new TableContent("Orange", 6, 15),
  new TableContent("Pineapple", 1, 16)
];

const getTotal = () => {
    const total = document.getElementById("total");
    let result = 0;
    for(let i=0;i<productList.length;i++){
        result += productList[i].price*productList[i].quantity;
    }
    total.innerHTML = "total is : " + result.toString();
}

const onTableLoad = () => {
  const table = document.getElementById("table");
  const heading = "<tr><th>Title</th><th>quantity</th><th>price</th><th>action</th></tr>"
  table.innerHTML+=heading;
  for (let i = 0; i < productList.length; i++) {
    const title = "<td>" + productList[i].title + "</td>";
    const quantity = "<td>" + productList[i].quantity + "</td>";
    const price = "<td>" + productList[i].price + "</td>";
    const action =
      "<td class='button' onclick=deleteItem(" + i + ") >" + "remove" + "</td>";
    const element =
      "<tr class='table_child'>" + title + quantity + price + action + "</tr>";
    table.innerHTML += element;
  }
  getTotal()
};

const deleteItem = (index) => {
  console.log(index);
  productList = productList.filter((item, i) => {
    return i != index;
  });

  console.log(productList);
  table.innerHTML=null;
  onTableLoad()
};

onTableLoad();
