
import PropTypes from 'prop-types';
import style from './welcome.module.css'

const Welcome = ( {name, age} ) => {
    return (
        <>
            <p className={style['name-msg'] + ' ' + style['bg']}>Bienvenue {name} sur l'application React !</p>
            {/* <p className={clsx(style['name-msg'], style['bg'])}>Bienvenue {name} sur l'application React !</p> */}
            <p className={style['age-msg']}>Vous avez {age} ans !</p>
        </>
    )
};

Welcome.defaultProps = {
    age: 18
};

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

export default Welcome;