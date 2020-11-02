import React,{useState,useEffect} from 'react'
import data from '../data'
import { Link } from 'react-router-dom';
import axios from 'axios';
function HomeScreen(props) {


    const [products,setproduct]=useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
    const {data} = await axios.get("/api/products");
    setproduct(data);
    }
    fetchData();
    return ()=> {
        //
    };
    },[])

    return <ul className="products">
        {products.map(product =>
            <li>
                <div className="product">
                <Link to={'/product/' + product._id}>   
                <img className="product-image" src={product.image} />
                </Link> 
                    <div className="product-name">
                <Link to={'/product/' + product._id}> {product.name} 
               </Link> </div>

                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">Prix :{product.price}</div>
                    <div className="product-rating">Rating {product.rating}</div>

                </div>
            </li>)
        }




    </ul>
}
export default HomeScreen; 