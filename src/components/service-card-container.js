import { connect } from 'react-redux';

import ServiceCard from './service-card';

const mapStateToProps = state => {
    return {
        preferredWorshipService: state.settings.preferredWorshipService,
    }
};

const ServiceCardContainer = connect(mapStateToProps)(ServiceCard);
export default ServiceCardContainer;