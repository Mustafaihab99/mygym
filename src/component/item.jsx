import React from "react";
import {useCart} from 'react-use-cart';
const Item = (props) => {
    const {addItem} = useCart();
        return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={props.img} alt="" className="card-img-top img-fluid" style={{width: '200px' , height : '200px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-title">{props.price}$</p>
                                        <p className="card-text">{props.desc}</p>
                                        <button className="bton" style={{marginTop: '5%'}} onClick={() => addItem(props.item)}>Add</button>
                                    </div>
                            </div>
                        </div>
        );
};
export default Item;