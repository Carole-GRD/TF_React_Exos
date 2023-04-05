import PropTypes from 'prop-types';
import style from './product-collection.module.css';
import clsx from 'clsx';
import PriceFormat from '../price-format/price-format';
import Capitalize from '../capitalize/capitalize';


const ProductTableHeader = () => (
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Promo</th>
        </tr>
    </thead>
)

const ProductTableRow = ( { name, price, promo } ) => {

    const pricePromo = clsx(promo && style['pricePromo']);

    return (
        <tr>
            <td><Capitalize string={name} /></td>

            <td className={clsx(pricePromo, style.textCenter)}>
                <PriceFormat value={price}/>
            </td>

            <td className={style.textCenter}>
                {promo && 'En promo'}
            </td>
        </tr>
    )
}


const ProductCollection = ( { products } ) => {

    return (
        <>
            <table>
                <ProductTableHeader />
                <tbody>
                    {products.map((product) => {
                        return (
                            <ProductTableRow key={product.id} {...product} />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}


ProductCollection.defaultProps = {
    product: []
}

ProductCollection.propTypes = {
    product: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        promo: PropTypes.bool.isRequired
    }))
}


export default ProductCollection;
