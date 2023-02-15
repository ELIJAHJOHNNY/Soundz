import React, { useState, useEffect} from "react";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";
import "./Widgets.css";

const Widgets = ({artistId}) => {
    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    console.log(artistId);

    useEffect(() => {
        if (artistId) {
            apiClient.get(`/artists/${artistId}/related-artists`).then(
                (response) => {
                    setSimilar(response.data?.artists.slice(0,10));
                }
            ).catch((error) => {
                console.error(error.message)
            });
            apiClient.get(`/browse/featured-playlists`).then(
                (response) => {
                    setFeatured(response.data?.playlists.items.slice(0,10));
                }
            ).catch((error) => {
                console.error(error.message)
            });
            apiClient.get(`/browse/new-releases`).then(
                (response) => {
                    setNewRelease(response.data?.albums.items.slice(0,10));
                }
            ).catch((error) => {
                console.error(error.message)
            });
        }
    }, [artistId]);

    return (
    <div className="w-[95%] h-[42%] mb-[6%] mt-[2%] mx-auto rounded-[30px] widgetBody flex justify-evenly items-center ">
        <WidgetCard title="Similar Artists" similar={similar} />
        <WidgetCard title="Made For You" featured={featured}/>
        <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
    )
}
export default Widgets;