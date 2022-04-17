export const VideoIframe = (video) => {
    return (
        <iframe className="video__iframe" src={`https://www.youtube.com/embed/${video._id}`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
};
