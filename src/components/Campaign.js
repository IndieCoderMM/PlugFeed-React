import React from 'react';
import PropTypes from 'prop-types';
import Media from './Media';

const Campaign = ({ campaignData }) => {
  const {
    id,
    campaign_name: name,
    campaign_icon_url: icon_url,
    pay_per_install,
    medias,
  } = campaignData;
  return (
    <section className="campaign">
      <header className="campaign__header">
        <img src={icon_url} className="campaign__icon" alt={name} />
        <div className="campaign__infobox">
          <h2 className="campaign__name">{name}</h2>
          <p className="campaign__ppi">
            {pay_per_install}
            <span>&nbsp;per install</span>
          </p>
        </div>
      </header>
      <section className="medias">
        {medias.map((mediaData) => (
          <Media mediaData={mediaData} />
        ))}
      </section>
    </section>
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
