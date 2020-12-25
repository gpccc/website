import SeekPointType from './seek-point-type';

import { JOINT_SERVICE } from './service-constants';

const englishServices = [
    { youtubeVideoID: "UGYUBUTSQVg", message: "Our Confidence Is In Christ (Romans 8:28-29)", pastor: "Rev. Jerry Lin", date: "2020-12-27T16:30:00Z", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "6Jn40sNKqgo", message: JOINT_SERVICE, pastor: "", date: "2020-12-24", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "K-ZS1oh5m8c", message: "", pastor: "", date: "2020-12-20T16:30:00Z", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "a_FAfMjNJbE", message: JOINT_SERVICE, pastor: "", date: "2020-12-13", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "KJs_onhvk8A", message: JOINT_SERVICE, pastor: "", date: "2020-12-13", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "gM73NJoHBDg", message: "The Creator vs. the Critic", pastor: "Pastor Luke Elie", date: "2020-12-06T16:30:00Z", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "d2cg_a2PXZY", message: "Battle of Brothers (Obadiah)", pastor: "Rev. Larry Lee", date: "2020-11-29T16:30:00Z", duration: "00:00:00", seekPoints: [] },
    { youtubeVideoID: "xeqqbiH1ImI", message: "What Repentance Requires (Ezra 10)", pastor: "Rev. Jerry Lin", date: "2020-11-22T16:30:00Z", duration: "01:24:24", seekPoints: [] },
    { youtubeVideoID: "Z-EIRYYepmg", message: "Repair Our Ruins (Ezra 9:1-15)", pastor: "Rev. Larry Lee", date: "2020-11-15T16:30:00Z", duration: "01:29:50", seekPoints: [] },
    { youtubeVideoID: "zFcB3aNJwSk", message: "Kingdom Peace (Philippians 3:17-4:9)", pastor: "Rev. Jerry Lin", date: "2020-11-08T16:30:00Z", duration: "01:23:28", seekPoints: [
        {time: "00:10:07", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:41", label: "Sing Sing Sing", type: SeekPointType.PRAISE_SONG},
        {time: "00:15:23", label: "Zechariah 9:9-10", type: SeekPointType.BIBLE_VERSE},
        {time: "00:17:07", label: "Matthew 21:9", type: SeekPointType.BIBLE_VERSE},
        {time: "00:17:21", label: "Hosanna", type: SeekPointType.PRAISE_SONG},
        {time: "00:22:42", label: "Came to My Rescue", type: SeekPointType.PRAISE_SONG},
        {time: "00:27:40", label: "Christ is Enough", type: SeekPointType.PRAISE_SONG},
        {time: "00:32:46", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:36:50", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:15:17", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:15:55", label: "Heart of Worship", type: SeekPointType.PRAISE_SONG},
        {time: "01:20:32", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:22:31", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "uVZjMkJC_dk", message: "Send Us Ministers (Ezra 8)", pastor: "Rev. Larry Lee", date: "2020-11-01T16:30:00Z", duration: "01:26:35", seekPoints: [
        {time: "00:09:30", label: "Beginning", type: SeekPointType.BEGINNING},
        {time: "00:09:49", label: "1 Chronicles 16:23-31", type: SeekPointType.BIBLE_VERSE},
        {time: "00:11:17", label: "How Great is Our God", type: SeekPointType.PRAISE_SONG},
        {time: "00:15:57", label: "Son of God", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:02", label: "Lord, I Need You", type: SeekPointType.PRAISE_SONG},
        {time: "00:24:50", label: "Prayer", type: SeekPointType.PRAYER},
        {time: "00:26:02", label: "Give Us Clean Hands", type: SeekPointType.PRAISE_SONG},
        {time: "00:30:07", label: "Communion", type: SeekPointType.COMMUNION},
        {time: "00:44:50", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:24:40", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:25:36", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "dkLZnTDGVWw", message: "The Sovereignty of God (Ezra 7)", pastor: "Rev. Jerry Lin", date: "2020-10-25T16:30:00Z", duration: "01:19:16", seekPoints: [
        {time: "00:00:58", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:03:48", label: "Our God", type: SeekPointType.PRAISE_SONG},
        {time: "00:08:21", label: "John 15:9-13", type: SeekPointType.BIBLE_VERSE},
        {time: "00:09:12", label: "Lay Me Down", type: SeekPointType.PRAISE_SONG},
        {time: "00:14:35", label: "King of My Heart", type: SeekPointType.PRAISE_SONG},
        {time: "00:19:16", label: "Speak, O Lord", type: SeekPointType.PRAISE_SONG},
        {time: "00:22:53", label: "Congregational prayer", type: SeekPointType.PRAYER}, 
        {time: "00:27:03", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:09:07", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:10:43", label: "Jesus, Thank You", type: SeekPointType.PRAISE_SONG},
        {time: "01:15:34", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:18:12", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "MjQnqIH8qmM", message: "Temple Filled with Joy (Ezra 6)", pastor: "Rev. Larry Lee", date: "2020-10-18T16:30:00Z", duration: "01:26:10", seekPoints: [
        {time: "00:11:22", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:58", label: "Psalm 103:1-5, 8, 14-17, 22", type: SeekPointType.BIBLE_VERSE},
        {time: "00:13:17", label: "10,000 Reasons", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:49", label: "Great Things", type: SeekPointType.PRAISE_SONG},
        {time: "00:22:16", label: "King of Kings", type: SeekPointType.PRAISE_SONG},
        {time: "00:26:43", label: "Nobody Loves Me Like You", type: SeekPointType.PRAISE_SONG},
        {time: "00:31:22", label: "Congregational prayer", type: SeekPointType.PRAYER}, 
        {time: "00:34:13", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:11:21", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:12:20", label: "Way Maker", type: SeekPointType.PRAISE_SONG},
        {time: "01:19:13", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:20:29", label: "Benediction", type: SeekPointType.BENEDICTION},
        {time: "01:21:38", label: "Great Things", type: SeekPointType.PRAISE_SONG},
    ]},
    { youtubeVideoID: "gvSIj2PaVGM", message: "Rebuilding Resumes (Ezra 5)", pastor: "Rev. Jerry Lin", date: "2020-10-11T16:30:00Z", duration: "01:22:55", seekPoints: [
        {time: "00:10:52", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:12:20", label: "Job 1:20-21", type: SeekPointType.BIBLE_VERSE}, 
        {time: "00:13:37", label: "Blessed Be Your Name", type: SeekPointType.PRAISE_SONG},
        {time: "00:17:19", label: "Job 42:1-5; Psalm 30:4-5", type: SeekPointType.BIBLE_VERSE},
        {time: "00:18:32", label: "Your Love Never Fails", type: SeekPointType.PRAISE_SONG},
        {time: "00:23:34", label: "King of Kings", type: SeekPointType.PRAISE_SONG},
        {time: "00:28:04", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
        {time: "00:33:28", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:36:42", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:07:01", label: "Closing prayer", type: SeekPointType.PRAYER},
        {time: "01:08:20", label: "Lord, I Need You", type: SeekPointType.PRAISE_SONG},
        {time: "01:12:45", label: "Youth Praise Night", type: SeekPointType.VIDEO},
        {time: "01:16:12", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:18:55", label: "Benediction", type: SeekPointType.BENEDICTION},
        {time: "01:19:30", label: "Happy birthday, Pastor Larry", type: SeekPointType.BIRTHDAY},
    ]},
    { youtubeVideoID: "EWQ__H_85bE", message: "Rebuilding Opposed (Ezra 4)", pastor: "Rev. Larry Lee", date: "2020-10-04T16:30:00Z", duration: "01:25:45", seekPoints: [
        {time: "00:10:57", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:12:35", label: "O Come to the Altar", type: SeekPointType.PRAISE_SONG},
        {time: "00:18:02", label: "Psalm 18:2-6, 16-17, 46, 49", type: SeekPointType.BIBLE_VERSE},
        {time: "00:19:20", label: "Rock of Ages (You will Stand)", type: SeekPointType.PRAISE_SONG},
        {time: "00:23:46", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
        {time: "00:28:54", label: "The Wonderful Cross", type: SeekPointType.PRAISE_SONG},
        {time: "00:34:17", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:36:01", label: "Communion", type: SeekPointType.COMMUNION},
        {time: "00:44:23", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:23:01", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:24:45", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "uqmaE9JKGtc", message: "First Comes Sacrifice (Ezra 3)", pastor: "Rev. Larry Lee", date: "2020-09-27T16:30:00Z", duration: "01:28:35", seekPoints: [
        {time: "00:10:36", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:38", label: "O Praise the Name", type: SeekPointType.PRAISE_SONG},
        {time: "00:16:10", label: "Center", type: SeekPointType.PRAISE_SONG},
        {time: "00:21:08", label: "1 Samuel 2:1-10", type: SeekPointType.BIBLE_VERSE},
        {time: "00:24:18", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
        {time: "00:29:12", label: "Better", type: SeekPointType.PRAISE_SONG},
        {time: "00:33:04", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "00:34:21", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:42:06", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:17:32", label: "Forever", type: SeekPointType.PRAISE_SONG},
        {time: "01:22:17", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:22:49", label: "Benediction", type: SeekPointType.BENEDICTION},
    ]},
    { youtubeVideoID: "GA94lEQkKo0", message: "Talent (Exodus 4:10-17)", pastor: "Rev. Steven Chin", date: "2020-09-20T16:30:00Z", duration: "01:23:41", seekPoints: [
        {time: "00:09:57", label: "Opening prayer", type: SeekPointType.PRAYER},
        {time: "00:11:04", label: "Who You Say I Am", type: SeekPointType.PRAISE_SONG},
        {time: "00:15:34", label: "Luke 23:32-43", type: SeekPointType.BIBLE_VERSE},
        {time: "00:17:26", label: "O Praise the Name", type: SeekPointType.PRAISE_SONG},
        {time: "00:22:18", label: "Better", type: SeekPointType.PRAISE_SONG},
        {time: "00:26:00", label: "Broken Vessels / Majesty", type: SeekPointType.PRAISE_SONG},
        {time: "00:32:17", label: "Congregational prayer", type: SeekPointType.PRAYER},
        {time: "00:35:58", label: "Sermon", type: SeekPointType.MESSAGE},
        {time: "01:10:12", label: "Missions at GPCCC", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:18:38", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
        {time: "01:21:56", label: "Closing prayer", type: SeekPointType.PRAYER},
    ]},
];

export default englishServices;