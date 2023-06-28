import React, { useEffect, useState } from 'react';
import Campaign from '../components/Campaign';

const API_ENDPOINT = 'https://www.plugco.in/public/take_home_sample_feed';

const initialState = {
  status: 'idle',
  data: [],
  error: null,
};

const Home = () => {
  const [campaignState, setCampaignState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();

        setCampaignState((state) => ({
          ...state,
          status: 'success',
          data: data.campaigns,
        }));
      } catch (e) {
        setCampaignState((state) => ({
          ...state,
          status: 'error',
          error: e,
        }));
      }
    };

    if (campaignState.status === 'idle') {
      fetchData();
      setCampaignState((state) => ({ ...state, status: 'loading' }));
    }
  }, [campaignState, setCampaignState]);

  return (
    <div className="campaigns">
      {campaignState.status === 'success'
        ? campaignState.data.map((campaignData) => (
            <Campaign key={campaignData.id} campaignData={campaignData} />
          ))
        : null}
    </div>
  );
};

export default Home;
