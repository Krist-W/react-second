function Product(props) {
  const { product, deleteProduct, changeButton } = props;
  return (
    <div className="bg-[#fbedef] m-4 py-3 px-8 flex justify-between rounded-md shadow-md">
      <div className="flex-col items-start item-center">
      <p className="text-gray-700 font-semibold bg-[#ecbcbc] pr-2 pl-2 pt-1 pb-1 mt-2 rounded-full">{product.type}</p>
        <p className="text-2xl text-gray-600 font-bold mt-4 mr-4">{product.title}</p>
        <p className="text-gray-700 font-semibold ">{product.weight}</p>
        
      </div>
      <div className="flex flex cols-2">
       

        <p
          className="mt-auto mb-auto transition duration-0 hover:duration-700 bg-gradient-to-r from-[#FABCC6] hover:from-[#ed92a0] text-gray-800 p-3 m-3 item-center border border-solid border-colour-white text-colour-white rounded-full text-xl font-semibold px-4 py-2 shadow-md"
          onClick={() => changeButton(product.id)}
        >
          {product.isChecked ? "Добавлено" : "Добавить"}
        </p>

        <p
          className="text-gray-800 hover:text-[#DCA4A4] p-3 mt-auto mb-auto"
          onClick={() => deleteProduct(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </p>
        
      </div>
    </div>
  );
}

export default Product;
