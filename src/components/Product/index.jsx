function Product(props) {
  const { product, deleteProduct, changeButton } = props;
  return (
    <div className="bg-red-50 m-4 py-3 px-8 flex justify-between rounded-md shadow-md">
      <div className="flex-col items-start item-center">
        <p className="text-2xl font-bold m-4">{product.title}</p>
      </div>
      <div className="flex flex cols-2">
       

        <a
          className="bg-gradient-to-r from-rose-500 hover:bg-rose-500 text-gray-800 font-semibold rounded-full p-3 m-3 shadow-md item-center"
          onClick={() => changeButton(product.id)}
        >
          {product.isChecked ? "Добавлено" : "Добавить"}
        </a>

        <a
          className="text-gray-800 hover:text-rose-900 p-3 m-1 item-center"
          onClick={() => deleteProduct(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </a>
        
      </div>
    </div>
  );
}

export default Product;
