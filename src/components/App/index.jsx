import Product from "components/Product";
import Header from "components/Header";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Молоко",
      isChecked: false,
    },
    {
      id: 2,
      title: "Чай",
      isChecked: false,
    },
    {
      id: 3,
      title: "Хлеб",
      isChecked: false,
    },
    {
      id: 4,
      title: "Сыр",
      isChecked: false,
    },
    {
      id: 5,
      title: "Мандарины",
      isChecked: false,
    },
    {
      id: 6,
      title: "Бананы",
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

  return (
    <div>
      <Header />
      <div className="mx-10 max-w-screen-lg mx-auto min-h-screen">
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
