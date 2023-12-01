import React, { useState } from 'react';

import './App.css';
import Category from './components/Category';
import { getCategories, getProducts} from './fetcher';
import CategoryProduct from './components/CategoryProduct';


    const App=()=> {
   
    const [products, setProducts] = useState({errorMessage:'', data: []});
    const [categories, setCategories]= useState({errorMessage:'', data:[]});
    React.useEffect(() => {
    
      const fetchData= async ()=> {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();

      
    //   fetch("http://localhost:3001/categories")
    // .then(response => response.json())
    // .then( data=>{
    //   console.log(data);
    //   setCategories(data);
    
    // })     
   },[]);

   const handleCategoryClick = (id) =>{
      const fetchData= async ()=> {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  //   fetch("http://localhost:3001/products?catId=" +id)
  //   .then(response => response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setProducts(data);
  //  })
  // }
  
  // const handleCategoryClick = id =>{
  //   alert('id:' +id);
  // }

   const renderCategories =() => {
    // const categories= [];
    // for(let i=0; i<results.length; i++){
    //   categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title}/>)
    // }
    return categories.data.map(c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=> handleCategoryClick(c.id)}/>
      );
    // return categories;
      }   
    const renderProducts =()=>{
      return products.data.map (p => <CategoryProduct key={p.id}{...p}>{p.title}</CategoryProduct>);      
    }   
  
   return(
    <>
    <header className='heady'>E-store</header>
    <section>
      <nav>
        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
        {
      categories.data && renderCategories()
        }
      </nav>
      <main>
       {products.errorMessage && <div> Error: {products.errorMessage}</div>} 
        <h1>
          Products</h1>
        {
          products.data && renderProducts()
        }
      </main>
    </section>
    <footer>
      <h1>Footer</h1>
    </footer>
    </>
   )
}

export default App;