import React from 'react';

function ChurchMap() {
    return (
    <iframe
        width="600"
        height="450"
        frameBorder="0" style={{border: 0}}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBx4Fh1nnGqr5BI2y_pInKnDmuMBRr0L5g&q=place_id:ChIJFflyL1YHK4cR57bArk8BXLM&zoom=16&language=en-US"
        allowFullScreen>
    </iframe>
    // zh-CN = simplified; zh-TW = traditional; en-US = English
    );
}

export default ChurchMap;