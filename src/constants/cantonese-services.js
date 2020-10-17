import SeekPointType from './seek-point-type';

import { JOINT_SERVICE } from './sentinels'

const cantoneseServices = [
    { youtubeVideoID: "Rl4hT1wifFQ", topic: "Message topic TBD", pastor: "Pastor Semson Nip", date: "2020-10-11T18:10:00Z", duration: "01:26:05", seekPoints: [
        {time: "00:00:20", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:08:00", label: "Opening prayer?", type: SeekPointType.PRAYER},
        {time: "00:09:02", label: "Praise song 1", type: SeekPointType.PRAISE_SONG},
        {time: "00:13:27", label: "Praise song 2", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:44", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:43", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:24:53", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:17:46", label: "Respond song?", type: SeekPointType.PRAISE_SONG},
        {time: "01:20:15", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:25:00", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Li5Pd6IXhE4", topic: JOINT_SERVICE, pastor: "", date: "", duration: "", seekPoints: [] },
    { youtubeVideoID: "AlrtccfApe8", topic: "Message topic TBD", pastor: "Pastor Semson Nip", date: "2020-09-27T18:10:00Z", duration: "01:22:19", seekPoints: [
        {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:08:00", label: "Opening prayer?", type: SeekPointType.PRAYER},
        {time: "00:08:41", label: "Praise song 1", type: SeekPointType.PRAISE_SONG},
        {time: "00:12:51", label: "Sing with Gladness", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:35", label: "The Resurrected Lord", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:26", label: "Congregational prayer?", type: SeekPointType.PRAYER},
        {time: "00:23:30", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:15:00", label: "The Resurrected Lord", type: SeekPointType.PRAISE_SONG},
        {time: "01:18:45", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:21:17", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "R0ikzK-juhI", topic: JOINT_SERVICE, pastor: "", date: "", duration: "", seekPoints: [] },
];

export default cantoneseServices;