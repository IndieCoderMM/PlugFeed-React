import React from 'react';
import PropTypes from 'prop-types';

const Media = ({ mediaData }) => {
  const { cover_photo_url, download_url, tracking_link, media_type } =
    mediaData;

  return (
    <div className="media">
      <img src={cover_photo_url} className="media__cover" />

      <div className="media__links">
        <button className="track-btn" type="button">
          T
        </button>
        <button className="download-btn" type="button">
          D
        </button>
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
