//import style from "./Detail.module.css";
//import {Link} from "react-router-dom"
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios'
import Loading from '../../components/Loading/Loading'

const Detail = () => {

const {id} = useParams();
const [videoGameId, setVideoGameId ] = useState({});
useEffect(() => {
    axios.get(`http://localhost:3001/videogames/${id}`)
        .then(result => setVideoGameId(result.data))
}, [id]);
console.log(videoGameId)

    return (
        <div>
            <h1> Estas en detail </h1>
            {videoGameId?<div key={videoGameId.id}>
                <h2 >{videoGameId.name}</h2>
                <div >
                    <img src={videoGameId.image} alt={videoGameId.image} />
                </div>
                <div>
                    <h2 >Rating:</h2>
                    <span >{videoGameId.rating}</span>
                </div>
                <div >
                    <h2 >Genres:</h2>
                    { videoGameId.genres ? 
                        videoGameId.genres.map((genre, index) => {
                            return (
                                    <li key={index}>{genre}</li>
                                        )
                                    }): " "
                            }
                </div>
                <div>
                    <h2 >Released:</h2>
                    <span >{videoGameId.released}</span>
                </div>
                <div >
                    <h2 >Platforms:</h2>
                        { videoGameId.platforms ? 
                                    videoGameId.platforms?.map((plat) => {
                                        return (
                                            <h4 >{plat}</h4>
                                        )
                                    }) :" "
                            }
                        </div>
                        <div >
                            <h2 >Decription:</h2>
                            <h4 >
                                {
                                    videoGameId.description?.split("<p>")
                                    .join("\n")
                                    .split("<p>")
                                    .join(" ")
                                    .split("<br />")
                                    .join("\n")
                                }
                            </h4>
                        </div>
                    </div> : <Loading/>}
        </ div> 
    )
};

export default Detail;