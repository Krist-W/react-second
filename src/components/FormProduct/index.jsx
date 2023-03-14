import Button from "components/Button";
import { useEffect, useState } from "react";
import uuid4 from "uuid4";

const ProductForm = ({ addProduct }) => {const products = ["Хлебобулочные изделия", "Молочные продукты", "Рыба", "Мясо", "Бакалея", "Кондитерские изделия", "Фрукты и овощи"]
// аналог записи через функцию
let id = uuid4();
uuid4.valid(id);
console.log(uuid4.valid(id))

const [title, setTitle] = useState("")
const [weight, setWeight] = useState("")
const [type, setType] = useState(products[1])
const [titleDirty, setTitleDirty] = useState(false)
const [weightDirty, setWeightDirty] = useState(false)
const [erTitle, setErrorTitle] = useState("Поле не может быть пустым")
const [erWeigth, setErrorWeigth] = useState("Поле не может быть пустым")
const [disabled, setFormValid] = useState(false)

const handleClick = event => {
    event.preventDefault()
    const product = {
        id,
        title: title,
        weight: weight,
        type: type
    }
console.log(product)
addProduct(product)
setTitle("")
setWeight("")
setType(products[1])
}

const errorTitle = event => {
    setTitle(event.target.value)
    if (event.target.value.length < 2) {
        setErrorTitle('Необходимо ввести в поле "Название" более 2 символов')
        if(!event.target.value) {
            setErrorWeigth('Поле "Название" не может быть пустым')
            }
   } else {
    setErrorTitle("")
   }
}

const errorWeight = event => {
    setWeight(event.target.value)
    if (event.target.value.length < 2) {
        setErrorWeigth('Необходимо ввести в поле "Количество/Вес" более 2 символов')
        if(!event.target.value) {
        setErrorWeigth('Поле "Количество/Вес" не может быть пустым')
        }
   } else {
    setErrorWeigth("")
   }
}

const blurHandler = (event) => {
    switch (event.target.name) {
        case "title":
            setTitleDirty(true);
            break;
        case "weight":
            setWeightDirty(true);
            break;
default:
    }
}

useEffect(() => {
    if (erTitle || erWeigth) {
    setFormValid(false)
    } else {
    setFormValid(true)
    }
}, [erTitle, erWeigth])


return (
<div>
    <form className="max-w-sm mx-10 my-10 gap-y-4 flex flex-col ml-auto mr-auto text-base text-gray-700 font-semibold">
    {(titleDirty && erTitle) && <div className="text-rose-700 text-center">*{erTitle}</div>}
    {(weightDirty && erWeigth) && <div className="text-rose-700 text-center">*{erWeigth}</div>}
<div className="grid grid-cols-3 gap-y-4">

    <label className="col-span-1">Название</label>
    
    <input
    onBlur={event => blurHandler(event)}
    onChange={event => errorTitle(event)}
  // console.log(event.target.value) таргет это цель т.е то куда нажали, value наш инпут
    value={title} 
    name="title" 
    type="text" 
    className="col-span-2 border border-solid border-gray-400 rounded"
    required />
    
</div>

<div className="grid grid-cols-3 gap-y-4">
    
    <label className="col-span-1">Количество/Вес</label>

    <input 
    
    onBlur={event => blurHandler(event)}
    onChange={event => errorWeight(event)}
    value={weight} 
    name="weight" 
    type="text" 
    className="col-span-2 border border-solid border-gray-400 rounded" />
</div>

<div className="grid grid-cols-3 gap-y-4d grid-cols-3 gap-y-4">
    <label className="col-span-1">Вид продукта</label>
    <select value={type} onChange={event => setType(event.target.value)} className="col-span-2 border border-solid border-gray-400 rounded">
        {/* <option>Рисование</option>
        <option>Программирование</option>
        <option>Психология</option>
        <option>Математика</option>
        <option>Дизайн</option> */}
    {products.map(type => {
        return (
        <option key={type}>{type}</option>
        )
    })}
    </select>

</div>

<Button title="Добавить продукт" handleClick={handleClick} type="submit" onClick={() => uuid4()} disabled={!disabled} />

</form>

</div>





)
}

export default ProductForm;
