import { useContext } from 'react';
import NameContext from '../context/NameContext';

export const Navbar = () => {

    const { name } = useContext(NameContext);
    return (
        <div className="nav">
            <h1>Hi { name }!</h1>
        </div>
    )
}
