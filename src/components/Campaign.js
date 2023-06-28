import React from 'react';
import PropTypes from 'prop-types';

const Campaign = ({ campaignData }) => {
  const {
    id,
    campaign_name: name,
    campaign_icon_url: icon_url,
    pay_per_install,
    medias,
  } = campaignData;
  return (
    <div className="campaign">
      <header className="campaign__header">
        <img src={icon_url} className="campaign__icon" />
        <div className="campaign__infobox">
          <h2 className="campaign__name">{name}</h2>
          <p className="campaign__ppi">
            {pay_per_install}
            <span>&nbsp;per install</span>
          </p>
        </div>
      </header>
    </div>
  );
};

Campaign.propTypes = {
  campaignData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    campaign_name: PropTypes.string.isRequired,
    campaign_icon_url: PropTypes.string.isRequired,
    pay_per_install: PropTypes.string.isRequired,
    medias: PropTypes.arrayOf(
      PropTypes.shape({
        cover_photo_url: PropTypes.string.isRequired,
        download_url: PropTypes.string.isRequired,
        tracking_link: PropTypes.string.isRequired,
        media_type: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Campaign;
