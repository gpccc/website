import DateTimeUtils from '../modules/datetime-utils';

import { JOINT_SERVICE, SERVICE_DURATION_IN_SECONDS } from '../constants/service-constants';

const ServiceVideoUtils = {
    replaceJointServices: replaceJointServices,
    willBeLive: willBeLive,
    liveNow: liveNow,
    liveOver: liveOver,
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

function willBeLive(serviceStartDateTime) {
    const secondsElapsedSinceService = DateTimeUtils.getSecondsElapsedSince(serviceStartDateTime);
    const willBeLive = (secondsElapsedSinceService < 0);
    return willBeLive;
}

function liveNow(serviceStartDateTime) {
    const secondsElapsedSinceService = DateTimeUtils.getSecondsElapsedSince(serviceStartDateTime);
    const liveNow = (0 <= secondsElapsedSinceService && secondsElapsedSinceService <= SERVICE_DURATION_IN_SECONDS);
    return liveNow;
}

function liveOver(serviceStartDateTime) {
    const secondsElapsedSinceService = DateTimeUtils.getSecondsElapsedSince(serviceStartDateTime);
    const liveOver = (secondsElapsedSinceService > SERVICE_DURATION_IN_SECONDS);
    return liveOver;
}

export default ServiceVideoUtils;