import React from 'react';


const CardLayout = () => {
    return (
        <figure className="bg-white rounded overflow-hidden">
        <img
          className="h-48 w-full object-cover"
          src="//images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt=""
        />
        <figcaption className="px-2 py-2">
          <h1 className="font-semibold">Villa la vida</h1>
          <p className="leading-tight text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iure, nemo, perferendis? Accusamus asperiores,
            commodi debitis doloribus eligendi hic incidunt
            minima molestiae mollitia nostrum, officiis quasi,
            quisquam recusandae sunt tenetur totam!
          </p>
        </figcaption>
      </figure>
    
    );
}
export default CardLayout;


