document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add");
  const updateButton = document.getElementById("update");
  const deleteButton = document.getElementById("delete");

  addButton.addEventListener("click", () =>
    addProduct({
      id: 6,
      name: "Product 6",
      image: "https://picsum.photos/100/100",
      price: 500,
      desc: "Mô tả 4",
      status: true,
    })
  );
  updateButton.addEventListener("click", () =>
    updateProduct({
      name: "Product 4 5 6 7",
      image: "https://picsum.photos/100/100",
      price: 354657,
      desc: "Mô tả 1234",
      status: false,
    })
  );
  deleteButton.addEventListener("click", () => removeProduct());
});

let products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/100/100",
    price: 200,
    desc: "Mô tả 1",
    status: true,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/100/100",
    price: 300,
    desc: "Mô tả 2",
    status: false,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://picsum.photos/100/100",
    price: 400,
    desc: "Mô tả 3",
    status: true,
  },
];

function addProduct(newProduct) {
  products.push(newProduct);
  console.log("Thêm mới thành công.");
  showProduct();
}

function updateProduct(updatedProduct) {
  const id = prompt("Nhap id sp b muon update");
  const index = products.findIndex((product) => product.id === Number(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    console.log("Cập nhật thành công.");
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm.");
  }
}

function removeProduct() {
  const id = prompt("Nhap id sp b muon update");
  const index = products.findIndex((product) => product.id === Number(id));
  if (index !== -1) {
    products.splice(index, 1);
    console.log("Xóa thành công.");
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm.");
  }
}

function showProduct() {
  if (products.length === 0) {
    console.log("Không có sản phẩm để hiển thị.");
  } else {
    console.log("Các sản phẩm trong mảng: ", products);
  }
}
showProduct();
