import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import movie from '../components/Movie'

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detailInfo, setDetailInfo] = useState();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetailInfo(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (loading ? <h1>Loading...</h1> :
        <div>
            <h1>{detailInfo.title}</h1>
            <img src={detailInfo.large_cover_image} alt="img" />
            <h3>year: {detailInfo.year}</h3>
            <h3>language: {detailInfo.language}</h3>
            <h3>rating: {detailInfo.rating}</h3>
            <h3>description: {detailInfo.description_full === "" ? "설명없음" : detailInfo.description_full}</h3>
        </div>);
}

export default Detail;