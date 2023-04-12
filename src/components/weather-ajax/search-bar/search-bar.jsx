import { useId } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';


const SearchBar = ( { onSearch, label } ) => {

    const id = useId();

    // pnpm install react-hook-form
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        onSearch(data);
        reset();
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div>
                        <label htmlFor={id + 'city'}>{label} : </label>
                        <input id={id + 'city'} type="text" {...register('city')} />
                    </div>
                   

                <button type="submit">Rechercher</button>
            </form>
        </>
    )
}


SearchBar.defaultProps = {
    label: '🔎',
    onSearch: () => {}
}

SearchBar.propTypes = {
    label: PropTypes.string,
    onSearch: PropTypes.func
}


export default SearchBar;