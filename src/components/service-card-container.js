import { connect } from 'react-redux';

import ServiceCard from './service-card';

const mapStateToProps = state => {
    const mandarinVideos = state.mandarinVideos.list;
    const cantoneseVideos = state.cantoneseVideos.list;
    const englishVideos = state.englishVideos.list;
    
    return {
        mandarinServices: mandarinVideos,
        cantoneseServices: cantoneseVideos,
        englishServices: englishVideos,
        preferredWorshipService: state.settings.preferredWorshipService,
    }
};

const ServiceCardContainer = connect(mapStateToProps)(ServiceCard);
export default ServiceCardContainer;