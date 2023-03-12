import Product from "components/Product";
import Header from "components/Header";
import ProductForm from "components/FormProduct";
import uuid4 from "uuid4";
import { useState } from "react";


function App() {

  let id = uuid4();
  uuid4.valid(id);


  const [products, setProducts] = useState([
    {
      id: uuid4(),
      title: "Молоко",
      weight: "1 литр",
      type: "Молочные продукты",
      isChecked: false,
    },
    {
      id: uuid4(),
      title: "Чай",
      weight: "250 пакетиков",
      type: "Бакалея",
      isChecked: false,
    },
    {
      id: uuid4(),
      title: "Хлеб",
      weight: "200 гр",
      type: "Хлебобулочные изделия",
      isChecked: false,
    },
    {
      id: uuid4(),
      title: "Кефир",
      weight: "1 литр",
      type: "Молочные продукты",
      isChecked: false,
    },
    {
      id: uuid4(),
      title: "Мандарины",
      weight: "1 кг",
      type: "Фрукты и овощи",
      isChecked: false,
    },
    {
      id: uuid4(),
      title: "Бананы",
      weight: "1 кг",
      type: "Фрукты и овощи",
      isChecked: false,
    },
  ]);

  function deleteProduct(id) {
    const filtredProducts = products.filter((product) => product.id !== id);
    setProducts(filtredProducts);
  }

  function changeButton(id) {
    let productsJson = JSON.parse(JSON.stringify(products));
    const productsChecked = productsJson.find((product) => product.id === id);

    if (productsChecked.isChecked === true) {
      productsChecked.isChecked = false;
    } else {
      productsChecked.isChecked = true;
    }
    setProducts(productsJson);
  }

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  return (
    <div>
      <Header />
      <div className="mx-10 max-w-screen-lg mx-auto min-h-screen">
      <ProductForm addProduct={addProduct} />
        {products.length === 0 && (
          <div className="mt-20 text-center text-7xl text-gray-500 font-thin">
            Нет продуктов{" "}
          </div>
        )}
        {products.length > 0 &&
          products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
                changeButton={changeButton}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
