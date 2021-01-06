import products from '../../data/products';

const Products = () => {

  const product = products.map((product, i) => {
    return (
      <tr key={product.id} className={i % 2 ==0 ? '' : 'Par'}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>R$ {product.price.toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <div className="challengeProduct">
      <table>
        <thead>
          <tr>
            <th>Id:</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product}
        </tbody>
      </table>
    </div>
  )
}

export default Products;