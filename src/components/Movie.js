import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import "./Movie.css"

//부모 컴포넌트로부터 props들을 받아온다.
function Movie({id, coverImage, title, summary, genres}) {
    return (
        <div className="movie">
            <Link to={`/movie/${id}`}>
                <div className="image">
                    <img src={coverImage} alt="image"/>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;