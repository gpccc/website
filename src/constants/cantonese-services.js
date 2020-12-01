import SeekPointType from './seek-point-type';

import { JOINT_SERVICE } from './service-constants';

const cantoneseServices = [
    // https://www.youtube.com/channel/UCwwYzQ3Av9dfyk3mhi-hxuw
    { youtubeVideoID: "u6n3L0z8uAw", message: "恩典中服事 (林後8:1-15)", pastor: "王啟偉長老", date: "2020-11-29T18:10:00Z", duration: "00:00:00", seekPoints: [
    ]},
    { youtubeVideoID: "_TXMPIThAZg", message: "", pastor: "", date: "2020-11-22T18:10:00Z", duration: "01:21:05", seekPoints: [
    ]},
    { youtubeVideoID: "Fsxj8rAovwg", message: "", pastor: "", date: "2020-11-15T18:10:00Z", duration: "01:37:30", seekPoints: [
    ]},
    { youtubeVideoID: "H_kfkwDCeHU", message: "", pastor: "Brother Dai Zhizhong", date: "2020-11-08T18:10:00Z", duration: "00:00:00", seekPoints: [
    ]},
    { youtubeVideoID: "m9YoDp3xFSQ", message: JOINT_SERVICE, pastor: "", date: "2020-11-01", duration: "", seekPoints: [] },
    { youtubeVideoID: "ILegX4omHvc", message: "一天新似一天 (林后4:16-18)", pastor: "Rev. Semson Nip", date: "2020-10-25T18:10:00Z", duration: "01:21:15", seekPoints: [
        {time: "00:10:00", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:10:42", label: "Bible verse", type: SeekPointType.UNKNOWN},
        {time: "00:11:43", label: "祢信实何广大", type: SeekPointType.PRAISE_SONG},
        {time: "00:15:49", label: "永恆的主", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:03", label: "生命的冠冕", type: SeekPointType.PRAISE_SONG},
        {time: "00:23:08", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:29:36", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:10:52", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:11:42", label: "感谢神", type: SeekPointType.PRAISE_SONG},
        {time: "01:14:22", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:20:02", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "ntyMUdXntLU", message: "不是我，是圣灵！(林后3:1-11)", pastor: "Elder Albert Wong", date: "2020-10-18T18:10:00Z", duration: "01:29:14", seekPoints: [
        {time: "00:08:00", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:08:11", label: "真光普照", type: SeekPointType.PRAISE_SONG},
        {time: "00:12:26", label: "生命活水充满我", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:58", label: "Bible verse", type: SeekPointType.UNKNOWN},
        {time: "00:17:45", label: "光和盐", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:25", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:27:27", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:18:11", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:18:53", label: "立志传扬祢的爱", type: SeekPointType.PRAISE_SONG},
        {time: "01:21:38", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:28:26", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Rl4hT1wifFQ", message: "基督的香气 (林后2:14-17)", pastor: "Rev. Semson Nip", date: "2020-10-11T18:10:00Z", duration: "01:26:05", seekPoints: [
        {time: "00:08:00", label: "Opening prayer", type: SeekPointType.UNKNOWN},
        {time: "00:09:02", label: "举手赞颂", type: SeekPointType.PRAISE_SONG},
        {time: "00:13:27", label: "为祢绽放馨香", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:44", label: "谢谢我主", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:43", label: "Congregational prayer", type: SeekPointType.UNKNOWN},
        {time: "00:24:53", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:17:46", label: "为祢绽放馨香", type: SeekPointType.PRAISE_SONG},
        {time: "01:20:15", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:25:00", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "Li5Pd6IXhE4", message: JOINT_SERVICE, pastor: "", date: "2020-10-04", duration: "", seekPoints: [] },
    { youtubeVideoID: "AlrtccfApe8", message: "指望将来 (林后1:8-11)", pastor: "Rev. Semson Nip", date: "2020-09-27T18:10:00Z", duration: "01:22:19", seekPoints: [
        {time: "00:08:00", label: "Opening prayer", type: SeekPointType.UNKNOWN},
        {time: "00:08:41", label: "将天敞开", type: SeekPointType.PRAISE_SONG},
        {time: "00:12:51", label: "高声颂讚主", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:35", label: "复活的主", type: SeekPointType.PRAISE_SONG},
        {time: "00:20:26", label: "Congregational prayer", type: SeekPointType.UNKNOWN},
        {time: "00:23:30", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:15:00", label: "复活的主", type: SeekPointType.PRAISE_SONG},
        {time: "01:18:45", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:21:17", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "R0ikzK-juhI", message: JOINT_SERVICE, pastor: "", date: "2020-09-20", duration: "", seekPoints: [] },
];

export default cantoneseServices;