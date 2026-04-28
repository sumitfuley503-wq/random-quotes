// 1. Array of 100 Hindi Sarcastic Quotes
const quotes = [
    "मुझे सलाह मत दो, मैं खुद ही गलती करने में माहिर हूँ।",
    "कुछ लोग इतने समझदार होते हैं कि खुद को ही समझ नहीं पाते।",
    "मैं आलसी नहीं हूँ, बस ऊर्जा बचा रहा हूँ।",
    "तुम्हारी सोच देखकर लगता है WiFi भी कनेक्ट नहीं होगा।",
    "मुझे इग्नोर करो, मैं खुद को बहुत अच्छे से कर लेता हूँ।",
    "लोग कहते हैं बदल जाओ, पर उन्हें खुद बदलना नहीं आता।",
    "मैं गलत नहीं हूँ, बस तुम्हारी समझ छोटी है।",
    "कुछ लोग गूगल से भी ज्यादा ज्ञान देते हैं, बिना पूछे।",
    "मेरी जिंदगी Netflix नहीं है, हर कोई शो देखने आ जाता है।",
    "मैं शांत हूँ, क्योंकि बहस करने का लेवल नहीं है सामने वाले का।",
    "लोग कहते हैं attitude कम करो, मैंने कहा level बढ़ाओ।",
    "मैं perfect नहीं हूँ, पर तुम्हारे जैसा भी नहीं हूँ।",
    "कुछ लोग सिर्फ दूसरों की लाइफ में expert होते हैं।",
    "मुझे judge करने से पहले खुद को check कर लो।",
    "मैं rude नहीं हूँ, बस सच बोलता हूँ।",
    "कुछ लोग इतने खाली होते हैं कि दूसरों की जिंदगी में घुस जाते हैं।",
    "मैं special नहीं हूँ, बस limited edition हूँ।",
    "लोग बदलते नहीं, असली रंग दिखाते हैं।",
    "मुझे समझना है तो दिमाग upgrade करो।",
    "मैं drama नहीं करता, reality दिखाता हूँ।",
    "कुछ लोग advice ऐसे देते हैं जैसे खुद successful हों।",
    "मैं चुप हूँ क्योंकि समझदार हूँ, बेवकूफ नहीं।",
    "हर कोई दोस्त नहीं होता, कुछ लोग experience होते हैं।",
    "मैं late नहीं हूँ, बस perfect timing पर आता हूँ।",
    "कुछ लोग life में pause button होते हैं।",
    "मुझे ignore करो, मैं importance खुद बना लेता हूँ।",
    "मैं busy नहीं हूँ, बस priority अलग है।",
    "कुछ लोग सिर्फ बातों में ही hero होते हैं।",
    "मैं attitude नहीं दिखाता, बस tolerate नहीं करता।",
    "कुछ लोग सिर्फ timepass होते हैं, permanent नहीं।",
    "मैं गलत नहीं हूँ, बस तुम्हें सच पसंद नहीं।",
    "कुछ लोग life में background music जैसे होते हैं।",
    "मुझे impress करने के लिए level चाहिए।",
    "मैं silent हूँ, पर dangerous हूँ।",
    "कुछ लोग सिर्फ memes के लिए ही अच्छे हैं।",
    "मैं change नहीं होता, upgrade होता हूँ।",
    "कुछ लोग सिर्फ problems create करते हैं।",
    "मुझे समझने के लिए IQ चाहिए।",
    "मैं fake नहीं हूँ, इसलिए कुछ लोगों को पसंद नहीं।",
    "कुछ लोग सिर्फ दिखावा करते हैं।",
    "मैं simple हूँ, पर cheap नहीं।",
    "कुछ लोग सिर्फ दूसरों की खुशी से जलते हैं।",
    "मैं unique हूँ, copy नहीं।",
    "कुछ लोग सिर्फ बोलते हैं, करते कुछ नहीं।",
    "मैं respect देता हूँ, लेकिन expect नहीं करता।",
    "कुछ लोग सिर्फ negativity फैलाते हैं।",
    "मैं alone हूँ, पर weak नहीं।",
    "कुछ लोग सिर्फ use करने के लिए होते हैं।",
    "मैं खुद की value जानता हूँ।",
    "कुछ लोग सिर्फ बातों में ही smart होते हैं।",
    "मैं ignore करता हूँ, क्योंकि deserve नहीं करते।",
    "कुछ लोग सिर्फ time waste करते हैं।",
    "मैं perfect नहीं हूँ, real हूँ।",
    "कुछ लोग सिर्फ दूसरों को नीचे गिराते हैं।",
    "मैं खुद की company enjoy करता हूँ।",
    "कुछ लोग सिर्फ show-off करते हैं।",
    "मैं silent killer हूँ।",
    "कुछ लोग सिर्फ excuse बनाते हैं।",
    "मैं अलग हूँ, इसलिए याद रहता हूँ।",
    "कुछ लोग सिर्फ complain करते हैं।",
    "मैं खुद को prove नहीं करता, results बोलते हैं।",
    "कुछ लोग सिर्फ दूसरों की success से जलते हैं।",
    "मैं focused हूँ, confused नहीं।",
    "कुछ लोग सिर्फ criticize करते हैं।",
    "मैं real हूँ, इसलिए rare हूँ।",
    "कुछ लोग सिर्फ attention के लिए जीते हैं।",
    "मैं strong हूँ, इसलिए silent हूँ।",
    "कुछ लोग सिर्फ fake smile देते हैं।",
    "मैं खुद को change नहीं करता, improve करता हूँ।",
    "कुछ लोग सिर्फ दूसरों पर depend होते हैं।",
    "मैं confident हूँ, overconfident नहीं।",
    "कुछ लोग सिर्फ दूसरों की copy होते हैं।",
    "मैं leader हूँ, follower नहीं।",
    "कुछ लोग सिर्फ बातों में बड़े होते हैं।",
    "मैं different हूँ, इसलिए powerful हूँ।",
    "कुछ लोग सिर्फ दूसरों को judge करते हैं।",
    "मैं खुद की respect करता हूँ।",
    "कुछ लोग सिर्फ दिखावे के लिए जीते हैं।",
    "मैं real life जीता हूँ, fake नहीं।",
    "कुछ लोग सिर्फ drama करते हैं।",
    "मैं smart हूँ, इसलिए silent हूँ।",
    "कुछ लोग सिर्फ दूसरों को blame करते हैं।",
    "मैं खुद पर depend हूँ।",
    "कुछ लोग सिर्फ negative सोचते हैं।",
    "मैं positive हूँ, इसलिए successful हूँ।",
    "कुछ लोग सिर्फ excuses ढूंढते हैं।",
    "मैं hard work करता हूँ।",
    "कुछ लोग सिर्फ luck पर जीते हैं।",
    "मैं winner हूँ।",
    "कुछ लोग सिर्फ loser mindset रखते हैं।",
    "मैं खुद की story लिखता हूँ।",
    "कुछ लोग सिर्फ दूसरों की कहानी में side role होते हैं।",
    "मैं focused हूँ।",
    "कुछ लोग सिर्फ distract करते हैं।",
    "मैं consistent हूँ।",
    "कुछ लोग सिर्फ start करते हैं, finish नहीं।",
    "मैं disciplined हूँ।",
    "कुछ लोग सिर्फ plan बनाते हैं, action नहीं लेते।",
    "मैं unstoppable हूँ।",
    "कुछ लोग सिर्फ देखते रहते हैं।"
];

// 2. DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const button = document.getElementById('new-quote');

// 3. Logic
function generateQuote() {
    // Pick a random index
    const index = Math.floor(Math.random() * quotes.length);
    
    // Set the quote
    quoteText.innerText = quotes[index];
    
    // Set a default savage author
    authorText.innerText = "- Savage Legend";
}

// 4. Initial call and Event Listener
button.addEventListener('click', generateQuote);