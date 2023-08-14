import BLOG from '@/blog.config'

// 毒雞湯
// Ref: https://github.com/wurencaideli/dujitang
/**
 * 毒雞湯
 * 隨機生成毒雞湯
 * @returns
 */

const Badsoup = () => {
  if (!BLOG.BADSOUP) {
    return <></>
  }
  const soupdata = getData()
  let max = soupdata.length
  max = Math.ceil(Math.random() * max) - 1

  return <p>毒雞湯: {soupdata[max]}</p>
}

export default Badsoup

function getData() {
  return [
    '謝謝你，在我每次需要你的時候都掉鏈子',
    '喜歡就去表白，不然你不會知道自己長得多醜。',
    '雖然我學得慢，但是我放棄的快啊！',
    '死並不可怕，怕的是再也不能活了。',
    '誰說我不會樂器？我退堂鼓打的可好了。',
    '世界這麽大，我想去看看，什麽地方要飯比較方便！',
    '世界上本沒有雞湯，雞死了，便做成了雞湯。',
    '詩和遠方越遠越臟 以夢為馬越騎越傻！',
    '生活不止眼前的茍且，還有讀不懂的詩和到不了的遠方。',
    '上帝為你關上一道防盜門，還會順手給你上了一把鈦合金鎖。',
    '如果所有人都理解你，那你得普通成什麽樣！',
    '如果十年之後你未娶，我未嫁，那真是太慘了！',
    '人生不如意，十之有十！',
    '人人都想拯救世界，卻沒人幫媽媽洗碗。',
    '其實只要不要臉，很多人生難題都能迎刃而解。',
    '女人假裝高潮來維持戀愛，而男人假裝戀愛以獲得高潮。',
    '你每天都那麽努力，忍受了那麽多的寂寞和痛苦。可我也沒見你有多優秀！',
    '你多努力一點，獲得的打擊就多一點。',
    '那些年立下的FLAG自己刪了吧，反正也沒人記得。',
    '沒有什麽事情能把人一次擊倒，只要足夠堅強，它會持續的把你擊倒！',
    '沒有人能讓那你放棄減肥，你自己想想就會放棄了。',
    '厲害的不是你有多少後台，而是你能成為多少人的後台！',
    '就算睡得晚，不會找你的人還是不會找你！',
    '今天的事不用放在今天做，萬一明天死了呢，就可以不用做了。',
    '很多時候，樂觀的態度和好聽的話幫不了你。',
    '狗是人類最好的朋友。 然而狗最好的朋友是「屎」。',
    '給你的夢想插上翅膀，雖然不一定飛得很遠，但肯定摔的很重！',
    '當你覺得生活對你不公時，秤秤體重，照照鏡子，你會覺得一切又合乎情理。',
    '打趴下就不要爬起來了，反正還是會被打到趴下！',
    '曾經我也是打算靠臉吃飯的，後來差點餓死才放棄的。',
    '不要以為世界拋棄了你，世界根本沒空搭理你！',
    '別總罵恨鐵不成鋼，是你自己忘了，鐵本來就不能成鋼的啊。',
    '別人問你有談戀愛嗎？就說現在沒有。可以機智地掩蓋過去也沒有的事實。',
    '別看我平時對你漠不關心，其實私下里我每天都盼著你出事！',
    '抱怨不會改變生活，但是錢可以！',
    '白天嘈雜得不願意醒，夜晚安靜得舍不得睡。',
    '做政治試卷，是我這輩子，說謊最多的時候。',
    '做一天的好人並不難，難的是做一輩子有錢人。',
    '做題前，先想想出題者的用意，我覺得他想我死。',
    '做事一定要考慮別人的感受，千萬不能讓他們太開心了。',
    '做任何事情一定要堅持下去，總會讓你看到，失敗的那一天。',
    '做人要謙虛，多聽聽他人的意見，然後認真記下他們的名字。',
    '做人要安安穩穩本本分分，因為，你也根本搞不出什麽幺蛾子。',
    '做人如果沒點追求，那麽，該多輕松啊…',
    '做夢夢到自己在考試，然後被嚇醒，發現自己真的在考試。',
    '做了一個風險非常大的投資，要是成功一下就能掙幾個億，要失敗我這兩塊就打水漂了。',
    '做好萬全的準備，就是為了當機會來臨時，你可以巧妙地避開它。',
    '做好人沒希望，做壞人不擅長。',
    '作為失敗的典型，你實在是太成功了。',
    '昨天遇見小學同班同學，沒想到他混的這麽差，只往我碗里放了一塊錢。',
    '昨天一個小偷，來我家偷錢，我們一起找了一晚上。',
    '最怕你一生碌碌無為，還安慰自己說平凡可貴。',
    '最近一個月，總有那麽三十天很不順。',
    '最近改掉了熬夜的壞習慣，改通宵了。',
    '縱然人生坎坷，但我從不向命運屈服！我通常都是直接屈膝Orz。',
    '總以為退一步海闊天空，沒想到腳下落空。',
    '總是在重覆，尤其是錯誤！',
    '總是在淩晨想通很多事情，又在天亮之後，忘得一幹二凈。',
    '總結一下你的2018，留下你的不開心，讓大家開心開心。',
    '自由從來不是什麽理所當然的東西，而是一項需要極高成本的特權。',
    '自古情深留不住，總是套路得人心。',
    '裝逼只是瞬間，不要臉那才是永恒。',
    '賺錢就像便秘 — 老難了，花錢就像拉稀 — 憋不住。',
    '轉角一般不會遇到愛，只會遇到乞丐。',
    '注重細節，從小事做起，因為你根本做不了大事。',
    '眾里尋她千百度，驀然回首，那人依舊對我不屑一顧。',
    '終於中了500萬，兌獎的時候，笑醒了。',
    '至少在夏天，富得流油你已經做到了一半。',
    '知識給你力量，無知會給你更強大無畏，且無法預測的力量。',
    '知道為什麽天妒英才嗎？ 因為沒人去管笨蛋活了多久。',
    '知道為何自古紅顏多薄命嗎？因為沒人在意醜的人活多久。',
    '只有在車站大排長龍時，才能真正意識到，自己是龍的傳人。',
    '只有在，請假扣工資時，才覺得自己工資高。',
    '只有努力過了才知道，智商上的差距是不可逾越的。',
    '只有努力過了才知道，智商上的差距，是不可逾越的。',
    '只有努力過的人才知道，背景是多麽重要！',
    '只有多替領導背鍋，領導才會把你，當成傻子啊。',
    '只要有快遞還在路上，就感覺這生活，還算有點希望。',
    '只要選對了人生的方向，很容易就成功了，讓我們恭喜只要和很容易。',
    '只要我肯努力，沒什麽事情是我搞不砸的。',
    '只要我吃的夠快，體重絕對追不上我！',
    '只要是石頭，到哪里都不會發光。',
    '只要努力的時間足夠長，搞不好，你還可以失敗的更徹底。',
    '只要你每天堅持學習，最終勝利肯定是屬於，在考場上發揮好的人。',
    '只要你肯吃苦，肯努力，肯放下身段，去要飯，總會有人趕的',
    '只要能用錢解決的事情，我一件都解決不了。',
    '只要堅持不懈，嘲笑你的人，遲早會被你笑死。',
    '只要功夫深鐵杵磨成針，但真把鐵杵磨成針的，絕對是大傻瓜。',
    '只要鋤頭揮得好，沒有墻角挖不倒。',
    '只是因為在人群中，多看了你一眼，你就以為我要坐你的摩的。',
    '掙錢是一種能力，花錢是一種技術，我能力有限技術卻很高。',
    '正在輸入…，給了多少人希望，又給了多少人失望。',
    '正月初五迎財神，那都是有錢人的事，你就洗洗睡吧。',
    '真正努力過的人才知道，智商上的差距是不可逾越的。',
    '真正努力過的人，就會明白，天賦是有多麽重要。',
    '真正的勇士，敢於直面銀行卡上的余額，敢於正視磅秤上的數字。',
    '真正的吃貨，是可以把月供看成月餅的。',
    '真希望有一天我的錢包，可以和我的臉皮一樣厚。',
    '這一秒不放棄，下一秒，就更絕望了。',
    '這世上如果有什麽真理，那就是活該！',
    '這世上沒誰離不開誰，就算是一條魚離開水，也能烤著吃。',
    '這年頭有些人靠臉吃飯，而有些人，靠不要臉吃飯。',
    '這年頭放個假真不容易，連放假都要沾老祖宗的光。',
    '這年頭，哪有不分手的戀愛，只有不傷手的立白。遇事得看開一點。',
    '這麽多年沒掉入桃色陷阱，靠的就是兩個字，沒錢。',
    '這兩天雨水多，下雨記得打傘，否則腦袋容易進水。',
    '這孩子不是笨，就是學習方法不對。學習方法都找不對還不是笨啊？',
    '這個年紀會在你耳邊唱歌，喜歡你的肉體還會送你包的，只剩下蚊子了。',
    '這次期末考，我會用實力告訴你，我們年級共有多少人。',
    '這輩子最燦爛的笑容，大概都奉獻給，我的手機屏幕了。',
    '這輩子這麽苦，別太拼，下輩子還會更苦的。',
    '找對象還是眼光高點好，你總得為，沒有人喜歡你找個借口吧。',
    '找對象的時候，不要光看對方外表，得先看看自己外表！',
    '仗義每從屠狗輩，負心多是讀書人。',
    '長的美與不美不重要，想的美才是真的美！',
    '長的好看的才能叫吃貨，長的不好看的只能叫飯桶。',
    '長的醜不是我的錯，只是我在落地時太匆忙了，來不急打扮。',
    '長得帥的踢鍵子都帥，長得醜的，打高爾夫都像在鏟屎。',
    '長得好看的才叫吃貨，長得不好看的那叫飯桶！',
    '長得醜怎麽了？我自己又看不到，惡心的是你們！',
    '債主，就是那個你破了產，也不會拋棄你的人。',
    '紮心？不存在的！心都沒有紮哪里？',
    '早睡早起身體好，可是晚睡晚起真的心情好。',
    '早上醒來，我以為自己長大了，原來是被子蓋橫了～',
    '早起的鳥兒有蟲吃，可惜你是那條蟲。',
    '早點睡吧，因為你喜歡的人，早就跟別人睡著了。',
    '早晨起來照鏡子，安慰自己說沒事，還有比我更醜的。',
    '糟糕的從來都不只是今天，還有你的以後。',
    '攢了一年頭皮屑，只為給你下場雪。',
    '在最美的年紀遇見你，我想說，真是倒了血黴了！',
    '在你最需要幫助的時候，只有鬼才來幫你。',
    '在出租車內瘋狂放臭屁，可以極大的降低，司機帶你繞路的概率。',
    '再也沒有任何事情，比晚睡更快樂了，除了晚起。',
    '再努力一點，你就能走向，人生癲瘋。',
    '再苦不能苦孩子，再窮也得窮得瑟。',
    '再不瘋狂就老了，瘋狂過後發現老的更快。',
    '運動一周瘦不下來不要緊，因為運動十周也瘦不下來的。',
    '運動後，你會驚喜地發現，自己只是從肥胖變成壯。',
    '月亮代表我的心，坑坑窪窪冷冰冰???。',
    '月老麻煩下次為我牽紅線，能換成鋼絲嗎？紅線老TM斷。',
    '願你以後，有酒有肉有姑娘，姑娘醜的不像樣。',
    '願你的煩惱，像你的頭發一樣，越來越少。',
    '願得一人心，免得老相親。',
    '遠方的路，除了未知，還有絕望。',
    '遇到喜歡的人就勇敢追求，這樣你才能知道，拒絕你的人遠不止一個。',
    '遇到喜歡的女生要勇敢表白，只有你主動了，才知道她名花有主。',
    '遇到閃電記得要微笑，因為那是天空在給你拍照。',
    '遇到你之前，我的世界是黑白的，遇見你之後 哇靠 全黑了。',
    '遇到困難的時候暫時放一放，第二天的時候，就再也想不起來了。',
    '遇到困難的三個步驟，面對它 處理它，放棄它。',
    '愚人節表白算什麽，清明節表白才是王道，失敗了還可以說是鬼附身了！',
    '愚人節，只是給說謊的人，一個說真話的機會。',
    '魚與熊掌不可兼得，但窮和醜可以啊。',
    '魚和熊掌不可兼得，但單身和窮可以！',
    '余生不想請你指教了，領教夠了',
    '又一天過去了，怎麽樣，是不是夢想更遙遠了？',
    '又到了一切矛盾，都能用「大過年的」四個字，解決的時候了。',
    '有緣千里來相會，無緣倒也省話費。',
    '有一天你會遇到一個妹子，她不要你的房也不要你的車，她也不要你。',
    '有一段情，叫自作多情。',
    '有些事情還是要堅持的，比如睡覺，特別是鬧鐘響起的那一刻。',
    '有些事或人，不是你有錢就可以搞定的，你得有很多錢。',
    '有些事不是我不在意，而是我在意了，又能怎樣？',
    '有些事，不說是個結，說了是個疤。',
    '有些人一旦錯過了，真特麽謝天謝地。',
    '有些人是好看的，有些人是難看的，而你是好難看的。',
    '有些人努力了一輩子，就是從社會的四流，擠入了三流。',
    '有些人就是四，除了二，還是二。',
    '有些人出現在你的生活里，是想告訴你，你真好騙啊！',
    '有些人表面光鮮亮麗，實際上，船襪已經滑到了腳底板。',
    '有時你會覺得自己就是個SB，別灰心，至少感覺是對的。',
    '有時候別人對你很冷淡，可能並不是你的問題。他也許只是不喜歡醜的而已。',
    '有時候，只要你下定決心做某件事，全世界都會拖你後腿。',
    '有什麽不開心就睡一覺，沒什麽是睡一覺不能解決的，如果有那就再睡個回籠覺。',
    '有人一笑就很好看，你是一看就挺好笑。',
    '有人考試靠實力，有人考試靠視力，尼瑪我考試靠想象力！',
    '有人存你號碼是為了打給你，我不一樣，我是為了不接。',
    '有錢人終成眷屬，沒錢人只能吃土。',
    '有錢人終成眷屬，沒錢人親眼目睹。',
    '有錢人離我好近，有錢離我好遠！',
    '有錢人可以選擇低調，而你，卻只能低調。',
    '有錢能買來幸福嗎？不能，有錢本身就是幸福！',
    '有錢了不起啊？有錢，真的了不起。',
    '有朋自遠方來，雖遠必誅。',
    '有困難要幫，沒有困難，制造困難也要幫。',
    '有很多時候，面子不是別人給的，是自己湊上來丟的。',
    '有股強烈的學習欲望，幸好我自制力強，壓下去了。',
    '有個姑娘問我借錢去整容，整的挺成功，我再沒認出是誰問我借的錢。',
    '友誼是什麽？你智障多年，我不離不棄。',
    '友情越來越少，禮尚往來越來越多。',
    '由於性格太內向，一直做不出，搶著結賬這種事。',
    '用錢當然買不到快樂，只是有錢，別人會想辦法讓你快樂。',
    '用美顏手機自拍多了，越來越不知道，自己有多醜了。',
    '用扯淡的態度，面對操蛋的人生。',
    '用2B形容你，人家鉛筆不樂意。',
    '勇敢面對磨難，那些殺不死你的頂多是讓你，留下殘疾。',
    '永遠不要自暴自棄，一旦開始放棄，你就會發現非常開心',
    '英雄一怒為紅顏，紅顏一怒，得花錢。',
    '因為窮我連關心你都不敢，就怕你說噓寒問暖，不如打筆巨款。',
    '以我的資歷和文憑，將來這個城市的大街，都歸我掃。',
    '以前我每天都會買彩票，終於有一天，我連彩票都買不起了。',
    '以前雖然窮但是很開心。現在不同往日了，不止窮還不開心。',
    '以前上學是拿錢混日子，現在工作了，是在拿日子混錢。',
    '以前覺得靠關系的人，一定很無能，接觸後發現人家樣樣比我強。',
    '以前過年就圖個熱鬧，現在就想圖個清靜。',
    '以前除了讀書什麽都不懂，現在除了讀書什麽都懂。',
    '以後要對女朋友好一點，畢竟她已經瞎了，不能再受傷害了。',
    '以後沒錢了先找我借，我不想做最後一個，讓你失望的人。',
    '一想到你，我的醜臉，就泛起微笑。',
    '一無所有到，沒有什麽可以放棄時，別忘了你還能放棄治療。',
    '一天不玩手機，人是不會死的，命還在但是魂丟啦！',
    '一路上有你，苦一點也願意，苦很多免談。',
    '一懶眾衫小，薪盡自然涼。',
    '一見鐘情就是好看，深思熟慮就是沒錢。',
    '一個人最長的戀愛史，大概就是自戀了。',
    '一個成年人是不會挑食的，他們會說，我對這個過敏。',
    '一頓操作猛如虎，一看工資二千五。',
    '夜撩了酒，酒撩了你 你撩了我，窮困潦倒了我們。',
    '也許睡眠，才是人類真正的活動形態，難怪我總是睡不醒。',
    '也許命運扼住你的咽喉，只是讓你少吃兩口。',
    '要笑著走下去吧，反正來到這個世界上，誰也沒打算活著回去。',
    '要相信自己，別人能做到的，你也做不到。',
    '要感謝那些把你打倒的人，因為你會發現躺倒真的很舒服',
    '腰纏萬貫，全是脂肪。',
    '眼睛千萬不要對著手機太久，專家說了，那樣手機會沒電。',
    '研究證明常年抽煙喝酒的人，患老年癡呆的概率較低，因為早死的概率較高。',
    '學校教學樓放鏡子，是為了讓你知道，人醜就要多讀書。',
    '學習使人快樂，不學習使人，更快樂。',
    '學海無涯，回頭是岸。',
    '學過很多技能，到頭來才發現，最有用的技能是——想開點！',
    '學而不思則罔，思而不學則殆。不思不學成網貸。',
    '選擇比努力更重要，所以我選擇不努力',
    '秀恩愛的最好在中午秀，因為，早晚都會有報應。',
    '胸懷鴻鵠之志，手無縛雞之力。',
    '兄弟聽我一句勸，遊戲沒了還能重玩，媳婦沒了遊戲就能一直玩了。',
    '幸虧你去年沒洗頭，要不然你今年，炒菜連油都沒有。',
    '醒醒，你這不是喪而是，沒有錢和性生活的正常表現。',
    '信就信，不信就不信，還TM整個微信。',
    '心是偉大的詩人，而嘴是蹩腳的編輯。',
    '心軟不是病，回頭才致命。',
    '心靈雞湯是給吃慣了鮑參翅肚的人做的換口味小菜，屌絲以為喝一碗雞湯就營養全面提升了？',
    '心比天高，命比紙薄。',
    '卸妝對你來說，又叫洗錢。',
    '小學的英語水平支撐到現在，越來越力不從心了。',
    '小時候做過的最蠢的事，可能是盼著長大吧。',
    '小時候最討厭吃飯和睡覺，現在想想真賤。',
    '小時候最怕夢到自己找廁所，最最可怕的是，人沒醒來廁所卻找到了。',
    '小時候我們都很快樂，因為那個時候我們，醜和窮都還不是那麽明顯。',
    '小時候我常想，長大了是上北大還是清華，現在想想原來是我想多了。',
    '小時候的夢想是當一個英雄，沒想到手機里就能輕松實現，而且選擇還挺多的呢。',
    '小時候不愛吃飯，導致現在個矮。現在愛吃飯了導致又胖又矮。',
    '小三是個好東西，她帶走了不愛你的狗東西。 ???',
    '小明長期被爸媽蒙在鼓里，導致窒息而死。',
    '像你這樣的人，哪怕把土豪兩個字貼在臉上，別人也會反過來讀。',
    '想做你的太陽，高興的時候溫暖你，不高興的時候曬死你。',
    '想要打起精神，卻一不小心把他打死了。',
    '想要逼死一個強迫癥，那實在是太簡了。',
    '想買一輛保時捷卡宴，請問買過的朋友，你們的錢都是從哪里來的！',
    '想和男朋友去看電影，有什麽好看的，男朋友介紹嗎？',
    '想好了的是假象，認真的做了也沒前途。',
    '想奮鬥？手機能從你的手上拿下來，就算是拼搏了。',
    '想變美就多睡覺，睡懵了就覺得自己美了。',
    '相信你一定不會被生活打倒，因為你的體重，超過了生活的預料。',
    '相親最大的好處是，如果以後婚姻出問題，你可以把責任推給媒人。',
    '鄉愁是一張小小的車票，我在這頭，黃牛在那頭。',
    '現在矮矬窮不要緊，要相信將來有一天，你會變成矮矬窮老…',
    '現在流的淚，都是當初腦子進的水。',
    '現在苦點沒關系，人只要活著就一定會有好事，發生在別人身上。',
    '現在的時代，不是屬於00後的，是屬於厚臉皮的！',
    '現在的女生太不像話了，領口開這麽低，還看不到事業線',
    '現在的女孩子如果不努力，是會被抓去結婚的，並且還要生二胎。',
    '現在的年輕人，除了睡覺時間不想睡，其它時間都想睡覺。',
    '現實就是，你這個前浪還沒開始浪，就已經被拍死在沙灘上了。',
    '鹹魚翻身是為了曬得透徹，你翻身是因為手被壓麻了。',
    '鹹魚翻了身，也還是鹹魚。',
    '喜歡一個人是藏不住的，就算躲在衣櫃里，還是會被她老公發現。',
    '喜歡一個人就去表白，萬一，成備胎了呢？',
    '喜歡就要表白，這樣才能知道你是幾號備胎。',
    '希望有些事情可以自己解決，不是我自己，是事情自己。',
    '希望無時無刻不在，而你，每時每刻都錯過。',
    '希望是火，失望是煙，人生就是一邊生火一邊冒煙。',
    '西遊記告訴我們，有個豬一樣的隊友，能讓團隊上西天。',
    '物以類聚人以窮分，有錢人終成眷屬。',
    '武則天證明了，成功和性別沒關系，你證明了成功和你沒關系。',
    '吾日三省吾身，吾沒錢 吾沒車 吾沒房。',
    '無論最後我們疏遠成什麽樣，一個紅包，就能回到當初。',
    '無論遇到任何事情，在哪里跌倒，就在那多躺一會吧。',
    '無論你二或不二，二就在那里，不三不四。',
    '無毒的身軀扛下有毒的疫苗，你是教育我從小就要堅強！',
    '我最大的缺點，就是缺點錢。',
    '我知道虛度年華不對，但是這樣，真的好過癮啊。',
    '我知道歲月會磨平我的棱角，但沒想到，是把我按在地上摩擦。',
    '我只想和你敘敘舊，你卻問我要不要代購。',
    '我真的挺羨慕你的皮膚，你說你是怎麽能，把它保養的那麽厚呢？',
    '我這人從來不記仇，一般有仇當場就報了。',
    '我這人不太懂音樂，所以時而不靠譜，時而不著調。',
    '我這人吧，永遠不要挑戰我的底線，否則我又得修改底線。',
    '我這輩子沒求過誰，只求過陰影部分面積。',
    '我有一顆早起的心，可我的被子和床不同意。',
    '我有一個夢想，只是有一個夢想。',
    '我有個朋友停止了抱怨，開始努力奮鬥，幾年過去了還是這個鳥樣。',
    '我因為窮，所以國慶在家，躲過了一節。',
    '我以為我們能一起走到最後，誰知道，你走了兩步就要打車。',
    '我以為明天會更好，後來我天天盼著明天。',
    '我已經到了法定結婚年齡，請問去民政局領證的時候，老婆是自己帶還是等他們發？',
    '我已經不是那個花五十塊錢，也要考慮很久的小孩了，現在五塊錢都要深思熟慮。',
    '我一般說話都會給人留面子，萬一我懟你了，沒錯我就是故意的。',
    '我也想做一個優雅的淑女，是生活把老娘逼成了潑婦。',
    '我也曾青春逼人，可惜現在青春沒了，就剩這麽個逼人了。',
    '我要沒點自我安慰的本事，還真活不到現在。',
    '我想重新認識你，從你叫什麽名字開始。你叫什麽來著？',
    '我想早戀，但是已經晚了…',
    '我想要住進你心里，才發現是個小區，還有許多鄰居。',
    '我躺在床上看天花板，想著我工作的天花板，只是別人的地板。',
    '我雖然不能來一場，說走就走的旅行，但我有一個說胖就胖的體質。',
    '我說哪句話讓你傷心流淚了，請告訴我，我再說一遍。',
    '我是一條酸菜魚，又酸又菜，還多余。',
    '我是深知欲速則不達，心急吃不了熱豆腐的，你怎麽能說我有拖延癥？',
    '我試過銷聲匿跡，最終也無人問及。',
    '我生氣的時候你一定要哄我，買吃的給我。等老子吃飽了打死你。',
    '我生平最討厭一個字，略！尤其是題不會做時。',
    '我上班就是為了賺錢，別和我談理想，我的理想是不上班。',
    '我擅長做空A股，只要我一買，立刻跌。',
    '我親眼看著你走上台，不知道你是將要獻醜，還是出醜。',
    '我能想到最浪漫的事，就是看你一人慢慢變老。',
    '我能想到最浪漫的事，就是和你一起吃吃吃，然後你付錢。',
    '我能想到，對自己最準確的形容詞只有：肥美。',
    '我們是好朋友，你摔倒了我會把你扶起來，不過要等我笑完。',
    '我們非常努力，才能活得像個普通人',
    '我們都史無前例的有默契，突然你不理我我也不理你。',
    '我每天拼了命努力就是為了，向那些看不起我的人證明，他們是對的。',
    '我沒有去過你的城市，但我刷過你那的題。',
    '我連窮和醜都不怕，還怕單身？',
    '我連名牌都不認識幾個，有時候，別人在炫富我都不知道。',
    '我可以劃船沒有槳，我可以揚帆沒有方向，因為我這一生全靠浪。',
    '我覺得一定有很多人暗戀我，因為這麽多年了，也沒有人跟我表白！',
    '我覺得失戀不可怕，眼瞎才可怕。',
    '我交朋友，從不在乎他有沒有錢，反正都沒有我窮。',
    '我撿了個神燈，許願我死前能找到女朋友，結果我獲得了永生！',
    '我好想你，第一句是假的，第二句也是假的。',
    '我鼓足勇氣去面對現實，卻發現勇氣，真的只是氣而已。',
    '我發現我挺能哄女孩睡覺的，只要我一發信息，女孩就說我要睡覺了。',
    '我對生活充滿向往，生活對我雖遠必誅。',
    '我的原則，只有三個字，看心情。',
    '我的意中人是個蓋世英雄，總有一天他會，踩著七色彩雲去娶別人。',
    '我的眼里只有你，因為你的大臉，讓我看不到別人。',
    '我的興趣愛好分動態和靜態，動態就是翻身，靜態就是睡覺。',
    '我的未來就是個夢，更遺憾的是，這會兒還失眠。',
    '我的社交恐懼癥，主要來自於，收入低。???',
    '我的錢雖然不是大風刮來的，但像被大風刮走的。',
    '我的腦袋不是空的。我是要大作為的人，只是混沌初開。',
    '我的目標是三十歲有套房子，現在實現一半，已經三十歲了。',
    '我到底是活了16年，還是活了1天，重覆了16年？',
    '我從你眼里看到了兩樣東西，一樣是真誠，而另一樣是眼屎。',
    '我從來不會腦殘地，在網上曬自己買的名牌，因為我買不起。',
    '我從曾經的一無所有，到現在的身無分文。',
    '我從不以強淩弱，我欺負他之前，真不曉得他比我弱。',
    '我從不去想何時能成功，既然選擇了遠方，那就還遠著呢。',
    '我醜，是為了降低畫質提高性能，為什麽我的人生還那麽卡呢？',
    '我超級超級喜歡小動物，怎麽說呢，就是頓頓都有吧。',
    '我嘗試著做一個有趣的人，後來卻跑偏了，成了一個逗逼。',
    '我曾經得過精神分裂癥，但現在我們已經康覆了。',
    '我不想讀書，主要是因為家里牛啊，豬啊羊啊都沒人喂。',
    '我不是諸葛亮，也沒有草船，但為何你的賤一直往我這放？',
    '我不是那種，落井下石的人，我是直接把井封了。',
    '我不是矮，我只是離天空比較遠。',
    '我不怕變成自己厭惡的人，我怕過得還不如他們。',
    '我不罵人，那是因為我，動手能力比較強。',
    '我不會兩面三刀，可我經常被兩面插三刀。',
    '我本想享受生活，結果發現活下來都很困難。',
    '我把她從女孩變成了女人，她把我從男孩變成了，窮人。',
    '問世間錢為何物，只叫人生死相許。',
    '問渠那得清如許，唯有毒湯活水來！',
    '問君能有幾多愁，恰似一群太監上青樓。',
    '唯一比孤獨更可怕的，是被人知道你孤獨。',
    '為什麽總是天妒英才呢？因為沒人管笨蛋活多久。',
    '為什麽中國人結婚，都非要選個好日子呢？因為結完婚就沒好日子過了！',
    '為什麽在學校，一上課就想睡覺？因為學校是夢開始的地方。',
    '為什麽要吵架呢？就不能心平氣和的坐下來，打對方幾巴掌嗎？',
    '為什麽你能像智障一樣活著，而我卻不可以。',
    '為什麽家長只看分數？廢話！難道他們看得懂題目？',
    '為了防止我這個月又亂花錢，我提前把錢，都花完了。',
    '為了變漂亮，你堅持了哪些好習慣？堅持開美顏。',
    '望穿秋水之寒，無論如何也比不了，忘穿秋褲之冷。',
    '忘記以前的不開心，因為以後會更不開心。',
    '往往那些不起眼的小餐館，才能吃到真正的美味，而那些大酒店的我吃不起。',
    '往事不堪回首，是因為，你根本沒有可以回首的往事。',
    '王子拿著留下的43碼水晶鞋陷入沈思',
    '玩手機時間長要讓眼睛休息，把視線投向窗外，想一想為什麽自己這麽窮。',
    '外貌不重要，愛情看的是感覺，可是人家對醜的沒感覺。',
    '脫了衣服我是禽獸，穿上衣服，我是衣冠禽獸。',
    '脫發怎麽辦？要健康飲食保持良好心態，這樣就能接受這個事實了。',
    '突然發現，起床第一件事是摸手機，睡前最後一件事是放下手機。',
    '突破瓶頸之後，發現還有瓶蓋。',
    '投對了簡歷找到一份好工作，投對了胎，可以不用找工作。',
    '偷一個人的主意是剽竊，偷很多人的主意是研究。',
    '同樣是出賣自己，有的人成了大姐，有的人成了小姐。',
    '同樣都是鹹魚，為什麽別人可以翻身，而你卻粘鍋了？',
    '同甘共苦你不陪，榮華富貴你是誰？',
    '聽說七月鬼門快開了，你總算不是孤家寡人了。',
    '聽說自從你得了神經病，整個人都精神多了。',
    '聽說你過的沒我好，那我就放心了。',
    '聽說你過的不好，我蹲在門口，笑了一整天。',
    '聽說你的城市下雨了，不知道你帶傘沒有，如果帶了這雨就白下了。',
    '聽君一席話，浪費十分鐘。',
    '聽成績的時候要用右耳聽，因為左耳靠近心臟，可能會猝死。',
    '鐵打的身子，磁鐵打的床。',
    '鐵杵能磨成針，但木杵只能磨成牙簽。材料不對再努力也沒用。',
    '條條大路通羅馬，每條都有收費站。',
    '條條大路通羅馬，可是有人就出生在羅馬',
    '條條大路通羅馬，而有些人，就生在羅馬。',
    '天涯何處無芳草，全都長在別人家。',
    '天生我才必有用，前提是，你得是天生的。',
    '天沒降什麽大任於我，照樣苦我心智，勞我筋骨。',
    '天空沒有翅膀的痕跡，除非你飛的時候會掉毛',
    '天將降大任於斯人也，必先苦其心志勞其筋骨，後來天改主意了。',
    '特別能吃苦這五個字，我想了想，我只能做到前四個。',
    '逃避是解決不了問題的，不逃你也解決不了啊。',
    '倘若互不相欠，怎會再次相見。',
    '談錢傷感情，談感情傷錢。',
    '攤煎餅的大媽說，她月入三萬，不差你一個雞蛋。',
    '貪圖小利，難成大事，要貪就貪大的。',
    '他喜歡你素顏，必須是素顏好看。',
    '他們笑我長的醜，我笑他們講的對。',
    '他們說網絡很假，我笑了，好像現實很真一樣。',
    '所有的故事都會有結局，只有生活跟你沒完。',
    '所謂婚姻，就是兩個家庭的，資產重組。',
    '所謂覆習就是，把不會的東西再確認一遍，你確實不會。',
    '歲月是把殺豬刀可他拿醜的人一點辦法都沒有',
    '歲月是把殺豬刀，可是他拿醜的人，一點辦法都沒有。',
    '歲月讓我知道，除了快遞，我誰都不必等。',
    '隨風奔跑自由是方向，無奈忘了腿短沒力量。',
    '雖然我長得醜，但是買了漂亮衣服，我就可以醜的漂亮。',
    '雖然你長的醜，但是你想得美啊。',
    '雖然你長得矮，但你發際線高啊。',
    '雖然你已無法再長高了，但是你可以繼續長胖啊。',
    '雖然你學的慢，但是你，放棄的快呀。',
    '雖然你單身，但是你胖若兩人。',
    '雖然你搬磚的樣子很累，但是，你充錢的樣子真的很帥。',
    '雖然腦子和腸子長得很像，但你也不能老是用來裝屎啊！',
    '俗話說人無遠慮，必定很有錢。',
    '俗話說禍不單行，可見連禍都是有伴兒的，你再看看你。',
    '送你喜歡的女生一支口紅吧，至少她親別人的時候，有你的參與感。',
    '思想給了我們太多的自由，而我們拖累了思想！',
    '說好我們一起到白頭，你卻偷偷焗了油。',
    '說錯話不要緊，你還會繼續說錯的。',
    '順其自然只是無能為力的另一種說法',
    '睡覺睡到手抽筋，數錢數到自然醒。',
    '誰說我不會樂器？我退堂鼓打的可好了。',
    '誰說我不會樂器，我打退堂鼓可好了！',
    '誰說你沒有真愛，煩惱與你同在。',
    '誰說你沒有毅力的，單身這件事，你不就堅持了好幾十年嗎？',
    '誰說你不愛運動？你不僅會踢皮球，而且踢的可好了。',
    '誰說金錢買不到時間，網管再續兩個小時。',
    '雙十一過後，我從一個光棍，變成了一個負債累累的光棍。',
    '熟練地運用，關我屁事和關你屁事，可以節省人生80%的時間。',
    '書山有路勤為徑，怪你沒有富貴命。',
    '瘦的人能把衣服穿出故事，胖的人只能穿成事故。',
    '手機摔了這麽多次都沒事，想想還是我的身高救了它。',
    '手機的壽命是人類的1/20，請放下身邊的雜事，好好陪陪它！',
    '是金子總會發光，但你只是塊肥肉。',
    '是好久不見，還是，視而不見。',
    '試著去了解那些你討厭的人，你會發現，真是越看越討厭。',
    '事情多不可怕，可怕的是你沒能力解決。',
    '世上只有騙子是真心的，因為他是真心地在騙你。',
    '世上無難事只怕有錢人，物以類聚人以窮分。',
    '世上無難事，只要肯放棄！',
    '世上什麽事逼急了，都能做出來，除了數學題。',
    '世上沒有錢解決不了的事，如果有，那就是你的錢不夠。',
    '世上會有很多出人意料的事，比如，你以為我會舉個例子。',
    '世上99%的事情，都能用錢解決，剩下的1%則需要更多的錢。',
    '世人笑我太瘋癲，我笑世人這麽快就看出來了。',
    '世界這麽大，我想去看看，看看有沒有塑料瓶。',
    '世界這麽大 我想去看看。錢包那麽小 你能走多遠？',
    '世界上最寬廣的是海洋，比海洋更寬廣的是天空，比天空更寬廣的是考試範圍。',
    '世界上最動聽的話，不是我愛你，而是你的腫瘤是良性的！',
    '世界上有兩種人最傻B，一種是你這樣的，另一種是像你這樣的。',
    '世界上唯一一件公平的事就是我們都會死。',
    '世界上如果有錢辦不到的事情，加錢一定可以辦到。',
    '世界上腦殘那麽多，你卻成了佼佼者。',
    '世界上沒有無緣無故的愛，也沒有無緣無故的恨，卻TM偏偏有無緣無故的胖！',
    '世界上本沒有路，走的人多了，老師就開始點名了。',
    '世界那麽大，能認識你，我覺得好不幸。',
    '世界離了你不會不轉，只會越轉越快，畢竟輕了很多。',
    '世界很公平，比你忙的人賺的比你多，比你閒的人你賺的比他少。',
    '世間很多事隨著時間流逝，終究會變好的，比如你的胖終會變成好胖。',
    '時間是最好的老師，但遺憾的是，最後它把所有學生都弄死了。',
    '時間就像胸，擠擠就有了，躺下就沒了。',
    '時間就是金錢，我在浪費時間？不～我只是在炫富！',
    '時間會幫你攢夠失望，並告訴你不用謝。',
    '失眠睡不著，可能是因為，你手機還有電。',
    '失戀之後快打起精神，畢竟，還有下一個渣男在等著你。',
    '失敗也是成功的一部分，在哪里跌倒，就在哪里訛人。',
    '失敗是成功之母，可惜成功六親不認。',
    '失敗乃成功之母，可是我TM失敗的次數太多，都不知道誰是親媽。',
    '失敗乃成功之母，可失敗連男朋友都沒有。',
    '失敗乃成功之母，但往往失敗都是，不孕不育。',
    '失敗的盡頭是絕望，努力的終點是過勞。',
    '失敗不可怕，可怕的是，你還相信這句話。',
    '失敗並不可怕，可怕的是你還相信這句話。',
    '生平最討厭溜須拍馬的人，和他們在一起，顯得老子很不會做人。',
    '生命中必然要放棄某些人，不是你不在乎，是他們不在乎。',
    '生活中很多人喜歡小題大作，其實真的沒有必要，要想想大題怎麽辦。',
    '生活磨光你的棱角，是為了讓你，滾的更遠。',
    '生活沒有翻不過去的坎，只有翻不完的坎。',
    '生活就像海綿里的水，只要你不願意擠，總有一天會蒸發完的。',
    '生活會讓你苦上一陣子，等你適應以後，再讓你苦上一輩子。',
    '生活還是有意思的，畢竟每天都因為不同的原因想死。',
    '生活費就像大姨媽，一個月來一次，幾天就沒了。',
    '生活不止眼前的壓力，還有背後的災難。',
    '生活不止眼前的茍且，還有一輩子的茍且。',
    '生活不止眼前的茍且，還有前任的喜帖，所以拉黑很重要。',
    '生活不是這樣就是那樣，總之，不會是你想的那樣。',
    '生活不僅有眼前的茍且，還有遠方的枸杞。',
    '生活不會放棄你，但也不會放過你。',
    '生活，開始對我這種小雞爪子，放泡椒了！',
    '什麽事情可以讓你，放下尊嚴低聲下氣？抄作業。',
    '什麽時候，能把我腦子里的錢，提現就好了。',
    '什麽都在漲價，就是人越來越賤。',
    '身在福中不知福是什麽？就是發福快發成豬了，還覺得自己身材蠻OK。',
    '少小離家老大回，騷話學了一大堆。',
    '少年加油吧！只要你努力工作，你的老板一定會成功的。',
    '上帝向人間灑滿智慧，唯獨你打了把傘。',
    '上帝為什麽給你關上一扇門，還不是因為你見不得人。',
    '上帝為你關上一扇門的時候還會順手幫你把窗戶也關上。',
    '上帝為你關上一道門的同時，還會順帶夾你的腦子。',
    '上帝為你關上了一扇門，然後就去洗洗睡了。',
    '上帝為你關上了一扇門，還會給它加上防盜鎖，大插銷。',
    '上帝不會虧待癡情的人，他都是往死里整。',
    '傻人有傻福，傻B沒有。',
    '三觀沒用，你得靠五官！',
    '三分天注定，七分靠打拼，還有90分看臉。',
    '三百六十行，行行出BUG。',
    '若你的朋友每天生活都這麽幸福，也就不會拍成照片發到朋友圈了。',
    '如果再見不用紅著臉，是否還能借點錢。',
    '如果有一天我消失了，即使我的朋友戀人不會找我，銀行也會瘋狂找我。',
    '如果有天發現你一夜暴富了，給自己一巴掌，快醒來別上班遲到了。',
    '如果有錢也是一種錯，那我情願，一錯再錯。',
    '如果一個人秒回了你，那只能說明，他剛好在玩手機。',
    '如果我有什麽，讓你不喜歡的地方，麻煩你自己克服一下。',
    '如果我的人生是一部電影，那你就是一個彈出來的廣告。',
    '如果時間可以倒流，那一定是，你在做夢。',
    '如果生活欺騙了你，不要著急 — 拿出美顏相機，去欺騙生活。',
    '如果人生是一部電影，那你就是，中間彈出來的廣告。',
    '如果全世界都不要你了，你要記得還有我，我也不要你。',
    '如果全世界都不要你了，記得要來找我，我認識好幾個人販子。',
    '如果你真的想要做好一件事，全世界都會為你擋路。',
    '如果你願意，一層一層一層地剝開我的心，你會發現我缺心眼。',
    '如果你有什麽事，一定要告訴我，反正我也解決不了。',
    '如果你喜歡一個女孩，就好好努力多掙錢，到時候多隨點份子錢。',
    '如果你特別迷戀一個人，那麽你一定配不上他！',
    '如果你容不下我，說明不是你的心胸太狹窄，就是我的人格太偉大。',
    '如果你去搶銀行，不論成功還是失敗，未來十年內你都不用再上班。',
    '如果你面前有一大筆錢，和一個萬人迷，那麽這和你有什麽關系呢？',
    '如果你覺得每天都忙成狗，那一定是你的錯覺。狗一定沒你忙。',
    '如果你覺得，圍著你的都是蒼蠅，那可能你自己是坨屎。',
    '如果你花錢都不開心，那麽是你花錢方式不對。',
    '如果你還在堅持，說明你還不夠絕望。',
    '如果你放棄了今天的自己，你就戰勝了明天的你。',
    '如果你跌倒了，那就，找個舒服的姿勢趴著吧。',
    '如果你的前半生過得很坎坷，也不必太擔心，下半生你就會適應的。',
    '如果你的男朋友對你百依百順，從不拈花惹草。可能是因為他錢不夠。',
    '如果你吃了虧，千萬不要喝水，不然你會變污的。',
    '如果你不珍惜我，那麽過了這個村，我在下一個村等你。',
    '如果你變成了備胎，請忘記你也是千斤頂。',
    '如果婚姻是愛情的墳墓，一年一次的結婚周年慶祝，便是在掃墓 了。',
    '如果過年你看到我臉色不好，別想太多，就是你忘給紅包了。',
    '如果多年以後你未嫁我未娶，那麽咱倆，也真夠完犢子的了。',
    '如果吃魚可以補腦，你這智商，至少要吃一條鯨魚。',
    '如果吃虧是福的話，那我可能早就福如東海了。',
    '如果不能一夜暴富，兩夜也可以，三晚我也不嫌多。',
    '如果不能美得驚人，那就醜得銷魂吧！',
    '任何時候都要記得微笑，這會讓你看起來，像個不能隨便惹的神經病。',
    '認識陌生人其實很麻煩，許多謊話又得重新說起。',
    '忍無可忍，就重新再忍。',
    '人總有一死，不是窮死就是心死。',
    '人終有一死，或輕於鴻毛，或重於鴻毛。',
    '人一輩子都在尋找成功，但更多時候，找到的都是成功他媽！',
    '人要是決定自暴自棄了，就會活得特別開心。',
    '人要是行，幹一行行一行一行行行行行，行行行幹哪行都行。',
    '人心不足蛇吞象，沒有實力別硬上！',
    '人為什麽叫人類，因為人活著就是累。',
    '人生最大的恥辱是什麽，考試作弊了還不及格。',
    '人生有兩大悲劇，一個是得不到想要的東西，另一個是得到不想要的東西。',
    '人生如夢我失眠，人生如戲我穿幫，人生如歌我跑調。',
    '人生沒有過不去的坎，只有一坎接一坎。',
    '人生沒有過不去的坎，過不去，只是因為你腿短。',
    '人生嘛，就是起起落落落落落落。到底了自然就會蹦跶兩下。',
    '人生苦短，我又他媽懶',
    '人生就像一個茶幾，上面擺滿了杯具。',
    '人生就像打電話，不是你先掛就是我先掛。',
    '人生就是六個大字，怎麽著都不行。',
    '人生和騎自行車不同，就算走下坡路，也不會輕松。',
    '人生第一次說謊，大多數都是，從寫作文開始。',
    '人生的痛苦，不是因為沒錢而痛苦，而是因為別人有錢你痛苦。',
    '人生不如意之事十有八九，剩下的十之一二，超級不如意',
    '人生不如意十有八九，從來沒碰見過一二。',
    '人生不如意何止八九，可與人言者何至二三。',
    '人生不如意的事十有八九，剩下的一二更加不如意！',
    '人如果沒有夢想，那跟無憂無慮有什麽分別？',
    '人人都想上天堂，卻沒有人想死。',
    '人們常說，不要讓青春留白，所以我把它抹黑了！',
    '人家談戀愛，靠長相靠浪漫靠燒錢，而你靠對方眼瞎。',
    '人家呢只是胖著玩玩，而你是醜的認真。',
    '人家不是無趣，而是，懶得對你有趣。',
    '人和豬的區別就是，豬一直是豬，而人有時卻不是人。',
    '人還是要有夢想的，即使是鹹魚，也要做最鹹的那一條。',
    '人還是要有夢想的，即使是鹹魚， 也要做最鹹的那一條。',
    '人都需要努力的，努力過後你就會發現，你還真的是很普通。',
    '人的一生，三分天注定七分靠打拼，剩下的九十分靠父母。',
    '人醜就要多健身，這樣就能在別人說你醜時，你可以揍他。',
    '人醜就要多讀書，這樣以後，才能有錢整容。',
    '人醜就要多讀書，書並不能使你變得好看，卻能讓你更容易接受現實。',
    '人醜就要多讀書，反正，其他什麽事也與你無關。',
    '人不能低下高貴的頭，但撿錢時例外。',
    '讓刻苦成為習慣，用汗水澆灌未來，然後脫水而死。',
    '群發的祝福和個位數的紅包，都是沒有靈魂的。',
    '去年定了一個目標存款三萬，今年掐指一算，還差五萬。',
    '去看精神科時醫生說，你沒啥抑郁癥，你是真的慘。',
    '秋天是收獲的季節。別人的收獲是成功與快樂，你的收獲是認識到並不是每個人都會成功與快樂。',
    '窮一點不要緊，要緊的是不只一點。',
    '窮只是暫時的，只要你努力，你會發現你慢慢就習慣了。',
    '窮你就努力啊！不努力折騰，你怎麽負債百萬。',
    '窮不要緊，擡頭挺胸讓大家看看，你不僅窮還醜還矮。',
    '窮不可怕，可怕的是，最窮的人是我。',
    '窮，不是一種狀態，而是一種常態。',
    '請珍惜那些傷害過你的人，畢竟其他人都懶得害你。',
    '請珍惜對你好的人，否則錯過了就不知道何時，才能再遇到另一個瞎了眼的。',
    '請相信我，我所說的每句話，都是廢話！',
    '請問在三伏天，有什麽消暑良方嗎？薪盡自然涼。',
    '請不要叫我宅女，請叫我居里夫人。',
    '情商最低的一句話，你踢我幹啥？',
    '情人節不出意外的話，一個人過，出意外的話在醫院過。',
    '清明節，應該回你的學校掃掃墓，因為那里埋葬了你的青春。',
    '悄悄地我吃了，正如我悄悄地胖。',
    '強扭的瓜甜不甜不重要，只要能解渴就行了。',
    '強扭的瓜不甜，但是解渴啊！',
    '錢雖然難賺，但是容易花啊。',
    '錢買不來快樂，那一定是，你的錢太少了！',
    '錢買不來愛情，但是可以買走愛情。',
    '錢對你真的就那麽重要嗎？講了3個多小時了，一分錢都不降。',
    '錢不是萬能的，但有錢真的可以為所欲為。',
    '錢包里放老婆的照片，是為了提醒自己記住，錢包里的錢是怎麽沒的。',
    '前世五百次的回眸，卻換來今世的一句，流氓。',
    '千萬別把事情拖到明天，後天大後天都是好日子啊。',
    '掐指一算，你倆要散。',
    '騎電動車請戴好頭盔，否則，開奔馳的同學會認出你。',
    '騎白馬的不一定是王子，也可能會是是唐僧！',
    '其實人生，在某個節點後就結束了，大家只是在等彩蛋。',
    '其實你也有超能力，怎麽減都不瘦的能力。',
    '其實你也不是一無是處，至少在夏天，你還能喂蚊子。',
    '其實你討厭的並不是廣場舞，而是廣場舞大媽。',
    '其實你不醜，只是，你美得不明顯。',
    '其實命運，真不是喜歡和你開玩笑，它是很認真的想弄死你。',
    '其實表白未必是件好事，因為那樣顯得手黑。',
    '其實，電腦遊戲從小就訓練你，把Boss當作自己最大的敵人。',
    '破罐子不能破摔，得使勁摔！',
    '平時罵你就算了，非要等我打你，才知道我文武雙全。',
    '貧窮限制了我那麽多，為什麽沒有限制我的體重？',
    '貧賤不能移的意思就是，窮就好好在家呆著，哪兒也別去。',
    '朋友說借二十塊錢回頭給你，借完錢之後我才知道，有些人一轉身就是一輩子。',
    '胖子是不會餓死的，餓死了也是死胖子 。',
    '怕鬼真的太幼稚了，我帶你看看人心。',
    '偶爾還是要出去走一走，才知道躺床上多麽舒服。',
    '女為悅己者容，男為悅己者窮!',
    '女生之間的友誼啊，就像塑料花，雖然假但永不雕零。',
    '女生何必勾心鬥角互相攀比，反正幾十年後，都要一起跳廣場舞的。',
    '女人用絲襪征服了男人，男人用絲襪征服了銀行。',
    '女票突然變瘦了，多半是漏氣了。',
    '努力了這麽久，但凡有點兒天賦，也該有些成功的跡象了。',
    '努力加油，每一個困難，都會克服我。',
    '努力過失敗過，沒關系，重新努力會失敗得更好。',
    '寧願不說話看起來像個傻子，也不要，開口證明自己的確如此。',
    '寧可美的千篇一律 ，也不要醜的各有千秋。',
    '念念不忘，可有回響？',
    '年輕時我以為錢就是一切，現在老了才知道，確實如此。',
    '年輕人嘛，現在沒錢算什麽，以後沒錢的日子還多著呢。',
    '年輕人不要老想著走捷徑，父母強才是硬道理。',
    '年齡不是問題，身高不是距離，沒錢誰喜歡你？',
    '你坐過最擠的公交車是什麽？只是路過，卻被擠上了車。',
    '你最想從母校帶走的是什麽？最想從母校帶走的，是我的學費。',
    '你走了真好。不然總擔心你要留下來吃飯',
    '你走了真好，不然我總當心，你會留下來吃飯。',
    '你知道投資和投機的區別嗎？一個是普通話，一個是廣東話。',
    '你只要不擡杠，錢真的是萬能的。',
    '你只需看著別人精彩，老天對你另有安排。',
    '你這麽擅長安慰他人，一定度過了許多，自己安慰自己的日子吧。',
    '你這兩天早點回家，最近偷豬的多，我怕你出事。',
    '你長得很有創意，活得很有勇氣。',
    '你怎麽長得跟個二維碼似的，不掃一下，都不知道你是什麽東西！',
    '你在我心里，就像天上的星星，多一顆少一顆都無所謂。',
    '你願意做我的太陽嗎？那麽請與我，保持92955886公里。',
    '你有什麽擅長的運動嗎？「逃避現實」。',
    '你永遠不會知道，你的哪個好友，會成為下一個微商。',
    '你以為自己什麽也做不好？你錯了，你還可以做好一個廢物。',
    '你以為有錢人很快樂嗎？他們的快樂，你根本想象不到。',
    '你以為向生活低頭就好了？生活是想讓你跪下。',
    '你以為他給你點讚，是喜歡你？只是手滑罷了。',
    '你以為你是一只蟲子，能化繭成蝶，其實你只是一只蛆。',
    '你以為你是灰姑娘嗎？拜托別做夢了，她可是伯爵的女兒。',
    '你以為男朋友是取款機，結果是十台機器，有九台半是存款機。',
    '你以為浪子回頭金不換，其實浪子可能只是，上岸緩一緩。',
    '你以為今天是最糟的一天麽，明天會讓你改變這個看法的。',
    '你一無是處，但有件事做得特別好，就是做白日夢。',
    '你一定要笑，不然不會知道，自己有多少魚尾紋。',
    '你要站在別人角度上去思考，總有一天你會發現，你丟失了自己。',
    '你要相信明天，一定會更好的，更好的把你虐成狗。',
    '你要是喜歡一個女生，就好好學習找個好工作努力掙好多好多錢，等她結婚的時候你多出點份子錢',
    '你要是和自拍長得一樣，怎麽會沒有男朋友。',
    '你要是過得好，我怎麽能睡得著。',
    '你要努力的去生活，因為你只有努力了，才知道自己真的不行。',
    '你要麽非常努力，要麽非常聰明，才能勉強過上平庸的生活。',
    '你想有錢？想想就可以了。',
    '你想瘦成一道閃電麽，閃電平均寬度是五米。',
    '你現在所擁有的，都不曾是你的，因為未來你都會失去。',
    '你現在的生活，也許不是你想要的，但絕對是你自找的。',
    '你喜歡我哪一點啊？我喜歡你離我遠一點。',
    '你無法用錢買來幸福，因為你根本沒錢。',
    '你無法叫醒一個，不回你消息的人，但是紅包能。',
    '你踢球受過最重的傷，是女友到球場給對手喂水！',
    '你所有的憂傷，都來自於你的余額。',
    '你雖然沒有出過國，但是你每天都在倒時差。',
    '你說自己很醜，我覺得你不僅醜，還凈說實話。',
    '你說冰是睡著的水，我只記得屁是屎的嘆息。',
    '你是最棒的！不，是最胖的！',
    '你是轉角遇到愛，可你想過對方嗎？他是轉角遇到鬼呀。',
    '你是我的小蘋果，哎呀討厭！我是說我TM真想削你。',
    '你是誰不重要，重要的是，你闖進我生活想幹啥？',
    '你是個做事認真的人，認認真真地幫別人，試了所有的錯。',
    '你若不離不棄，我特麽必死無疑。',
    '你若幫了一急需用錢的朋友，他一定會記得你，在他下次急需用錢的時候。',
    '你若安好，那還得了~ ',
    '你認真的樣子，就像天橋上貼膜的。',
    '你人人稱道的美麗，里面都有PS的痕跡。',
    '你全力做到的最好，還不如別人隨便搞搞。',
    '你前世一定是塑料袋，除了會裝還是會裝。',
    '你努力找他說話的樣子，像極了商場里的導購。',
    '你能接受戀愛年齡差多大？只要長得好看，上下五千年都行。',
    '你們之所以喝雞湯，是因為肉呢被別人吃光了。',
    '你們的對象叫你們什麽？我的對象叫我滾.',
    '你妹是個好姑娘，替你媽分擔了很多。',
    '你每天都很困，因為你被生活所困。',
    '你倆看起來真般配，月老的垃圾分類，做的還挺到位。',
    '你連自己都睡不好，還想去睡別人？',
    '你連世界都沒觀過，哪來的世界觀？',
    '你老是這麽摳門，門都被你，摳壞了好幾扇。',
    '你可以像只豬一樣懶，卻無法像只豬一樣，懶得心安理得。',
    '你就一甘蔗男，剛開始可甜了，到後面全成渣。',
    '你就像我的陽光，看著就刺眼。',
    '你就像是藍天上的太陽，讓人無法直視。',
    '你就算失敗了99次，也要再努力一次，湊個整數。',
    '你就是個土豆絲，又土又逗，又屌絲。',
    '你就是個黃燜雞，又黃又悶又垃圾。',
    '你就兩點不行，這也不行，那也不行。',
    '你敬人一寸，他將得寸進尺。',
    '你覺得很孤獨，沒關系，你還有手機。',
    '你家住海邊嗎？這麽浪。',
    '你獲得了很多金錢，但同時也失去了很多東西，比如煩惱。',
    '你和學霸的區別就是，你所有的靈光一閃，都是他的基本題型。',
    '你害怕穿的不好看被嘲笑？別擔心，穿的好看也一樣。',
    '你還是別把我放在心里了，我不喜歡人多的地方。',
    '你還不算慘，慘的人，都沒手機用。',
    '你過的好不好別人不知道，別人只能看到矮胖窮。',
    '你過得好我替你高興，你過得不好，我替全世界高興。',
    '你給小草一點愛，小草還你一片綠！',
    '你覆雜的五官，掩飾不了，你樸素的智商。',
    '你多努力一點，獲得的打擊就多一點。',
    '你的意中人是個蓋世英雄，他每天會騎著七彩祥雲，去網吧吃雞。',
    '你的眼界，不止局限於你的生活環境，還局限於你的視力範圍。',
    '你的戲，可以像你的錢一樣，少一點嗎？',
    '你的晚安，只是想讓我閉嘴。',
    '你的人生跟你的發際線一樣，後退的特別快。',
    '你的美別人看不到，你的醜一目了然。',
    '你的臉，猶如你的人生，一樣坎坷。',
    '你的臉，一分天注定，九分看濾鏡。',
    '你的計劃，就像零食，吃到肚子里之後就是個屁。',
    '你的臭腳被毒蛇咬了，搶救了6個小時，毒蛇終於救了過來。',
    '你的爸爸必須十分努力，才能讓你看起來毫不費力。',
    '你得好好努力，才能配得上，被人利用。',
    '你倒下了，能頂替你的人千千萬',
    '你打起精神，3分鐘就能做完的事情，打起精神就要花上3小時。',
    '你從來就沒成功過，還怕什麽失敗？',
    '你從來不孤獨，因為，孤獨都不想跟你交朋友。',
    '你曾是我的太陽，是我的整個世界，現在想想也就是個球。',
    '你不是走在牛B的道路上，而是仍在，裝逼的道路上溜達。',
    '你不是一無所有，你還有病！',
    '你不是選擇困難癥，你只是窮。',
    '你不能總看那些你沒有的，多看看你擁有的。算了你把眼睛閉上吧。',
    '你不能因為你胖，就忽略了你的醜。',
    '你不奮鬥一下？怎麽知道自己有多無能。',
    '你不懂得安排自己的人生，會有很多人幫你安排，他們需要你做的事。',
    '你並沒那麽缺少安全感，因為沒錢是最安全的。',
    '你並非什麽事情都不做準備，起碼你已經，準備好了要失敗的嘛。',
    '你並不是一無所有，你還有病。',
    '你並不是無能，你只是沒有選擇的權力。',
    '你別看我平時對你，一副漠不關心的樣子，其實背地里說了你很多壞話。',
    '你必須敢愛敢恨，才會發現你的愛恨，別人真的不在乎。',
    '你抱什麽不好，非要抱病在床！',
    '你把所有不一定，都變成了一定不。',
    '你把錢借給了你的朋友，那麽他一定會記得你，在他下一次缺錢時。',
    '你愛不愛你的工作，工作都會在那等你，不離不棄。',
    '能用錢解決的都不是問題，但如何有錢，才是你最大的問題。',
    '能從上到下摸遍你全身的，也就只有，車站安檢員了。',
    '能不生氣就不要生氣，能不罵人就不要罵人，能動手就直接動手。',
    '能不能對我真心一點？當然可以！我是真心不喜歡你。',
    '鬧鐘的作用對我來說，就是讓我，換個姿勢睡覺。',
    '腦子有病得治，像你多好，沒有腦子。',
    '腦子是個很棒的東西，希望你有。',
    '難受的時候摸摸自己的胸，告訴自己是漢子，要堅強。',
    '男人單身叫單身狗，女的單身叫狗不理。',
    '男女之間一定有純友誼，每一個我認識的女生，都說最多只能跟我當朋友。',
    '那些人人羨慕的社會精英，其實過得不如你想象那樣好。但肯定比你強得多的多。',
    '哪有什麽直男，只要你夠好看，都能變成彎的。',
    '哪有什麽優柔寡斷，還不是因為慫。',
    '哪有什麽來日方長，揮手便是人走茶涼。',
    '哪有什麽感同身受的心，全是站著說話不腰疼的嘴。',
    '目前最靠譜的發財方法，就是，你家拆遷了。',
    '命只有一條，但要命的事，可不止一件。',
    '明天就要見對方家長了，好忐忑啊，畢竟是我先打的他們家小孩。',
    '明日覆明日 明日何其多！既然這麽多，不妨再拖拖。',
    '明明可以靠臉吃飯，你卻靠才華，這就是你跟明明的差距。',
    '面試的時候，他們叫你去聊聊，真的只是去聊聊。',
    '面對困難，再堅持一會兒，就會習慣的。',
    '夢想還是要有的，萬一下輩子實現了呢？',
    '夢想還是要有的，萬一見鬼了呢？',
    '夢想還是要有的，不然哪天喝多了，你跟人聊啥？',
    '猛的一看你不怎麽樣，仔細一看，還不如猛的一看。',
    '妹妹你坐船頭，哥哥我在岸上走。看這句的99%都是唱出來的。',
    '美貌會消逝，但蠢是永恒的~',
    '每一個抖腿的人，心里都有一台縫紉機。',
    '每天叫醒我的不是理想，是樓下廣場舞的音樂。',
    '每天對著鏡子說一句你很棒，不久後，那鏡子就會成為很棒的鏡子。',
    '每天都在勤勤懇懇地，思考一個問題，如何才能不勞而獲？',
    '每天都要有新的期待，這樣才能有新的失望。',
    '每個女人都在尋找一個爺們，最後發現，最爺們的原來是自己。',
    '每當我找到成功的鑰匙，就發現有人把鎖芯給換了…',
    '每當我勇敢地走出一步，上帝就會及時慷慨地為我，鋪好下一步下坡路。',
    '每次想省錢的時候，就是你智商到達頂峰之時！',
    '每次臨時抱佛腳的時候，佛總是給我一腳。',
    '每次看窮遊日志的感受都是，那麽窮就別TM出去浪了。',
    '每次看你穿絲襪的時候，我都有一種無法言喻的感覺，那就是蘿卜還包保鮮膜咧。',
    '每次花錢都說錢包在滴血，可殊不知你的錢包，已經失血過多而死了。',
    '沒有什麽永垂不朽，但你可以。',
    '沒有什麽可以將你打敗，因為你從未成功過。',
    '沒有人瞧不起你，因為根本就沒有人瞧你。',
    '沒有人能夠讓你放棄夢想，你自己試試，就會放棄了。',
    '沒有人關心你飛得多高，倒是有一群人，等著看你摔得多慘。',
    '沒有錢的時候，聽到別人說恭祝長命百歲，都覺得是一種詛咒。',
    '沒有你想不到，只有你做不到……',
    '沒有看不到的消息，只有不想回的人。',
    '沒有解決不了的問題，但是有解決不完的問題。',
    '沒有，過不去的坎，只有過不完的坎。',
    '沒人牽手，我就揣兜。',
    '沒人嘲笑你的夢想，他們只是，嘲笑你的實力。',
    '沒錢用的時候跟我說，讓我知道不止我一個人，沒錢用。',
    '沒錢了來找我，讓我告訴你沒錢的日子，怎麽過。',
    '沒錢才上班還是上班才沒錢，我不明白哪個環節出了問題，難道有中間商賺差價？',
    '沒對象怕什麽，我有對象，我下棋也沒贏過啊。',
    '沒吃飽只有一種煩惱，吃飽了有無數的煩惱。',
    '買房的錢還沒攢完，就要開始攢買墳的錢了。',
    '馬雲成功跟長相沒關系，姜尚成功跟年齡沒關系，而成功跟你沒關系。',
    '馬不停的是蹄，你不停的是嘴。',
    '路遙知馬力不足，日久見人心叵測。',
    '路漫漫其修遠兮，吾將上下而求人。',
    '領導說努力工作會更快成熟，所以，我現在看上去比他們都老。',
    '領導開會的時候，我們應該保持肅靜，打擾別人睡覺是很不禮貌的。',
    '兩個人吵架，打他是解決不了問題的，但是解氣啊。',
    '戀愛時會覺得像吸毒一樣，分手了又會像戒毒一樣。',
    '離遠一看長發飄飄，走近一看虎背熊腰，轉身一看臥槽黑山老妖。',
    '離家不需要太大的勇氣，回家才需要。',
    '老一輩的人常告訴我們，年輕的時候多吃點苦，這樣老了才能習慣啊！',
    '老天是公平的，他給了你張醜臉，肯定還會給你個窮家。',
    '老師不用給我換座位，反正我坐哪，都聊得開。',
    '老婆餅里沒有老婆，棉花糖里沒有棉花，所以錢包里也沒有錢。',
    '老板用你的時候你就是人才，不用你的時候就變成裁人！',
    '老板說只要我們努力工作，明年他就可以換瑪莎拉蒂了。',
    '懶又有目標，才是真的慘。',
    '懶是一個很好的托辭，說的好像你勤奮了就能幹成大事一樣。',
    '垃圾還有大爺大媽撿走，你呢？',
    '困難也許會遲到，但絕不缺席。',
    '困難像彈簧，你弱它就強，你強它更強。',
    '快去努力吧，以證明自己，智商低。',
    '可以做牛，可以做馬，但是千萬別做乙方。',
    '可以不勞而獲的，只有年紀和脂肪。',
    '可怕的不是，別人在今天忽悠你，而是忘了你這個人。',
    '靠父母你是公主，靠男人你是王妃，靠自己你是乞丐。',
    '考試最崩潰的是看到一道題，模糊的記得老師講過，但清晰的記得我沒聽。',
    '考試真是so easy，哪里不會考哪里！',
    '看著面善的，不一定是好人，還有可能是詐騙集團。',
    '看著濺我一身水遠去的大奔，勞資心想等我有錢了，一定買一套雨衣。',
    '看時間不是為了起床，而是看還能睡多久。',
    '看見一個算命大師，我剛坐下他就問我，你算什麽東西？',
    '看見別人走在成功的路上，你問問自己難道不想成為，他成功路上的絆腳石嗎？',
    '看背影迷倒千軍萬馬，轉過頭嚇退百萬雄師。',
    '開車我最討厭兩種人，一種是喜歡加塞的人，另一種是不讓我加塞的人。',
    '絕望不在某時某刻，而在每時每刻。',
    '距離產生的不是美，而是第三者。',
    '據說到2020年，要消滅貧困人口，我還不想死。',
    '據分析，造成婚外戀的根本原因，是結婚。',
    '就算是鹹魚，你也不是最鹹的那條。',
    '就算是Believe，中間也藏著一個lie。',
    '就算你充電兩小時，也不會有人和你通話五分鐘。',
    '就算大雨顛覆全城，公司照樣算你遲到。',
    '九年義務教育應該開腹語課，畢竟長大後會有太多話，難以啟齒。',
    '靜若癱瘓，動若癲癇。',
    '精神瀕臨崩潰的癥狀之一，就是相信自己的工作非常重要。',
    '經歷過一番苦難之後，別人是苦盡甘來，而你是苦竟剛來。',
    '經過十年不斷的努力和奮鬥，我終於從懵懂無知的少年，變成了懵懂無知的青年。',
    '經過九年的打拼，我終於湊齊了，當年賣掉的那套房子的首付。',
    '經過多年的打拼，雖然沒有什麽收獲，但你有債呀！',
    '經過大家的耐心勸導，我終於接受了，自己是傻逼這個事實。',
    '進入長輩朋友圈，了解最新謠言。',
    '盡量撮合身邊的同學，這樣可以，少出一筆份子錢。',
    '今晚吃魚吧，我看你挺會挑刺的。',
    '今天天氣很好，在房間里宅久了，準備去客廳散散心。',
    '今天所有的一切，不過是過眼雲煙。從明天開始你會一無是處。',
    '今天是除夕夜，來來來，給你夾塊你最愛吃的天鵝肉。',
    '今年是過去十年最差的一年，好消息是，今年是之後十年最好的一年。',
    '漿糊不在辦公桌上，在你腦子里。',
    '將薪比薪的想了想，算了，不想活了。',
    '見到長輩時，不是我們不想叫他，而是壓根就不知道叫他什麽。',
    '減肥是一件大事，先讓我吃飽了，再來好好計畫計畫。',
    '減肥這件事情吧，減的快反彈的快，減的慢放棄的快。',
    '減肥就是要向媽媽證明，不光胖找不到對象，瘦也找不到！',
    '減肥，你想要堅持，但堅持不想要你。',
    '間歇性洗心革面，持續性混吃等死。',
    '間歇性躊躇滿志，持續性混吃等死。',
    '假如生活欺騙了你，你就打開美顏相機，欺騙所有的人。',
    '假如生活欺騙了你，不要灰心，因為明天也一樣',
    '假如生活欺騙了你，不要悲傷不要心急，生活還將繼續欺騙你。',
    '假如生活出賣了你，希望是論斤賣，畢竟你比較肥。',
    '假期定了個Plan，半個暑假結束了只完成了P，因為lan。',
    '加我回來吧，我給你發我的婚禮請柬。',
    '既已背影傾天下，何必轉身亂芳華。',
    '既沒有讓人一見鐘情的顏，還缺少讓人日久生情的錢。',
    '機會是留給有準備的人，沒機會的人，就別瞎準備了。',
    '機會，永遠留給，有胸有顏的人。',
    '活了這麽多年發現，唯一堅持下去的，就是每天給手機充電。',
    '活了這麽多年，一直搞不明白一件事，拉鉤為什麽要上吊？',
    '混到現在，拿得起放得下的，只有筷子。',
    '會有天使替我愛你，那我就去愛別人了。',
    '毀滅友情的方式有許多，最徹底的一種是，借錢不還。',
    '回首過去，我居然沒有，走過一次直路。',
    '歡迎來到2019，恭喜你進入了新的，紮心的一年。',
    '化再好的妝，也蓋不住你，卸妝後的醜。',
    '胡思亂想能瘦身的話，我現在可能已經，只剩下靈魂了。',
    '很久不開QQ，登錄後才發現，原來只有騰訊新聞在乎你。',
    '很多時候你不逼自己一把，你都不知道，你還有能把事情搞砸的本事！',
    '很多人覺得自己活得太累，實際上，他們可能只是睡得太晚。',
    '很多次我都覺得堅持不住了，然後我就放棄了。',
    '黑夜給你黑色的眼睛，你卻用它來翻白眼。',
    '黑夜從來不會虧待晚睡的人，它會賜予你黑眼圈，和即將猝死的身體。',
    '和對象吵架，先不要追究吵架原因，要弄明白他膽子怎麽肥了。',
    '何以解憂，唯有暴富。',
    '好運一定會降臨，只是會降臨在別人頭上。',
    '好想把房子賣了，去環遊世界，可惜房東不同意。',
    '好人成佛，需要九九八十一難，壞人只需放下屠刀。',
    '好看的鎖骨千篇一律，有趣的肚腩彈來彈去。',
    '好看的皮囊與你無關，有趣的靈魂你又沒有。',
    '好看的皮囊現實劈腿，有趣的靈魂精神出軌?。',
    '好看的皮囊三千一晚，有趣的靈魂要車要房。',
    '好看的皮囊千篇一律，有趣的靈魂兩百多斤。',
    '好看的皮囊你養不起，有趣的靈魂看不上你',
    '好好過日子吧，每天都會有新打擊。',
    '好不容易習慣了自己的長相，理了個發，又換了一種醜法。',
    '海底撈的服務是真心好，上次我吃飯沒帶錢，還是服務員幫我報的警。',
    '還想過五四青年節，六一兒童節？屬於你的只剩下三八節了。',
    '還沒有對象？要不要給你介紹，一款不錯的狗糧。',
    '還沒來得及去沾花惹草，就被人拔光了。',
    '過年哪個親戚問我成績，我就問他年終獎金。',
    '過年不吃胖，怎麽對得起，死去的雞鴨魚豬？',
    '過馬路不要帶耳機，萬一要是被車撞上，耳機不就壞了麽？',
    '國慶去哪看風景最好？答案是，朋友圈。',
    '國慶你堵在哪呢?',
    '貴不是iPhone的缺陷，窮是你的缺陷。',
    '恭喜你又熬過一天，還中獎了，再來一天。',
    '工作愛情生活不順？多照照鏡子，很多事情你就明白了。',
    '跟最好的朋友好到什麽程度？他進傳銷，發展的第一個下線就是我。',
    '跟我比懶，你輸定了，因為我都懶得跟你比。',
    '跟你談錢的老板才是好人，跟你談理想的，都TM不想給你錢！',
    '跟醜這個缺點比，窮根本不值得一提。',
    '根本沒有什麽高冷的人，人家暖的不是你而已！',
    '給你的夢想插上翅膀，雖然不一定飛得很遠，但肯定摔得很重。',
    '給你的夢想插上翅膀，你也飛不到哪里去。',
    '高考失敗不要緊，以後還有更多失敗等著你。',
    '感謝前行路上擊倒我的人，因為，躺著真的好舒服。',
    '感情是可以磨合的，前提是，看臉。',
    '感覺這輩子，最深情綿長的注視，都給了手機。',
    '該失望的事從沒辜負過我，每次都認認真真的讓我失望。',
    '富人的丁克叫丁克，窮人的丁克叫斷子絕孫。',
    '富豪們都在擔心稅太多，而你只會覺得睡不夠！',
    '付出就會有回報，比如一倍的奢望，換兩倍的失望。',
    '風水輪流轉確實不假，但你在軸心上，這就很尷尬了。',
    '放心吧，只要你持續走下坡路，就永遠不會處在人生最低谷。',
    '放心吧 有錢人運氣都不會太差的。',
    '放下手機出去走走，最後你會發現，還是手機有意思。',
    '放棄這個字，說起來簡單，做起來就更簡單了。',
    '放假買個地球儀吧，世界那麽大你不但可以看看，還可以轉轉。',
    '凡是不賺錢的，都說自己在創業。',
    '發絲千萬條 睡眠第一條，熬夜不休息 脫發兩行淚。',
    '二十年前吃小浣熊，集不齊卡的傻孩子們，依然集不齊五福。',
    '俄羅斯方塊教會我們：如果你合群，就會消失。',
    '俄羅斯方塊教會了我們，如果你合群，就會消失。',
    '多照照鏡子，很多事情你就明白原因了。',
    '蹲下來摸摸自己的影子，對不起，跟著我讓你受委屈了。',
    '對於窮人，生活不累的話，那就不叫生活！',
    '對於醜的人來說，細看都是一種殘忍。',
    '對象搶不過別人就算了，搶購也搶不過別人，這個光棍節你可咋辦。',
    '對女人強吻表白一般會有兩種結果，一種是啪，一種是啪啪啪。這就是屌絲和高富帥的差距。',
    '對你豎大拇指的人，不一定是在誇你，也可能是用炮在瞄你。',
    '對你別有用心的人，畢竟也是用心了。 ???',
    '都說談戀愛會影響學習，難道學習，就不影響談戀愛嗎？',
    '都說錢是王八蛋，可長得真好看。',
    '都說男人有錢就變壞，TMD我都當了，三十多年的好人了！',
    '都說累成狗，其實狗沒你那麽累。',
    '都說姐漂亮，其實都是妝出來的',
    '冬天就是好，窮的時候，還有西北風喝。',
    '冬天床以外的地方都是遠方，手夠不到的地方都是他鄉，上個廁所都是出差。',
    '等你以後老了走不動了，我每天用輪椅推你去廣場上，讓你看著我和別的老頭跳舞。',
    '等到歷史考試的時候，歷史將會被我改寫！',
    '到不了的都叫做遠方，回不去的名字叫家鄉。',
    '當幸福來敲門的時候，我怕我不在家，所以一直都很宅。',
    '當鹹魚擁有了夢想，它就會成為，一只擁有夢想的鹹魚。',
    '當失去工作動力的時候，就看看銀行卡余額吧。之後你就會發現：工作根本沒卵用。',
    '當生活壓得你喘不過氣，一定要挺直腰桿，這樣被壓死時才不難看。',
    '當年我背井離鄉，鄉里人從此再也沒有，喝上一口井水。',
    '當你知道自己要去哪里的時候，全世界都在為你添堵。',
    '當你瘦下來之後，你會發現原來你的醜，跟減肥並沒有關系。',
    '當你覺得自己不行的時候，就走馬路上走走，這樣你就是一個行人了。',
    '當你覺得又醜又窮的時候，不要悲傷，至少你的判斷還是正確的。',
    '當你懷疑人生的時候，其實這就是你的人生。',
    '當你變得足夠優秀的時候，你才發現原來她只是，單純的不喜歡你。',
    '當初有多感天動地，以後就有多萬劫不覆。',
    '當別人和你說忙，是TA要留時間，給更重要的人。',
    '單身至今的原因是，熟人不好下手，生人不好開口。',
    '單身脫發又沒錢，跑步進入中老年。',
    '單身沒有關系，以後單身的日子，還長著呢。',
    '帶翅膀的不一定是天使，有可能是雷震子。',
    '大學生啊你要知道，學習不一定能收獲，但剁手一定能收貨。',
    '大老遠看到我一直盯著你時，不要覺得我對你有意思，我真得看不清你是誰。',
    '大家喜歡和你一起，是為了，顯示他們的好看。',
    '大家都以為我沒有朋友，事實上，我還真沒有朋友。',
    '大家都誇我賢惠，閒的什麽都不會。',
    '大多數時候，消耗能量的都不是工作，而是工作中遇到的人。',
    '打麻將三缺一，鬥地主二缺一，我談個戀愛咋還一缺一？',
    '打工錢少就出來創業吧，保證能讓你，賠個精光。',
    '存款是負的房子是租的，有輛自行車，還是共享的。',
    '從小就喜歡自立，比如靠自己本事單的身。',
    '從小就被教育不要亂花錢，長大後我才發現，根本沒錢怎麽亂花？',
    '從小到大，唯一不變的，就是一顆不想念書的心。',
    '從今天開始，接受來自三大姑八大姨，靈魂的拷問。',
    '蠢也沒那麽可怕，畢竟水母沒有腦子，也活了6億年。',
    '蠢萌的前提是萌，不是蠢。',
    '春節你要小心了，畢竟過年，都是要殺豬的。',
    '春節假期要結束了，該收收心，準備過五一了。',
    '春節假期，從跳過早午餐開始。',
    '創業嘛就要有個平常心，因為它總是起起落落落落落落的。',
    '傳統文化丟失嚴重啊，古代女子個個能呤詩作對，現代女子不行了 只會作對。',
    '穿白色衣服上班，並不代表你可以不背黑鍋。',
    '除了是處，一無是處。',
    '出身好的努力是為了成功，而你是為了活下去。',
    '出賣自己的靈魂和原則並不丟人，丟人的是沒能賣一個好價錢。',
    '出賣靈魂並不丟人，丟人的是，沒能賣一個好價錢。',
    '出來混，遲早是要胖的。',
    '醜小鴨能變天鵝，不是因為它多努力，是因為它爸媽本來就是天鵝。',
    '吃完苦中苦，我終於成為了人下人。',
    '吃土的時候，覺得乞丐都比我幸福。',
    '吃貨一般都比較善良，因為每天都只想著吃，沒有時間去算計別人。',
    '吃貨的思路是，好吃你就多吃點，不好吃多少也要吃點。',
    '吃的苦中苦，才知白辛苦。',
    '吃得苦中苦，才知道沒有最苦，只有更苦。',
    '承諾就像放屁，當時驚天動地，過後蒼白無力。',
    '成長就是將你哭聲調成靜音的過程。',
    '成年人的世界，除了長胖，其他什麽都不容易。',
    '成名就像放的一個屁，響了一聲還不夠，還要臭段時間。',
    '成功是可以覆制的，而對於你，此處禁止粘貼。',
    '成功就像鬼一樣，只有別人遇到過。',
    '趁著年輕多出來走走，不然你不會知道，呆在家里有多爽。',
    '趁好看的時候多照照鏡子，畢竟，這種錯覺不是每天都有的。',
    '車到山前必有霧，船到橋頭自然沈。',
    '曾夢想仗劍走天涯，因太胖取消原計劃。',
    '曾經我也是靠臉吃飯的，後來差點餓死了…',
    '曾經我想做個特別的人，現在我成功了，我現在特別難過又無助。',
    '曾經是夢想家，現在沒了夢，只剩下想家。',
    '曾經給我潑涼水的人，沒關系的，我燒開了還會還給你的。',
    '曾經的海枯石爛，抵不過好聚好散。',
    '不知道你越過多少峰才成功，反正你逃不過早晚兩個高峰。',
    '不知道，是別人的愛情來的太容易，還是自己的八字太硬。',
    '不用在意別人怎麽看你，你在意了，別人也看不上你。',
    '不要總是那麽自戀，美女多看了你一眼，只是因為你醜得比較獨特。',
    '不要總對人掏心掏肺，有的人不吃內臟。',
    '不要在意現在的低谷，未來還有很長的下坡路要走。',
    '不要再抑郁下去了孩子，你要像一個，神經病一樣活潑開朗。',
    '不要再說自己是一條單身狗，其實，你可能比不上狗…',
    '不要再說被騙色了，到你這個年紀來的都是客。',
    '不要以為自己堅持不來，你一定會堅持熬夜玩手機。',
    '不要以為世界拋棄了你，世界根本沒空搭理你',
    '不要以為老天在折磨你，而事實上，老天根本就不在意你。',
    '不要太在乎別人的目光，因為沒人會注意你。',
    '不要說別人腦子有病，腦子有病的前提是，必須有個腦子。',
    '不要認為你被世界丟棄，只是世界沒空搭理你。',
    '不要輕易向命運低頭，因為，一低頭就會看到贅肉。',
    '不要輕易看不起誰，就算是殺馬特，發量都比你多。',
    '不要期待明天，因為明天也不會好過。',
    '不要年紀輕輕，就覺得你已經到了低谷，你還有很大的下降空間。',
    '不要埋怨現在的經歷淒慘，跟未來比，還差的遠呢。',
    '不要老覺得自己孤單，看看肚子上那圈肥肉，不是從來沒有離開過嘛？',
    '不要放棄你的夢，繼續睡！',
    '不要等明天交不上差，再找借口，今天就要找好。',
    '不要擔心，一切都是最爛的安排。',
    '不要把自己放的太高了，不然你會不下來的。',
    '不要把銀行卡密碼，設成女朋友的生日，不然總要換多麻煩。',
    '不笑運氣差，一笑臉就大！',
    '不想養狗不想養貓，只想養你，畢竟養豬能致富。',
    '不想談戀愛是假的，沒人要是真的。',
    '不想結婚生子，是我作為窮人的自覺。',
    '不為無益之事，何以遣有涯之生？',
    '不說沒人陪你勇闖天涯，你能找到人陪你喝雪花嗎？',
    '不是因為看到了希望才堅持，而是因為堅持了，才知道沒希望。',
    '不是路不平，而是你不行。',
    '不是大家拿你開玩笑，而是，你就是玩笑本身！',
    '不是吃燕窩的人皮膚好，是吃得起燕窩的人皮膚好。',
    '不是別人瞧不起你，只是別人瞧不見你。',
    '不能老盯著手機屏幕，要不時地擡起頭，看看老板的位置。',
    '不明白你們遇到好事，為什麽要掐腿揉眼睛，真醒了怎麽辦？',
    '不就是錢嘛，說得誰不缺似的。',
    '不經歷風雨，怎麽迎接暴風雨。',
    '不回你消息，不是因為我高冷，而是因為我手冷。',
    '不管是白帽子，還是黑帽子，會變綠的都不是好帽子。',
    '不當家不知柴米貴，不拍照不知自己肥。',
    '不嘗試問一次，你怎麽知道，你不是爸媽避孕失敗的結果？',
    '不逼自己一把，你都不知道，什麽叫絕望。',
    '冰凍三尺非一日之寒，小腹三層非一日之饞。',
    '冰凍三尺非一日之寒，掏空錢包卻一點不難。',
    '別總自稱單身狗了，按年齡你是單身鱉，按智商你是單身傻麅子。',
    '別總是罵別人豬狗，你過的還不如它們。',
    '別再說自己是單身狗了，你這個年紀狗都死了。',
    '別以為世界沒了你，沒什麽區別，沒了你地球轉得更快。',
    '別以為你一無所有，至少你還有醜！',
    '別一天到晚想著減肥，你的嘴同意你這樣想了嗎？',
    '別問我有啥，先說你要啥，再說你憑啥。',
    '別問我失敗了怎麽辦，說得好像你成功過一樣。',
    '別太自信，你可能信錯了人。',
    '別太晚睡，熬夜很傷手機的。',
    '別說自己是單身狗，狗還可以三妻四妾。',
    '別說什麽一見鐘情，不過就是見色起意。',
    '別說你一無所長，熬夜玩手機你可是一把好手。',
    '別說你一無所有，你還有一身債。',
    '別人一看你就說你是學生，不是因為你看著年輕，而是因為穿的土！',
    '別人下班泡妞，你下班泡面。',
    '別人問你有談戀愛嗎？只要說現在沒有，就能掩蓋過去也沒有的事實。',
    '別人是金子總會發光的，而你，總會花光的。',
    '別人努力會成功，你努力會有飯吃。',
    '別人沒回覆，繼續等，你會等到她的朋友圈。',
    '別人露腿那叫美，你露腿就想讓人懟。',
    '別人關心你飛得高不高，飛得累不累，而我只關心你翅膀好吃嗎？',
    '別人覆習看書，都是看著看著就看懂了，我是看著看著就看開了。',
    '別人都有背景，而我只有背影。',
    '別人都用名牌包包，而你，只能用用表情包。',
    '別人都說我爛泥扶不上墻，可是我為什麽要上墻，躺地上不舒服嗎？',
    '別人都是為怎麽掙錢而發愁，我卻是為怎麽花錢而發愁，二十塊怎麽能花到下月十號？',
    '別人都散發著戀愛的酸臭味，只有我，散發著單身狗獨有的清香。',
    '別人的身體里都是才華，你的身體里都是珍珠奶茶。',
    '別人的人生有的是故事，而我，有的是事故。',
    '別人的錢財，乃我的身外之物。',
    '別人的起點，是你遙不可及的終點。',
    '別人的女朋友都會生氣了，而你的女朋友還在充氣。',
    '別人存你的號是為了跟你聯系，我就不一樣，我存你的號就是為了不接',
    '別人比你有錢還比你努力，但你更厲害，靠自己的想象就擁有一切。',
    '別人扮豬吃老虎，你只能扮豬。',
    '別去打擾那些，每次很久都不回你消息的人，刪除好友就行。',
    '別怕眼睛近視，因為在你的面前，除了失敗什麽也沒有。',
    '別埋怨手機沒怎麽用就沒電，你還不是一樣，沒幹啥就累了。',
    '別看我掙的少，但是我省的多，昨天法拉利又省下兩百多萬。',
    '別看我平時對你漠不關心，其實背後有說你好多壞話的。',
    '別看那些有錢人表面上風光，其實他們私底下更風光。',
    '別看別人表面上一帆風順，實際上他們背地里，也是一帆風順。',
    '別看別人表面上事事如意，其實他們背地里，也順風順水。',
    '別覺得身邊的人都在針對你，仔細想想其實，整個世界的人都在針對你。',
    '別減肥了，你醜不僅是因為胖。',
    '別灰心，漂亮姑娘和天上星星一樣多，只是你看得見摸不著罷了。',
    '別慌去接受失敗，要慢慢去感受。',
    '別和我說對不起，因為我既不能原諒你，也無法捅死你。',
    '別動不動說把一切交給時間，時間才懶得收拾你的爛攤子。',
    '別低頭綠帽會掉，別流淚老王會笑。',
    '別低頭，雙下巴會露。',
    '比一個人吃火鍋更寂寞的是，一個人，沒錢吃火鍋。',
    '比你優秀的人還在努力，你努力有什麽用呢？',
    '比爾蓋茨休學創業，成為世界首富，可是人家休得是哈佛大學。',
    '本以為牽了小姐姐的手，可以得到她，沒想到小姐姐是千手觀音。',
    '飽漢不知餓漢饑，餓漢不知飽漢虛。',
    '半夜給你留燈的，只有自動售貨機。',
    '白雪公主詮釋了，七個小屌絲對她再好，也不及高富帥的一個吻。',
    '白天嘈雜得不願意醒，夜晚安靜得舍不得睡。',
    '把秋衣塞進秋褲，把秋褲塞進棉襪里，是對冬天最起碼的尊重。',
    '把女孩子弄哭是很沒種的事情，把男孩子弄哭是一件叼爆的事啊。',
    '熬夜對身體不好，建議通宵。',
    '暗戀就是你在心里，為他蓋了一座城堡，他卻連門都不想進。',
    '暗戀的人沒有，想暗殺的倒有一堆。',
    '安慰別人的時候一套一套的，安慰自己的時候，只想找根繩子一套。',
    '愛真的需要勇氣，來接受，一次次的沒人愛。',
    '愛一個人一定要告訴她，那樣你才會知道，她有多討厭你。',
    '愛笑的女孩運氣不會太差，但是運氣差的女孩，還能笑得出來嗎？',
    '愛笑的姑娘，總是比別人，長更多的魚尾紋。',
    '愛是一道光，綠到你發慌。',
    '愛情是把雙刃劍，一邊把你割得很疼，另一邊也把你割得很疼。',
    '愛你不是兩三天，而是，一天都沒有愛過',
    '愛迪生千百次尋覓燈絲，就是為讓你，當上耐用的電燈泡。',
    '矮是什麽感覺？明明想瞪人的，硬生生成了賣萌。',
    'Follow your heart，翻譯成中文就一個字，慫。',
    '38歲以前我窮，但是以後，我會習慣的'
  ]
}
