import PropTypes from 'prop-types';

const ServiceVideoShape = PropTypes.shape({
    youtubeVideoID: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    pastor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
});

export default ServiceVideoShape;