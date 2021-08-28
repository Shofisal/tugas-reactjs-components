import {useState} from 'react';
// import ProductItem from './ProducItem';

function ListProduct () {
    const [product] = useState ( [
        { nama : "Pakaian",
            stock : 10,
        }, 
        { nama : "Make Up",
            stock :  15,
        }, 
        { nama : "Tas",
            stock : 20
        },
    ] );
    console.log ("product", product)
    return (
        <>
        <div id= "listproduct">
        {product.map((item,index)=> (
        <div key = {index} >
            <h1>{item.nama}</h1>
            <h2>{item.stock}</h2>

        </div>
        
    ))}

        </div>
        </>
    )
}
export default ListProduct;