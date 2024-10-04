import s from './SearchBox.module.css'
import { useId } from 'react';
const SearchBox = (props) => {
    const { search, setSearch } = props;
    const searchId = useId();
    return (
        <div className={s.wrapperSearch}>
            <label htmlFor={searchId} className={s.text}>Find contacts by name</label>
            <input
                className={s.input}
                id={searchId}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Enter name...' />
        </div>
    )
}

export default SearchBox