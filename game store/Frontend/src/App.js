import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState,useEffect } from 'react';
import Cancel from './components/Cancel';
import Success from './components/Success';
import axios from "axios"
function App() {

  const [product, setProduct] = useState([

    // {
    //   url: 'https://images5.alphacoders.com/410/thumbbig-410051.webp',
    //   name: 'God Of War',
    //   category: 'Action games',
    //   seller: 'God of War is an action-adventure game franchise created by David Jaffe at Sony Santa Monica Studio',
    //   price: 1999,
    //   id:"price_1Mhtb1SJ01cJVv4AP16xxojG"
    // },
    // {
    //   url: 'https://images7.alphacoders.com/421/thumbbig-421641.webp ',
    //   name: 'GTA V',
    //   category: 'ACTION',
    //   seller: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North',
    //   price: 2599,
    //   id:"price_1MhuQaSJ01cJVv4AxG9myeq4"
    // },
    // {
    //   url: 'https://images3.alphacoders.com/558/thumbbig-5585.webp',
    //   name: 'Resident Evil',
    //   category: 'Shooting',
    //   seller: 'Resident Evil, known in Japan as Biohazard, is a Japanese horror game series and media franchise created by Capcom.',
    //   price: 5000,
    //   id:"price_1MhuTISJ01cJVv4A4ZA8Vi6Q"
    // },
    // {
    //   url: 'https://images7.alphacoders.com/941/thumbbig-941297.webp',
    //   name: 'Red Redemption',
    //   category: 'Action',
    //   seller: 'Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games',
    //   price: 4000,
    //   id:"price_1MhuUNSJ01cJVv4AV9MBRCvF"
    // },
    // {
    //   url: 'https://images6.alphacoders.com/532/thumbbig-532666.webp',
    //   name: 'The Witcher',
    //   category: 'Adventure',
    //   seller: 'The Witcher is a series of fantasy action role-playing games developed by CD Projekt Red and published by CD Projekt',
    //   price: 2000,
    //   id:"price_1MhuVJSJ01cJVv4AwvSwJjUr"
    // },
    // {
    //   url: 'https://images5.alphacoders.com/453/thumbbig-453108.webp',
    //   name: 'The Thief',
    //   category: 'strategy',
    //   seller: 'Thief is a stealth video game developed by Eidos-Montréal and published by Square Enix',
    //   price: 2000,
    //   id:"price_1MhuWBSJ01cJVv4AUywIUR8I"
    // },
  ])

  useEffect(()=>{
    async function getAllgames(){
    await  axios.request({
        url:"https://api-ap-south-1.hygraph.com/v2/clera356h19k201sz738tb91d/master",
        method:"POST",
        data:{
          query:`{items{
            
            itemName
            itemOverview
            itemPrice
            asset
            createdAt
          ids
          }}`
        }
      }).then((res)=>{
        setProduct(res.data.data.items)
      })
      

    }
    getAllgames()
  },[])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <>
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
      </div>


     
    
   
 </>
  );
}

export default App;
