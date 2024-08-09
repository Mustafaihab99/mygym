import React, { Component } from "react";
import Item from "./item";
import data from "./datacart";
import {CartProvider} from 'react-use-cart'
import NewCart from "./newcarts";
class Cart extends Component {
    render() {

        return (
            <React.Fragment>
                <CartProvider>
                <h2 style={{ color: 'white', fontSize: '40px', marginTop: '80px', textAlign: 'center' }}>Buy<span> Protien</span></h2>
                <div>
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                            {data.productData.map((item , index)=>{
                                return(
                                    <Item img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                                )
                            })}
                        </div>
                    </section>
                    <NewCart />
                </div>
                </CartProvider>
            </React.Fragment>
        );
    }
};

export default Cart;