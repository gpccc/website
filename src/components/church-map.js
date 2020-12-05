import React from 'react';
import PropTypes from 'prop-types';

function ChurchMap({mapWidth}) {
    return (
    <iframe
        width={mapWidth}
        height="450"
        frameBorder="0" style={{border: 0}}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBx4Fh1nnGqr5BI2y_pInKnDmuMBRr0L5g&q=place_id:ChIJFflyL1YHK4cR57bArk8BXLM&zoom=16&language=en-US"
        allowFullScreen>
    </iframe>
    // zh-CN = simplified; zh-TW = traditional; en-US = English
    );
}

ChurchMap.propTypes = {
    mapWidth: PropTypes.number.isRequired,
};

export default ChurchMap;