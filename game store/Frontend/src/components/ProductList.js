import '../App.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.asset.imageURL} alt="pic-" width="100%" />
                                <p>{productItem.itemName}  </p>
                                <p> {productItem.itemOverview} </p>
                                <p> Rs. {productItem.itemPrice} /-</p>
                                <Tooltip title="Add to cart" >
                                <Button color="secondary"   onClick={() => addToCart(productItem)}>
                                      <AddShoppingCartIcon style={{color:"white"}}/>
                               </Button>
                                </Tooltip>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList