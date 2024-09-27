import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/MyContext';

function ProductCard() {
  const context = useContext(myContext);
  const { mode } = context;

  // State to hold the products
  const [products, setProducts] = useState([]);

  // Fetching data from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue"
            style={{ color: mode === 'dark' ? 'white' : '' }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>

        {/* Map through the fetched products */}
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 md:w-1/4 drop-shadow-lg">
              <div
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    {product.title}
                  </h1>
                  <p
                    className="leading-relaxed mb-3"
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >
                    ₹ {product.price}
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 font-medium rounded-lg text-sm w-full py-2"
                    
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
