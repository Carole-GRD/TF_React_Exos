
import PropTypes from 'prop-types';

const PriceFormat = ( { value } ) => {

    // const priceFormatted = value.toFixed(2) + ' €';
    // const priceFormatted = new Intl.NumberFormat('fr-be',{ style: 'currency', currency: 'EUR' }).format(value);
    
    // Mieux :
    // const priceFormatted = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' }).format(value);
    // ↑ undefined au lieu de 'fr-be' laisse le navigateur décider en fonction de la langue que l'utilisateur utilise

    // OU BIEN écriture plus légère
    const priceFormatted =  value.toLocaleString('fr-be', { 
        style: 'currency', 
        currency: 'EUR' 
    })

    return (
        <>
            <span>{priceFormatted}</span>

        </>
    )
}

PriceFormat.proptypes = {
    value: PropTypes.number.isRequired
}

export default PriceFormat;