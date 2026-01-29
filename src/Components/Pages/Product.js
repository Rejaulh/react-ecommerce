import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../ProductDisply/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find(
    (item) => item.id === Number(productId)
  );
  if (!product) return null

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product