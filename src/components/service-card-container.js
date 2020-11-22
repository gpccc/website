import { connect } from 'react-redux';

import ServiceCard from './service-card';

const mapStateToProps = state => {
    return {
        mandarinServices: state.mandarinVideos.list,
        cantoneseServices: state.cantoneseVideos.list,
        englishServices: state.englishVideos.list,
        preferredWorshipService: state.settings.preferredWorshipService,
    }
};

const ServiceCardContainer = connect(mapStateToProps)(ServiceCard);
export default ServiceCardContainer;