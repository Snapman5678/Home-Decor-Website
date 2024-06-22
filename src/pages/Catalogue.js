import React, { useContext } from 'react'
import { CatalogueList } from '../helpers/CatalogueList'
import { CatalogueContext } from '../context/CatalogueContext'
import '../styles/Catalogue.css'

function Catalogue() {
  
  const { addToCart } = useContext(CatalogueContext);

  return (
    <div className="catalog">
        <h1 className="catalogTitle"> Our Catalogue </h1>
        <div className="catalogList">
            {CatalogueList.map((CatalogueItem) => {
                return (
                 <div className="catalogItem">
                  <div style={{ backgroundImage: `url(${CatalogueItem.image})` }}></div>
                  <h1> {CatalogueItem.name} </h1>
                  <p> Rs. {CatalogueItem.price} </p>
                  <button className="addToCartBttn" onClick={() => addToCart(CatalogueItem.id)}>
                     Add To Cart
                  </button>
                 </div>
                 );
            })}
        </div>
    </div>
  )
}

export default Catalogue