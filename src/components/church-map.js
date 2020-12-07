import React from 'react';
import PropTypes from 'prop-types';

function ChurchMap({mapWidth}) {
    if (typeof mapWidth === 'undefined')  {
        mapWidth = 512;
    }
    const mapHeight = (window.innerWidth >= 768) ? mapWidth / 1.618 : mapWidth;

    // TODO: The Directions option is shown only on tablet and desktop (width 768 and up). Grrr...
    return (
    <iframe
        width={mapWidth}
        height={mapHeight}
        frameBorder="0" style={{border: 0}}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBx4Fh1nnGqr5BI2y_pInKnDmuMBRr0L5g&q=place_id:ChIJFflyL1YHK4cR57bArk8BXLM&zoom=16&language=en-US"
        allowFullScreen>
    </iframe>
    // zh-CN = simplified; zh-TW = traditional; en-US = English
    );
}

ChurchMap.propTypes = {
    mapWidth: PropTypes.number,
};

export default ChurchMap;