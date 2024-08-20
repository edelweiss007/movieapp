import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import "./Detail.css"
import { TiArrowBackOutline } from "react-icons/ti";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detailInfo, setDetailInfo] = useState({
        medium_cover_image: ""
    });
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

    useEffect(() => {
        backgroundImage();
    }, [detailInfo]);

    const backgroundImage = () => {
        document.documentElement.style.setProperty(
            '--background-image',
           `url(${detailInfo.medium_cover_image})`
        );
    }

    return (
        loading ? null :
        <div className="detailData">
            <div className="elements">
                <img src={detailInfo.medium_cover_image} alt="img"/>
                <div className="textElements">
                    <h1>{detailInfo.title}</h1>
                    <input type="hidden" value={detailInfo.medium_cover_image}/>
                    <br/>
                    <h3>year: {detailInfo.year}</h3>
                    <br/>
                    <h3>language: {detailInfo.language}</h3>
                    <br/>
                    <h3>rating: {detailInfo.rating}</h3>
                    <br/>
                    <h3>description: {detailInfo.description_full === "" ? "none" : detailInfo.description_full}</h3>
                </div>
                <Link to={`/`}>
                    <TiArrowBackOutline  className="backIcon"/>
                </Link>
            </div>
        </div>

    );
}

export default Detail;