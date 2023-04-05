import PropTypes from 'prop-types';

const Capitalize = ( {string} ) => {

    
    const stringFormatted = string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <>
            <span>{stringFormatted}</span>

        </>
    )
}

Capitalize.proptypes = {
    string: PropTypes.string.isRequired
}

export default Capitalize;