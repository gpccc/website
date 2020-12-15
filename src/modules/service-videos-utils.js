import DateTimeUtils from '../modules/datetime-utils';

import { JOINT_SERVICE, SERVICE_DURATION_IN_SECONDS } from '../constants/service-constants';

const ServiceVideoUtils = {
    isRepeatService: isRepeatService,
    replaceJointServices: replaceJointServices,
    isLiveStream: isLiveStream,
    willBeLive: willBeLive,
    liveNow: liveNow,
    liveOver: liveOver,
};

function isRepeatService(serviceIndex, servicesToShow) {
    if (servicesToShow.length <= 1) {
        return false;
    }

    const serviceDate = DateTimeUtils.getDateComponent(servicesToShow[serviceIndex].date);
    if (serviceIndex > 0) {
        const prevServiceDate = DateTimeUtils.getDateComponent(servicesToShow[serviceIndex-1].date);
        if (serviceDate.getTime() === prevServiceDate.getTime()) {
            return true;
        }
    }

    if (serviceIndex !== servicesToShow.length-1) {
        const nextServiceDate = DateTimeUtils.getDateComponent(servicesToShow[serviceIndex+1].date);
        if (serviceDate.getTime() === nextServiceDate.getTime()) {
            return true;
        }
    }

    return false;
}

function replaceJointServices(targetServices, sourceServices) {
    targetServices.forEach((target, index) => {
        if (target.message !== JOINT_SERVICE)
            return;

        const jointService = sourceServices.find(s => s.youtubeVideoID === target.youtubeVideoID && s.message !== JOINT_SERVICE);
        if (typeof jointService === 'undefined') {
            console.error('Cannot find YouTube video ID', target.youtubeVideoID, 'in', sourceServices);
            return;
        }

        targetServices[index] = jointService;
    });

    return targetServices;
}

function isLiveStream(secondsElapsedSinceServiceStart) {
    const isLiveStream = (secondsElapsedSinceServiceStart <= SERVICE_DURATION_IN_SECONDS);
    return isLiveStream;
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