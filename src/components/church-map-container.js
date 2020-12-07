import { connect } from 'react-redux';

import ChurchMap from './church-map';

const mapStateToProps = state => {
    return {
        preferredLanguage: state.settings.preferredLanguage,
    }
};

const ChurchMapContainer = connect(mapStateToProps)(ChurchMap);
export default ChurchMapContainer;