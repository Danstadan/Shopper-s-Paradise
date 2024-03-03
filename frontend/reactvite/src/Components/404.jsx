import { useLocation } from 'react-router-dom';


function Errorr () {
    const location = useLocation();

    return (
        <div className='container mt-3 '>
            <h3> 404 Error</h3>
            <h6>Page could not be found!</h6>
        </div>
    )
};

export default Errorr;