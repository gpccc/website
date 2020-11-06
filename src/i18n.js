import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Cookies from 'js-cookie';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

import { LANG_COOKIE_KEY } from './constants/service-constants';

let lngCode = Cookies.get(LANG_COOKIE_KEY);
if (typeof lngCode === 'undefined') {
    lngCode = 'en';
}

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            en: {
            translation: {
                'GP full name': 'Greater Phoenix Chinese Christian Church',
                'GP short name': 'GPCCC',
                'Cantonese service': 'Cantonese service',
                'English service': 'English service',
                'Mandarin service': 'Mandarin service',
                'Seek to': 'Seek to',
                'Opening prayer': 'Opening prayer',
                'Communion': 'Communion',
                'Congregational prayer': 'Congregational prayer',
                'Baptism of Yong Wang': 'Baptism of Yong Wang',
                'Induction of new members': 'Induction of new members',
                'Missions at GPCCC': 'Missions at GPCCC',
                'Youth Praise Night': 'Youth Praise Night',
                'Closing prayer': 'Closing prayer',
                'Announcements': 'Announcements',
                'Benediction': 'Benediction',
                'Happy birthday, Pastor Larry': 'Happy birthday, Pastor Larry',

                'Rev. Jerry Lin': 'Rev. Jerry Lin',
                'Rev. Larry Lee': 'Rev. Larry Lee',
                'Rev. Steven Chin': 'Rev. Steven Chin',
                'Rev. Peter Liu': 'Rev. Peter Liu',
                'Pastor Chien Chen': 'Pastor Chien Chen',
                'Rev. Weizhong Sun': 'Rev. Weizhong Sun',
                'Rev. Semson Nip': 'Rev. Semson Nip',
                'Elder Albert Wong': 'Elder Albert Wong',

                'Recent services': 'Recent services',
                'Older services': 'Older services',
                'Unable to seek to': 'Unable to seek to',
                'Unable to load service': 'Unable to load service',
                'TODO: Go to a page listing all worship services': 'TODO: Go to a page listing all worship services',
                'Cantonese service combined with Mandarin service': 'Cantonese service combined with Mandarin service',
                'English service combined with Mandarin service': 'English service combined with Mandarin service',

                'Sermon': 'Sermon',
                'Beginning': 'Beginning',
                'Prayer': 'Prayer',
                'Bible verse': 'Bible verse',

                // Cantonese sermons
                '一天新似一天 (林后4:16-18)': 'Day New Day (2 Corinthians 4:16-18)',
                '不是我，是圣灵！(林后3:1-11)': 'Not me, but the Holy Spirit! (2 Cor 3:1-11)',
                '基督的香气 (林后2:14-17)': 'Scent of Christ (2 Corinthians 2:14-17)',
                '指望将来 (林后1:8-11)': 'Look Forward to the Future (2 Cor 1:8-11)',

                // English sermons
                'Kingdom Peace (Philippians 3:17-4:9)': 'Kingdom Peace (Philippians 3:17-4:9)',
                'Send Us Ministers (Ezra 8)': 'Send Us Ministers (Ezra 8)',
                'The Sovereignty of God (Ezra 7)': 'The Sovereignty of God (Ezra 7)',
                'Temple Filled with Joy (Ezra 6)': 'Temple Filled with Joy (Ezra 6)',
                'Rebuilding Resumes (Ezra 5)': 'Rebuilding Resumes (Ezra 5)',
                'Rebuilding Opposed (Ezra 4)': 'Rebuilding Opposed (Ezra 4)',
                'First Comes Sacrifice (Ezra 3)': 'First Comes Sacrifice (Ezra 3)',
                'Talent (Exodus 4:10-17)': 'Talent (Exodus 4:10-17)',

                // Mandarin sermons
                '犹太人的王 (约19:14-19)': 'King of the Jews (John 19:14-19)',
                '真理必叫我们得以自由 (约18:28-40)': 'Truth Will Set Us Free (John 18:28-40)',
                '权能恩典的主 (约18:12-27)': 'King of Power and Grace (John 18:12-27)',
                '合一的祈祷 (约17:20-26)': 'Prayer of Unity (John 17:20-26)',
                '圣灵的工作 (约16:1-15)': 'The Work of the Holy Spirit (John 16:1-15)',
                '我是真葡萄树 (约15:1-10)': 'I Am the Real Vine (John 15:1-10)',
                '愿你们平安 (约20:19-21)': 'Wish You Peace (John 20:19-21)',

                // English Bible verses
                '1 Chronicles 16:23-31': '1 Chronicles 16:23-31',
                'John 15:9-13': 'John 15:9-13',
                'Psalm 103:1-5, 8, 14-17, 22': 'Psalm 103:1-5, 8, 14-17, 22',
                'Job 1:20-21': 'Job 1:20-21',
                'Job 42:1-5; Psalm 30:4-5': 'Job 42:1-5; Psalm 30:4-5',
                'Psalm 18:2-6, 16-17, 46, 49': 'Psalm 18:2-6, 16-17, 46, 49',
                '1 Samuel 2:1-10': '1 Samuel 2:1-10',
                'Luke 23:32-43': 'Luke 23:32-43',

                // English praise songs
                'How Great is Our God': 'How Great is Our God',
                'Son of God': 'Son of God',
                'Give Us Clean Hands': 'Give Us Clean Hands',

                'Our God': 'Our God',
                'Lay Me Down': 'Lay Me Down',
                'King of My Heart': 'King of My Heart',
                'Speak, O Lord': 'Speak, O Lord',
                'Jesus, Thank You': 'Jesus, Thank You',

                '10,000 Reasons': '10,000 Reasons',
                'Great Things': 'Great Things',
                'King of Kings': 'King of Kings',
                'Nobody Loves Me Like You': 'Nobody Loves Me Like You',
                'Way Maker': 'Way Maker',

                'Blessed Be Your Name': 'Blessed Be Your Name',
                'Your Love Never Fails': 'Your Love Never Fails',
                'Gracefully Broken': 'Gracefully Broken',
                'Lord, I Need You': 'Lord, I Need You',

                'O Come to the Altar': 'O Come to the Altar',
                'Rock of Ages (You will Stand)': 'Rock of Ages (You will Stand)',
                'The Wonderful Cross': 'The Wonderful Cross',

                'O Praise the Name': 'O Praise the Name',
                'Center': 'Center',
                'Better': 'Better',
                'Forever': 'Forever',

                'Who You Say I Am': 'Who You Say I Am',
                'Broken Vessels / Majesty': 'Broken Vessels / Majesty',

                // Mandarin praise songs
                '神羔羊配得': 'Worthy is the Lamb', // found English translation on YouTube

                '耶稣基督是主': 'Jesus Christ is Lord',
                '耶稣，万名之上的名': 'Jesus, the Name Above All Names',
                '认定祢': 'Recognize You',
                '献上活祭': 'Live Sacrifice',
                '祢的话': 'Your Words',

                '你真配得荣耀/你真伟大': 'You Are Worthy of Glory/You Are Great',
                "工人的祷告": "Worker's Prayer",
                '我的心，你要称颂耶和华': 'Praise the Lord, O My Soul',
                '祂藏我灵': 'He Hides My Spirit',

                '敬拜主': 'Worship the Lord',
                '来高声唱': 'Come Sing Loudly',
                '充满我': 'Fill Me',
                '奇异恩典': 'Amazing Grace',
                '从心合一': 'Unity From the Heart',

                '我的神，我的父，我的磐石': 'My God, My Father, My Rock',
                '耶稣爱你': 'Jesus Loves You',
                '圣灵的江河': 'Rivers of the Holy Spirit',
                '宝贵十架': 'Precious Cross', // on slide

                '来拥戴主为王': 'Crown Him with Many Crowns',
                '成为我异象': 'Be My Vision',
                '彼此相爱': 'Love Each Other',
                "我愿为祢去": "I'd Go for You",

                '你是何等荣美': 'Jesus, My Everything',
                '让神儿子的爱围绕你': 'Let the Love of Jesus Surround You',
                '藉我赐恩福': 'Make Me a Blesssing',
                '差遣我': 'Send Me',

                // Cantonese praise songs
                '祢信实何广大': 'Great is Your Faithfulness',
                '永恆的主': 'Everlasting God',
                '生命的冠冕': 'Crown of Life',
                '感谢神': 'Thank God',

                '真光普照': 'Shine Jesus Shine',
                '生命活水充满我': 'The Living Water of Life Fills Me',
                '光和盐': 'Light and Salt',
                '立志传扬祢的爱': 'Determined to Spread Your Love',

                '举手赞颂': 'Raise Hands in Praise',
                '为祢绽放馨香': 'Bloom for You',
                '谢谢我主': 'Thank My Lord',

                '将天敞开': 'Open the Sky',
                '高声颂讚主': 'Sing with Gladness',
                '复活的主': 'The Resurrected Lord',
            }
            },
            zh: {
            translation: {
                'GP full name': '凰城華人基督教會',
                'GP short name': '凰城華人基督教會',
                'Cantonese service': '粵語崇拜',
                'English service': '英語崇拜',
                'Mandarin service': '華語崇拜',
                'Seek to': '尋求',
                'Opening prayer': '宣召',
                'Communion': '聖餐',
                'Congregational prayer': '公禱',
                'Baptism of Yong Wang': '王勇的洗禮',
                'Induction of new members': '招募新成員',
                'Missions at GPCCC': 'GPCCC的任務',
                'Youth Praise Night': '青年讚美之夜',
                'Closing prayer': '閉幕祈禱',
                'Announcements': '報告',
                'Benediction': '祝禱',
                'Happy birthday, Pastor Larry': '李長橋牧師，生日快樂',

                'Rev. Jerry Lin': '林聖智牧師',
                'Rev. Larry Lee': '李長橋牧師',
                'Rev. Steven Chin': '陳卓明牧師',
                'Rev. Peter Liu': '劉書華牧師',
                'Pastor Chien Chen': 'Chien Chen牧師',
                'Rev. Weizhong Sun': '孫偉中牧師',
                'Rev. Semson Nip': '聶深信牧師',
                'Elder Albert Wong': '王Albert長老',

                'Recent services': '最近講道',
                'Older services': '較舊講道',
                'Unable to seek to': '無法追踪',
                'Unable to load service': '無法加載服務',
                'TODO: Go to a page listing all worship services': '待辦事項：轉到列出所有敬拜服務的頁面',
                'Cantonese service combined with Mandarin service': '粵語服務與普通話服務相結合',
                'English service combined with Mandarin service': '英語服務結合普通話服務',

                'Sermon': '講道',
                'Beginning': '開始',
                'Prayer': '禱告',
                'Bible verse': '聖經經文',

                // Cantonese sermons
                '一天新似一天 (林后4:16-18)': '一天新似一天 (哥林多後書 4:16-18)',
                '不是我，是圣灵！(林后3:1-11)': '不是我，是聖靈！ (哥林多後書 3:1-11)',
                '基督的香气 (林后2:14-17)': '基督的香氣 (哥林多後書 2:14-17)',
                '指望将来 (林后1:8-11)': '指望將來 (哥林多後書 1:8-11)',

                // English sermons
                'Kingdom Peace (Philippians 3:17-4:9)': '王國和平 (腓立比書 3:17-4:9)',
                'Send Us Ministers (Ezra 8)': '派我們部長 (以斯拉記 8)',
                'The Sovereignty of God (Ezra 7)': '上帝的主權 (以斯拉記 7)',
                'Temple Filled with Joy (Ezra 6)': '充滿喜悅的神殿 (以斯拉記 6)',
                'Rebuilding Resumes (Ezra 5)': '重建簡歷 (以斯拉記 5)',
                'Rebuilding Opposed (Ezra 4)': '反對重建 (以斯拉記 4)',
                'First Comes Sacrifice (Ezra 3)': '先來獻祭 (以斯拉記 3)',
                'Talent (Exodus 4:10-17)': '天賦 (出埃及记 4:10-17)',

                // Mandarin sermons
                '犹太人的王 (约19:14-19)': '猶太人的王 (约翰福音 19:14-19)',
                '真理必叫我们得以自由 (约18:28-40)': '真理必叫我们得以自由 (约翰福音 18:28-40)',
                '权能恩典的主 (约18:12-27)': '權能恩典的主 (约翰福音 18:12-27)',
                '合一的祈祷 (约17:20-26)': '合一的祈禱 (约翰福音 17:20-26)',
                '圣灵的工作 (约16:1-15)': '圣灵的工作 (约翰福音 16:1-15)',
                '我是真葡萄树 (约15:1-10)': '我是真葡萄樹 (约翰福音 15:1-10)',
                '愿你们平安 (约20:19-21)': '願你們平安 (约翰福音 20:19-21)',

                // English Bible verses
                '1 Chronicles 16:23-31': '歷代誌上 16:23-31',
                'John 15:9-13': '约翰福音 15:9-13',
                'Psalm 103:1-5, 8, 14-17, 22': '詩篇 103:1-5, 8, 14-17, 22',
                'Job 1:20-21': '約伯記 1:20-21',
                'Job 42:1-5; Psalm 30:4-5': '約伯記 42:1-5; 詩篇 30:4-5',
                'Psalm 18:2-6, 16-17, 46, 49': '詩篇 18:2-6, 16-17, 46, 49',
                '1 Samuel 2:1-10': '撒母耳記上 2:1-10',
                'Luke 23:32-43': '路加福音 23:32-43',

                // English praise songs
                'How Great is Our God': '我神真偉大',
                'Son of God': '神之子',
                'Give Us Clean Hands': '給我們乾淨的手',

                'Our God': '我們的神',
                'Lay Me Down': '放下我',
                'King of My Heart': '我心中的王',
                'Speak, O Lord': '主請說',
                'Jesus, Thank You': '感謝，耶穌',

                '10,000 Reasons': '我的靈讚美袮',
                'Great Things': '偉大的事情',
                'King of Kings': '萬王之王',
                'Nobody Loves Me Like You': '沒有人像你一樣愛我',
                'Way Maker': '開路者',

                'Blessed Be Your Name': '稱頌主聖名',
                'Your Love Never Fails': '你的愛永不止息',
                'Gracefully Broken': '優雅地打破',
                'Lord, I Need You': '主啊，我需要祢',

                'O Come to the Altar': '來到祭壇前',
                'Rock of Ages (You will Stand)': '歷代搖滾 (您將站立)',
                'The Wonderful Cross': '奇妙的十字架',

                'O Praise the Name': '讚美祂名',
                'Center': '中央',
                'Better': '更好',
                'Forever': '永遠',

                'Who You Say I Am': '名分祢已賜給我',
                'Broken Vessels / Majesty': '破碎器皿 / 威嚴',

                // Mandarin praise songs
                '神羔羊配得': '神羔羊配得',

                '耶稣基督是主': '耶穌基督是主',
                '耶稣，万名之上的名': '耶穌，萬名之上的名',
                '认定祢': '認定祢',
                '献上活祭': '獻上活祭',
                '祢的话': '祢的話',

                '你真配得荣耀/你真伟大': '你真配得榮耀/你真偉大',
                "工人的祷告": "工人的禱告",
                '我的心，你要称颂耶和华': '我的心，你要稱頌耶和華',
                '祂藏我灵': '祂藏我靈',

                '敬拜主': '敬拜主',
                '来高声唱': '來高聲唱',
                '充满我': '充满我',
                '奇异恩典': '奇異恩典',
                '从心合一': '從心合一',

                '我的神，我的父，我的磐石': '我的神，我的父，我的磐石',
                '耶稣爱你': '耶穌愛你',
                '圣灵的江河': '聖靈的江河',
                '宝贵十架': '寶貴十架',

                '来拥戴主为王': '來擁戴主為王',
                '成为我异象': '成為我異象',
                '彼此相爱': '彼此相愛',
                "我愿为祢去": "我願為祢去",

                '你是何等荣美': '你是何等榮美',
                '让神儿子的爱围绕你': '讓神兒子的愛圍繞你',
                '藉我赐恩福': '藉我赐恩福',
                '差遣我': '差遣我',

                // Cantonese praise songs
                '祢信实何广大': '祢信實何廣大',
                '永恆的主': '永恆的主',
                '生命的冠冕': '生命的冠冕',
                '感谢神': '感谢神',

                '真光普照': '真光普照',
                '生命活水充满我': '生命活水充满我',
                '光和盐': '光和鹽',
                '立志传扬祢的爱': '立志傳揚祢的愛',

                '举手赞颂': '舉手讚頌',
                '为祢绽放馨香': '為祢綻放馨香',
                '谢谢我主': '谢谢我主',

                '将天敞开': '將天敞開',
                '高声颂讚主': '高聲頌讚主',
                '复活的主': '復活的主',
            }
            },
            zf: {
            translation: {
                'GP full name': '凰城华人基督教会',
                'GP short name': '凰城华人基督教会',
                'Cantonese service': '粤语崇拜',
                'English service': '英语崇拜',
                'Mandarin service': '华语崇拜',
                'Seek to': '寻求',
                'Opening prayer': '宣召',
                'Communion': '圣餐',
                'Congregational prayer': '公祷',
                'Missions at GPCCC': 'GPCCC的任务',
                'Baptism of Yong Wang': '王勇的洗礼',
                'Induction of new members': '招募新成员',
                'Youth Praise Night': '青年赞美之夜',
                'Closing prayer': '闭幕祈祷',
                'Announcements': '报告',
                'Benediction': '祝祷',
                'Happy birthday, Pastor Larry': '李長橋牧师，生日快乐',

                'Rev. Jerry Lin': '林圣智牧师',
                'Rev. Larry Lee': '李长桥牧师',
                'Rev. Steven Chin': '陈卓明牧师',
                'Rev. Peter Liu': '刘书华牧师',
                'Pastor Chien Chen': 'Chien Chen牧师',
                'Rev. Weizhong Sun': '孙伟中牧师',
                'Rev. Semson Nip': '聂深信牧师',
                'Elder Albert Wong': '王Albert长老',

                'Recent services': '最近讲道',
                'Older services': '较旧讲道',
                'Unable to seek to': '无法追踪',
                'Unable to load service': '无法加载服务',
                'TODO: Go to a page listing all worship services': '待办事项：转到列出所有敬拜服务的页面',
                'Cantonese service combined with Mandarin service': '粤语服务与国语服务相结合',
                'English service combined with Mandarin service': '英语服务结合普通话服务',

                'Sermon': '讲道',
                'Beginning': '开始',
                'Prayer': '祷告',
                'Bible verse': '圣经经文',

                // Cantonese sermons
                '一天新似一天 (林后4:16-18)': '一天新似一天 (哥林多後書 4:16-18)',
                '不是我，是圣灵！(林后3:1-11)': '不是我，是圣灵！ (哥林多后书 3:1-11)',
                '基督的香气 (林后2:14-17)': '基督的香气 (哥林多后书 2:14-17)',
                '指望将来 (林后1:8-11)': '指望将来 (哥林多后书 1:8-11)',

                // English sermons
                'Kingdom Peace (Philippians 3:17-4:9)': '王国和平 (腓立比书 3:17-4:9)',
                'Send Us Ministers (Ezra 8)': '派我们部长 (以斯拉记 8)',
                'The Sovereignty of God (Ezra 7)': '上帝的主权 (以斯拉记 7)',
                'Temple Filled with Joy (Ezra 6)': '充满喜悦的神殿 (以斯拉记 6)',
                'Rebuilding Resumes (Ezra 5)': '重建简历 (以斯拉记 5)',
                'Rebuilding Opposed (Ezra 4)': '反对重建 (以斯拉记 4)',
                'First Comes Sacrifice (Ezra 3)': '先来献祭 (以斯拉记 3)',
                'Talent (Exodus 4:10-17)': '天赋 (出埃及记 4:10-17)',

                // Mandarin sermons
                '犹太人的王 (约19:14-19)': '犹太人的王 (约翰福音 19:14-19)',
                '真理必叫我们得以自由 (约18:28-40)': '真理必叫我們得以自由 (约翰福音 18:28-40)',
                '权能恩典的主 (约18:12-27)': '权能恩典的主 (约翰福音 18:12-27)',
                '合一的祈祷 (约17:20-26)': '合一的祈祷 (约翰福音 17:20-26)',
                '圣灵的工作 (约16:1-15)': '聖靈的工作 (约翰福音 16:1-15)',
                '我是真葡萄树 (约15:1-10)': '我是真葡萄树 (约翰福音 15:1-10)',
                '愿你们平安 (约20:19-21)': '愿你们平安 (约翰福音 20:19-21)',

                // English Bible verses
                '1 Chronicles 16:23-31': '历代志上 16:23-31',
                'John 15:9-13': '约翰福音 15:9-13',
                'Psalm 103:1-5, 8, 14-17, 22': '诗篇 103:1-5, 8, 14-17, 22',
                'Job 1:20-21': '约伯记 1:20-21',
                'Job 42:1-5; Psalm 30:4-5': '约伯记 42:1-5; 诗篇 30:4-5',
                'Psalm 18:2-6, 16-17, 46, 49': '诗篇 18:2-6, 16-17, 46, 49',
                '1 Samuel 2:1-10': '撒母耳记上 2:1-10',
                'Luke 23:32-43': '路加福音 23:32-43',

                // English praise songs
                'How Great is Our God': '我神真伟大', // found Chinese version
                'Son of God': '神之子',
                'Give Us Clean Hands': '给我们干净的手',

                'Our God': '我们的神', // found Chinese version
                'Lay Me Down': '放下我', 
                'King of My Heart': '我心中的王', // found Chinese version
                'Speak, O Lord': '主请说', // found Chinese version
                'Jesus, Thank You': '感谢，耶稣', // found Chinese version

                '10,000 Reasons': '我的灵赞美祢', // found Chinese version
                'Great Things': '伟大的事情',
                'King of Kings': '万王之王', // found Chinese version
                'Nobody Loves Me Like You': '没有人像你一样爱我',
                'Way Maker': '开路者', // found Chinese version

                'Blessed Be Your Name': '称颂主圣名', // found Chinese version
                'Your Love Never Fails': '你的爱永不止息',
                'Gracefully Broken': '优雅地打破',
                'Lord, I Need You': '主啊，我需要祢', // found Chinese version

                'O Come to the Altar': '来到祭坛前', // found Chinese version
                'Rock of Ages (You will Stand)': '历代摇滚 (您将站立)',
                'The Wonderful Cross': '奇妙的十字架',

                'O Praise the Name': '赞美祂名', // found Chinese version
                'Center': '中央',
                'Better': '更好',
                'Forever': '永远',

                'Who You Say I Am': '名分祢已賜給我', // found Chinese version
                'Broken Vessels / Majesty': '破碎器皿 / 威严', // found Chinese version - Broken Vessels, but not Majesty

                // Mandarin praise songs
                '神羔羊配得': '神羔羊配得',

                '耶稣基督是主': '耶稣基督是主',
                '耶稣，万名之上的名': '耶稣，万名之上的名',
                '认定祢': '认定祢',
                '献上活祭': '献上活祭',
                '祢的话': '祢的话',

                '你真配得荣耀/你真伟大': '你真配得荣耀/你真伟大',
                "工人的祷告": "工人的祷告",
                '我的心，你要称颂耶和华': '我的心，你要称颂耶和华',
                '祂藏我灵': '祂藏我灵',

                '敬拜主': '敬拜主',
                '来高声唱': '来高声唱',
                '充满我': '充满我',
                '奇异恩典': '奇异恩典',
                '从心合一': '从心合一',

                '我的神，我的父，我的磐石': '我的神，我的父，我的磐石',
                '耶稣爱你': '耶稣爱你',
                '圣灵的江河': '圣灵的江河',
                '宝贵十架': '宝贵十架',

                '来拥戴主为王': '来拥戴主为王',
                '成为我异象': '成为我异象',
                '彼此相爱': '彼此相爱',
                "我愿为祢去": "我愿为祢去",

                '你是何等荣美': '你是何等荣美',
                '让神儿子的爱围绕你': '让神儿子的爱围绕你',
                '藉我赐恩福': '借我赐恩福',
                '差遣我': '差遣我',

                // Cantonese praise songs
                '祢信实何广大': '祢信实何广大',
                '永恆的主': '永恒的主',
                '生命的冠冕': '生命的冠冕',
                '感谢神': '感谢神',

                '真光普照': '真光普照',
                '生命活水充满我': '生命活水充满我',
                '光和盐': '光和盐',
                '立志传扬祢的爱': '立志传扬祢的爱',

                '举手赞颂': '举手赞颂',
                '为祢绽放馨香': '为祢绽放馨香',
                '谢谢我主': '谢谢我主',

                '将天敞开': '将天敞开',
                '高声颂讚主': '高声颂讚主',
                '复活的主': '复活的主',
            }
            },
        },
        lng: lngCode,
        fallbackLng: 'en',
        debug: true,
        keySeparator: false,
        nsSeparator: '|',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;