import { JOINT_SERVICE } from '../constants/service-constants';

const ServiceVideoUtils = {
    replaceJointServices: replaceJointServices,
};

function replaceJointServices(targetServices, sourceServices) {
    targetServices.forEach((target, index) => {
        if (target.message !== JOINT_SERVICE)
            return;

        const jointService = sourceServices.find(s => s.youtubeVideoID === target.youtubeVideoID && s.message !== JOINT_SERVICE);
        if (jointService === undefined) {
            console.error('Cannot find YouTube video ID', target.youtubeVideoID, 'in', sourceServices);
            return;
        }

        targetServices[index] = jointService;
    });

    return targetServices;
}

export default ServiceVideoUtils;