import ListProduct from "./ListProduct"
function ProductItem ({product}) {
    console.log(product)
    return (
        <ul >
        <li><ListProduct product = {product}></ListProduct></li>
        </ul>  
    )
}

export default ProductItem