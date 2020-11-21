import { connect } from 'react-redux';

import { setPreferredWorshipService } from '../actions/settings-actions';

import DefaultServiceMenuItem from './default-service-menu-item';

const mapStateToProps = state => {
    return {
        preferredWorshipService: state.settings.preferredWorshipService,
    }
};

const mapDispatchToProps = (dispatch) => ({
    setPreferredWorshipService: (service) => {
        dispatch(setPreferredWorshipService(service));
    }
});

const DefaultServiceMenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(DefaultServiceMenuItem);
export default DefaultServiceMenuItemContainer;