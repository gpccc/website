import SeekPointType from './seek-point-type';

import { JOINT_SERVICE } from './service-constants'

// ntyMUdXntLU 1280x720
const cantoneseServices = [
    { youtubeVideoID: "ILegX4omHvc", message: "(blank message title)", pastor: "Pastor Semson Nip", date: "2020-10-25T18:10:00Z", duration: "01:21:15", seekPoints: [
        {time: "00:10:00", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:10:42", label: "Bible verse", type: SeekPointType.BIBLE_VERSE},
        {time: "00:11:43", label: "Praise song 1", type: SeekPointType.PRAISE_SONG},
        {time: "00:15:49", label: "Everlasting God", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:03", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:23:08", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:29:36", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:10:52", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:11:42", label: "Respond song", type: SeekPointType.PRAISE_SONG},
        {time: "01:14:22", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:20:02", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "ntyMUdXntLU", message: "(blank message title)", pastor: "Elder Albert Wong", date: "2020-10-18T18:10:00Z", duration: "01:29:14", seekPoints: [
        {time: "00:08:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:08:11", label: "Shine Jesus Shine", type: SeekPointType.PRAISE_SONG},
        {time: "00:12:26", label: "Praise song 2", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:58", label: "Bible verse?", type: SeekPointType.BIBLE_VERSE},
        {time: "00:17:45", label: "Praise song 3", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:25", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:27:27", label: "Message", type: SeekPointType.MESSAGE},
        {time: "01:18:11", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:18:53", label: "Respond song", type: SeekPointType.PRAISE_SONG},
        {time: "01:21:38", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:28:26", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Rl4hT1wifFQ", message: "(blank message title)", pastor: "Pastor Semson Nip", date: "2020-10-11T18:10:00Z", duration: "01:26:05", seekPoints: [
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
    { youtubeVideoID: "Li5Pd6IXhE4", message: JOINT_SERVICE, pastor: "", date: "", duration: "", seekPoints: [] },
    { youtubeVideoID: "AlrtccfApe8", message: "(blank message title)", pastor: "Pastor Semson Nip", date: "2020-09-27T18:10:00Z", duration: "01:22:19", seekPoints: [
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
    { youtubeVideoID: "R0ikzK-juhI", message: JOINT_SERVICE, pastor: "", date: "", duration: "", seekPoints: [] },
];

export default cantoneseServices;
