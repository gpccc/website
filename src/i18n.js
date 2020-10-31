import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

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
    resources:  {
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

            // Cantonese sermons
            'Day New Day (2 Corinthians 4:16-18)': 'Day New Day (2 Corinthians 4:16-18)',

            // English sermons
            'The Sovereignty of God (Ezra 7)': 'The Sovereignty of God (Ezra 7)',
            'Temple Filled with Joy (Ezra 6)': 'Temple Filled with Joy (Ezra 6)',
            'Rebuilding Resumes (Ezra 5)': 'Rebuilding Resumes (Ezra 5)',
            'Rebuilding Opposed (Ezra 4)': 'Rebuilding Opposed (Ezra 4)',
            'First Comes Sacrifice (Ezra 3)': 'First Comes Sacrifice (Ezra 3)',
            'Talent (Exodus 4:10-17)': 'Talent (Exodus 4:10-17)',

            // Mandarin sermons
            'Truth Will Set Us Free (John 18:28-40)': 'Truth Will Set Us Free (John 18:28-40)',

            // English praise songs
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
            'Jesus Christ is Lord': 'Jesus Christ is Lord',
            'Jesus, the Name Above All Names': 'Jesus, the Name Above All Names',
            'Recognize You': 'Recognize You',
            'Live Sacrifice': 'Live Sacrifice',
            'Your Words': 'Your Words',

            'You Are Worthy of Glory/You Are Great': 'You Are Worthy of Glory/You Are Great',
            "Worker's Prayer": "Worker's Prayer",
            'Praise the Lord, O My Soul': 'Praise the Lord, O My Soul',
            'He Hides My Spirit': 'He Hides My Spirit',

            'Worship the Lord': 'Worship the Lord',
            'Come Sing Loudly': 'Come Sing Loudly',
            'Fill Me': 'Fill Me',
            'Amazing Grace': 'Amazing Grace',
            'Unity From the Heart': 'Unity From the Heart',

            'My God, My Father, My Rock': 'My God, My Father, My Rock',
            'Jesus Loves You': 'Jesus Loves You',
            'Rivers of the Holy Spirit': 'Rivers of the Holy Spirit',
            'Precious Cross': 'Precious Cross',

            'Crown Him with Many Crowns': 'Crown Him with Many Crowns',
            'Be My Vision': 'Be My Vision',
            'Love Each Other': 'Love Each Other',
            "I'd Go for You": "I'd Go for You",

            'Jesus, My Everything': 'Jesus, My Everything',
            'Let the Love of Jesus Surround You': 'Let the Love of Jesus Surround You',
            'Make Me a Blesssing': 'Make Me a Blesssing',
            'Send Me': 'Send Me',

            // Cantonese praise songs
            'Great is Your Faithfulness': 'Great is Your Faithfulness',
            'Everlasting God': 'Everlasting God',
            'Crown of Life': 'Crown of Life',
            'Thank God': 'Thank God',

            'Shine Jesus Shine': 'Shine Jesus Shine',
            'The Living Water of Life Fills Me': 'The Living Water of Life Fills Me',
            'Light and Salt': 'Light and Salt',
            'Determined to Spread Your Love': 'Determined to Spread Your Love',

            'Raise Hands in Praise': 'Raise Hands in Praise',
            'Bloom for You': 'Bloom for You',
            'Thank My Lord': 'Thank My Lord',

            'Open the Sky': 'Open the Sky',
            'Sing with Gladness': 'Sing with Gladness',
            'The Resurrected Lord': 'The Resurrected Lord',
          }
        },
        zh: {
          translation: {
            'GP full name': '鳳凰城華人基督教會',
            'GP short name': '鳳凰城華人基督教會',
            'Cantonese service': '粵語崇拜', // TODO: Cantonese worship
            'English service': '英語崇拜', // TODO: English worship
            'Mandarin service': '華語崇拜', // TODO: Chinese worship
            'Seek to': '尋求',
            'Opening prayer': '宣召',
            'Communion': '聖餐',
            'Congregational prayer': '公禱',
            'Baptism of Yong Wang': '王勇的洗禮',
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

            // Cantonese sermons
            'Day New Day (2 Corinthians 4:16-18)': '一天新似一天 (哥林多后书 4:16-18)',

            // English sermons
            'The Sovereignty of God (Ezra 7)': '上帝的主權 (以斯拉記 7)',
            'Temple Filled with Joy (Ezra 6)': '充滿喜悅的神殿 (以斯拉記 6)',
            'Rebuilding Resumes (Ezra 5)': '重建簡歷 (以斯拉記 5)',
            'Rebuilding Opposed (Ezra 4)': '反對重建 (以斯拉記 4)',
            'First Comes Sacrifice (Ezra 3)': '先來獻祭 (以斯拉記 3)',
            'Talent (Exodus 4:10-17)': '天賦 (出埃及记 4:10-17)',

            // Mandarin sermons
            'Truth Will Set Us Free (John 18:28-40)': '真理必叫我们得以自由 (约翰福音 18:28-40)',

            // English praise songs
            'Our God': '我們的神',
            'Lay Me Down': '放下我',
            'King of My Heart': '我心中的王',
            'Speak, O Lord': '主請說',
            'Jesus, Thank You': '感謝,耶穌',

            '10,000 Reasons': '我的靈讚美袮',
            'Great Things': '偉大的事情',
            'King of Kings': '萬王之王',
            'Nobody Loves Me Like You': '沒有人像你一樣愛我',
            'Way Maker': '開路者',

            'Blessed Be Your Name': '稱頌主聖名',
            'Your Love Never Fails': '你的愛永不止息',
            'Gracefully Broken': '優雅地打破',
            'Lord, I Need You': '主啊,我需要祢',

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
            'Jesus Christ is Lord': '耶穌基督是主',
            'Jesus, the Name Above All Names': '耶穌，萬名之上的名',
            'Recognize You': '認定祢',
            'Live Sacrifice': '獻上活祭',
            'Your Words': '祢的話',

            'You Are Worthy of Glory/You Are Great': '你真配得榮耀/你真偉大',
            "Worker's Prayer": "工人的禱告",
            'Praise the Lord, O My Soul': '我的心，你要稱頌耶和華',
            'He Hides My Spirit': '祂藏我靈',

            'Worship the Lord': '敬拜主',
            'Come Sing Loudly': '來高聲唱',
            'Fill Me': '充满我',
            'Amazing Grace': '奇異恩典',
            'Unity From the Heart': '從心合一',

            'My God, My Father, My Rock': '我的神，我的父，我的磐石',
            'Jesus Loves You': '耶穌愛你',
            'Rivers of the Holy Spirit': '聖靈的江河',
            'Precious Cross': '寶貴十架',

            'Crown Him with Many Crowns': '來擁戴主為王',
            'Be My Vision': '成為我異象',
            'Love Each Other': '彼此相愛',
            "I'd Go for You": "我願為祢去",

            'Jesus, My Everything': '你是何等榮美',
            'Let the Love of Jesus Surround You': '讓神兒子的愛圍繞你',
            'Make Me a Blesssing': '藉我赐恩福',
            'Send Me': '差遣我',

            // Cantonese praise songs
            'Great is Your Faithfulness': '祢信實何廣大',
            'Everlasting God': '永恆的主',
            'Crown of Life': '生命的冠冕',
            'Thank God': '感谢神',

            'Shine Jesus Shine': '真光普照',
            'The Living Water of Life Fills Me': '生命活水充满我',
            'Light and Salt': '光和鹽',
            'Determined to Spread Your Love': '立志傳揚祢的愛',

            'Raise Hands in Praise': '舉手讚頌',
            'Bloom for You': '為祢綻放馨香',
            'Thank My Lord': '谢谢我主',

            'Open the Sky': '將天敞開',
            'Sing with Gladness': '高聲頌讚主',
            'The Resurrected Lord': '復活的主',
          }
        },
        zf: {
          translation: {
            'GP full name': '凤凰城华人基督教会',
            'GP short name': '凤凰城华人基督教会',
            'Cantonese service': '粤语崇拜', // TODO: Cantonese worship
            'English service': '英语崇拜', // TODO: English worship
            'Mandarin service': '华语崇拜', // TODO: Chinese worship
            'Seek to': '寻求',
            'Opening prayer': '宣召',
            'Communion': '圣餐',
            'Congregational prayer': '公祷',
            'Missions at GPCCC': 'GPCCC的任务',
            'Baptism of Yong Wang': '王勇的洗礼',
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

            // Cantonese sermons
            'Day New Day (2 Corinthians 4:16-18)': '一天新似一天 (哥林多後書 4:16-18)',

            // English sermons
            'The Sovereignty of God (Ezra 7)': '上帝的主权 (以斯拉记 7)',
            'Temple Filled with Joy (Ezra 6)': '充满喜悦的神殿 (以斯拉記 6)',
            'Rebuilding Resumes (Ezra 5)': '重建简历 (以斯拉記 5)',
            'Rebuilding Opposed (Ezra 4)': '反对重建 (以斯拉記 4)',
            'First Comes Sacrifice (Ezra 3)': '先来献祭 (以斯拉記 3)',
            'Talent (Exodus 4:10-17)': '天赋 (出埃及记 4:10-17)',

            // Mandarin sermons
            'Truth Will Set Us Free (John 18:28-40)': '真理必叫我們得以自由 (约翰福音 18:28-40)',

            // English praise songs
            'Our God': '我们的神', // found Chinese version
            'Lay Me Down': '放下我', 
            'King of My Heart': '我心中的王', // found Chinese version
            'Speak, O Lord': '主请说', // found Chinese version
            'Jesus, Thank You': '感谢,耶稣', // found Chinese version

            '10,000 Reasons': '我的灵赞美祢', // found Chinese version
            'Great Things': '伟大的事情',
            'King of Kings': '万王之王', // found Chinese version
            'Nobody Loves Me Like You': '没有人像你一样爱我',
            'Way Maker': '开路者', // found Chinese version

            'Blessed Be Your Name': '称颂主圣名', // found Chinese version
            'Your Love Never Fails': '你的爱永不止息',
            'Gracefully Broken': '优雅地打破',
            'Lord, I Need You': '主啊,我需要祢', // found Chinese version

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
            'Jesus Christ is Lord': '耶稣基督是主',
            'Jesus, the Name Above All Names': '耶稣，万名之上的名',
            'Recognize You': '认定祢',
            'Live Sacrifice': '献上活祭',
            'Your Words': '祢的话',

            'You Are Worthy of Glory/You Are Great': '你真配得荣耀/你真伟大',
            "Worker's Prayer": "工人的祷告",
            'Praise the Lord, O My Soul': '我的心，你要称颂耶和华',
            'He Hides My Spirit': '祂藏我灵',

            'Worship the Lord': '敬拜主',
            'Come Sing Loudly': '来高声唱',
            'Fill Me': '充满我',
            'Amazing Grace': '奇异恩典',
            'Unity From the Heart': '从心合一',

            'My God, My Father, My Rock': '我的神，我的父，我的磐石',
            'Jesus Loves You': '耶稣爱你',
            'Rivers of the Holy Spirit': '圣灵的江河',
            'Precious Cross': '宝贵十架',

            'Crown Him with Many Crowns': '来拥戴主为王',
            'Be My Vision': '成为我异象',
            'Love Each Other': '彼此相爱',
            "I'd Go for You": "我愿为祢去",

            'Jesus, My Everything': '你是何等荣美',
            'Let the Love of Jesus Surround You': '让神儿子的爱围绕你',
            'Make Me a Blesssing': '借我赐恩福',
            'Send Me': '差遣我',

            // Cantonese praise songs
            'Great is Your Faithfulness': '祢信实何广大',
            'Everlasting God': '永恒的主',
            'Crown of Life': '生命的冠冕',
            'Thank God': '感谢神',

            'Shine Jesus Shine': '真光普照',
            'The Living Water of Life Fills Me': '生命活水充满我',
            'Light and Salt': '光和盐',
            'Determined to Spread Your Love': '立志传扬祢的爱',

            'Raise Hands in Praise': '举手赞颂',
            'Bloom for You': '为祢绽放馨香',
            'Thank My Lord': '谢谢我主',

            'Open the Sky': '将天敞开',
            'Sing with Gladness': '高声颂讚主',
            'The Resurrected Lord': '复活的主',
          }
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    keySeparator: false,
    nsSeparator: '|',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;