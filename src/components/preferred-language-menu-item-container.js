import { connect } from 'react-redux';

import { setPreferredLanguage } from '../actions/settings-actions';

import PreferredLanguageMenuItem from './preferred-language-menu-item';

const mapStateToProps = state => {
    return {
        preferredLanguage: state.settings.preferredLanguage,
    }
};

const mapDispatchToProps = (dispatch) => ({
    setPreferredLanguage: (service) => {
        dispatch(setPreferredLanguage(service));
    }
});

const PreferredLanguageMenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(PreferredLanguageMenuItem);
export default PreferredLanguageMenuItemContainer;