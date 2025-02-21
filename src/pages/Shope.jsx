import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import {Container , Row , Col} from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import { useState } from 'react'
import ProductList from '../components/UI/ProductList'


const Shope = () => {
 const [filterProducts , setFilterProducts] = useState(products)
 const handelFilter=e=> {
    switch(e.target.value){
      case 'sofa':
        setFilterProducts(products.filter((product)=>product.category === 'sofa'))
        break;
        case 'mobile':
          setFilterProducts(products.filter((product)=>product.category === 'mobile'))
          break;
          case 'chair':
            setFilterProducts(products.filter((product)=>product.category === 'chair'))
            break;
           case 'watch':
              setFilterProducts(products.filter((product)=>product.category === 'watch'))
              break;
           case 'wireless':
                setFilterProducts(products.filter((product)=>product.category === 'wireless'))
                break;
    }
 }

 const handelSearch = e => {
   const searchTerm = e.target.value;
   const searchedProducts = products.filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
   setFilterProducts(searchedProducts);
  }

  return <Helmet title = 'shop'>
     <CommonSection title='product'/>
     <Container>
      <Row  className='container'>
        <Col lg="3" md="3">
        <div className="filter_widget">
               <select name="" id="" onChange={handelFilter}>
               <option >Select by Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wirelss</option>
               </select>
        </div>
        </Col>
        <Col lg="3" md="3">
        <div className="filter_widget">
               <select name="" id="">
               <option >Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
               </select>
        </div>
        </Col>
        <Col lg="6" md="6">
        <div className="search_box">
          <input type="text"  placeholder='search.....' onChange={handelSearch}/>
          <span><i class="ri-search-line"></i></span>
        </div>
        </Col>
      </Row>
     </Container>
     <section className='pt-0'>
      <Container>
        <Row>
          {
            filterProducts.length < 1 ? (
            <h1 className='text-center '>No Product Found</h1>):
(            <ProductList data={filterProducts}/>  
)          }
        </Row>
      </Container>
     </section>
  </Helmet>
}

export default Shope
