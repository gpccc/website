import { connect } from 'react-redux';

import { JOINT_SERVICE } from '../constants/service-constants';

import ServiceCard from './service-card';

function findService(youtubeVideoID, services) {
    const service = services.find(s => s.youtubeVideoID === youtubeVideoID && s.message !== JOINT_SERVICE);
    return service;
}

function replaceJointServices(targetServices, sourceServices) {
    let newServiceList = [];

    targetServices.forEach((target) => {
        if (target.message !== JOINT_SERVICE) {
            newServiceList.push(target);
            return;
        }

        const jointService = findService(target.youtubeVideoID, sourceServices);
        if (jointService === undefined) {
            console.error('Cannot find YouTube video ID', target.youtubeVideoID, 'in', sourceServices);
            return;
        }

        newServiceList.push(jointService);
    });

    return newServiceList;
}


const mapStateToProps = state => {
    const mandarinVideos = state.mandarinVideos.list;
    const cantoneseVideos = replaceJointServices(state.cantoneseVideos.list, mandarinVideos);
    const englishVideos = replaceJointServices(state.englishVideos.list, mandarinVideos);
    
    return {
        mandarinServices: mandarinVideos,
        cantoneseServices: cantoneseVideos,
        englishServices: englishVideos,
        preferredWorshipService: state.settings.preferredWorshipService,
    }
};

const ServiceCardContainer = connect(mapStateToProps)(ServiceCard);
export default ServiceCardContainer;