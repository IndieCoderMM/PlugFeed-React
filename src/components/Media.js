import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { HiLink, HiDownload } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';

const Media = ({ mediaData }) => {
  const { cover_photo_url, download_url, tracking_link, media_type } =
    mediaData;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleCopyTrackLink = () => {
    navigator.clipboard
      .writeText(tracking_link)
      .catch((error) => console.error('Error copying text: ', error));
  };

  return (
    <div className="media">
      <div className="media__cover">
        {media_type === 'video' ? (
          <video
            src={download_url}
            ref={videoRef}
            onPlay={handlePlay}
            onPause={handlePause}
            controls
          />
        ) : (
          <img src={cover_photo_url} alt="cover" />
        )}

        {!isPlaying && (
          <div
            className="media__video-cover"
            style={{ backgroundImage: `url(${cover_photo_url})` }}
          >
            <button type="button" className="play-btn" onClick={handlePlay}>
              <FaPlay />
            </button>
          </div>
        )}
      </div>

      <div className="media__links">
        <button
          className="media__btn"
          type="button"
          title="Copy Link"
          onClick={handleCopyTrackLink}
        >
          <HiLink />
        </button>
        <a
          href={download_url}
          download="filename"
          title="Download Media"
          className="media__btn"
        >
          <HiDownload />
        </a>
      </div>
    </div>
  );
};

Media.propTypes = {
  mediaData: PropTypes.shape({
    cover_photo_url: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
    tracking_link: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Media;
