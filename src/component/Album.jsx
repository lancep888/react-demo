import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, upvote, downvote } from "../store/albumSlice";

function AlbumRedux() {
  const [albumText, setAlbumText] = useState("");
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album);

  const handleTextChange = (e) => {
    setAlbumText((prev) => (prev = e.target.value));
  };

  const handleAddAlbum = () => {
    const payload = {
      id: Math.random(),
      album: albumText,
      completed: false,
    };
    // dispatch the addAlbum action with a payload
    dispatch(addAlbum(payload));
    setAlbumText((prev) => (prev = ""));
  };

    //   const handleToggle = (album) => {
    //     // dispatch the toggleAlbum action with a payload
    //     dispatch(toggleAlbum(album));
    //   };


  const handleUpvote = (id) => {
    dispatch(upvote(id));
  }

  const handleDownvote = (id) => {
    dispatch(downvote(id));
  }

  return (
    albums.map((album) => (
        <div>
            {album.title}
            <button 
              onClick={() => handleUpvote(album.id)}
            >
              Upvotes: {album.upvotes}</button>
            <button 
              onClick={() => handleDownvote(album.id)}
            >Downvotes: {album.downvotes}</button>
        </div>
    ))
  );
}

export default AlbumRedux;
