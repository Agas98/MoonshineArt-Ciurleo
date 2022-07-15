import React from 'react'
import ItemDetail from './ItemDetail';

import producto from '../../products.json';
import {useEffect} from 'react';

const ItemDetailContainer = ({greeting}) => {
  // muestro el item despues de 2 segundos de carga
  const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    setTimeout(() => {
      if (afterPromises) {
        resolve(producto);
      } else {
        reject('Error');
      }
    }, 1000);
  });

  const [item, setItem] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getData
      .then((data) => {
        setItem(data);
      }
      )
      .catch((err) => {
        console.error(err);
      }
      )
      .finally(() => {
        setLoading(false);
      }
      );
  }, []);

  return (
    <div>
      <h3 className='text-center fs-4 my-4'>{greeting}</h3>

      {loading ? (
        <h3 className='text-center fs-3 text-info'>
          Cargando articulo...
        </h3>

      ) : (
        <ItemDetail item={item[0]} />
      )}
    </div>
  );
}

export default ItemDetailContainer