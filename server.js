const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const countries = require('./models/countries');
const User = require('./models/User');
const Total = require('./models/Total');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
var jsonParser = bodyParser.json()

// Serer static folder 
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));
app.use(cors());

mongoose.connect('mongodb+srv://Anwar:Anwar123@hassanat.fvbzq.mongodb.net/hassanat?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
});



// All countries
// length 252
/* var countriesJS = [
    {"name":"أفغانستان","code":"AF"},
    {"name":"جزر آلاند","code":"AX"},
    {"name":"ألبانيا","code":"AL"},
    {"name":"الجزائر","code":"DZ"},
    {"name":"ساموا الأمريكية","code":"AS"},
    {"name":"أندورا","code":"AD"},
    {"name":"أنغولا","code":"AO"},
    {"name":"أنغيلا","code":"AI"},
    {"name":"أنتاركتيكا","code":"AQ"},
    {"name":"أنتيغوا وبربودا","code":"AG"},
    {"name":"الأرجنتين","code":"AR"},
    {"name":"أرمينيا","code":"AM"},
    {"name":"أروبا","code":"AW"},
    {"name":"أستراليا","code":"AU"},
    {"name":"النمسا","code":"AT"},
    {"name":"أذربيجان","code":"AZ"},
    {"name":"جزر البهاما","code":"BS"},
    {"name":"البحرين","code":"BH"},
    {"name":"بنغلاديش","code":"BD"},
    {"name":"بربادوس","code":"BB"},
    {"name":"بيلاروسيا","code":"BY"},
    {"name":"بلجيكا","code":"BE"},
    {"name":"بليز","code":"BZ"},
    {"name":"بنين","code":"BJ"},
    {"name":"برمودا","code":"BM"},
    {"name":"بوتان","code":"BT"},
    {"name":"بوليفيا","code":"BO"},
    {"name":"بونير وسانت يوستاتيوس وسابا","code":"BQ"},
    {"name":"البوسنة والهرسك","code":"BA"},
    {"name":"بوتسوانا","code":"BW"},
    {"name":"جزيرة بوفيت","code":"BV"},
    {"name":"البرازيل","code":"BR"},
    {"name":"إقليم المحيط البريطاني الهندي","code":"IO"},
    {"name":"بروناي دار السلام","code":"BN"},
    {"name":"بلغاريا","code":"BG"},
    {"name":"بوركينا فاسو","code":"BF"},
    {"name":"بوروندي","code":"BI"},
    {"name":"كمبوديا","code":"KH"},
    {"name":"الكاميرون","code":"CM"},
    {"name":"كندا","code":"CA"},
    {"name":"الرأس الأخضر","code":"CV"},
    {"name":"جزر كايمان","code":"KY"},
    {"name":"جمهورية افريقيا الوسطى","code":"CF"},
    {"name":"تشاد","code":"TD"},
    {"name":"تشيلي","code":"CL"},
    {"name":"الصين","code":"CN"},
    {"name":"جزيرة الكريسماس","code":"CX"},
    {"name":"جزر كوكوس (كيلينغ)","code":"CC"},
    {"name":"كولومبيا","code":"CO"},
    {"name":"جزر القمر","code":"KM"},
    {"name":"الكونغو","code":"CG"},
    {"name":"الكونغو ، جمهورية الكونغو الديمقراطية","code":"CD"},
    {"name":"جزر كوك","code":"CK"},
    {"name":"كوستا ريكا","code":"CR"},
    {"name":"ساحل العاج","code":"CI"},
    {"name":"كرواتيا","code":"HR"},
    {"name":"كوبا","code":"CU"},
    {"name":"كوراكاو","code":"CW"},
    {"name":"قبرص","code":"CY"},
    {"name":"الجمهورية التشيكية","code":"CZ"},
    {"name":"الدنمارك","code":"DK"},
    {"name":"جيبوتي","code":"DJ"},
    {"name":"دومينيكا","code":"DM"},
    {"name":"جمهورية الدومنيكان","code":"DO"},
    {"name":"الاكوادور","code":"EC"},
    {"name":"مصر","code":"EG"},
    {"name":"السلفادور","code":"SV"},
    {"name":"غينيا الإستوائية","code":"GQ"},
    {"name":"إريتريا","code":"ER"},
    {"name":"إستونيا","code":"EE"},
    {"name":"أثيوبيا","code":"ET"},
    {"name":"جزر فوكلاند (مالفيناس)","code":"FK"},
    {"name":"جزر فاروس","code":"FO"},
    {"name":"فيجي","code":"FJ"},
    {"name":"فنلندا","code":"FI"},
    {"name":"فرنسا","code":"FR"},
    {"name":"غيانا الفرنسية","code":"GF"},
    {"name":"بولينيزيا الفرنسية","code":"PF"},
    {"name":"المناطق الجنوبية لفرنسا","code":"TF"},
    {"name":"الجابون","code":"GA"},
    {"name":"غامبيا","code":"GM"},
    {"name":"جورجيا","code":"GE"},
    {"name":"ألمانيا","code":"DE"},
    {"name":"غانا","code":"GH"},
    {"name":"جبل طارق","code":"GI"},
    {"name":"اليونان","code":"GR"},
    {"name":"الأرض الخضراء","code":"GL"},
    {"name":"غرينادا","code":"GD"},
    {"name":"جوادلوب","code":"GP"},
    {"name":"غوام","code":"GU"},
    {"name":"غواتيمالا","code":"GT"},
    {"name":"غيرنسي","code":"GG"},
    {"name":"غينيا","code":"GN"},
    {"name":"غينيا بيساو","code":"GW"},
    {"name":"غيانا","code":"GY"},
    {"name":"هايتي","code":"HT"},
    {"name":"قلب الجزيرة وجزر ماكدونالز","code":"HM"},
    {"name":"الكرسي الرسولي (دولة الفاتيكان)","code":"VA"},
    {"name":"هندوراس","code":"HN"},
    {"name":"هونج كونج","code":"HK"},
    {"name":"هنغاريا","code":"HU"},
    {"name":"أيسلندا","code":"IS"},
    {"name":"الهند","code":"IN"},
    {"name":"إندونيسيا","code":"ID"},
    {"name":"جمهورية إيران الإسلامية","code":"IR"},
    {"name":"العراق","code":"IQ"},
    {"name":"أيرلندا","code":"IE"},
    {"name":"جزيرة آيل أوف مان","code":"IM"},
    {"name":"إسرائيل","code":"IL"},
    {"name":"إيطاليا","code":"IT"},
    {"name":"جامايكا","code":"JM"},
    {"name":"اليابان","code":"JP"},
    {"name":"جيرسي","code":"JE"},
    {"name":"الأردن","code":"JO"},
    {"name":"كازاخستان","code":"KZ"},
    {"name":"كينيا","code":"KE"},
    {"name":"كيريباتي","code":"KI"},
    {"name":"كوريا، الجمهورية الشعبية الديمقراطية","code":"KP"},
    {"name":"جمهورية كوريا","code":"KR"},
    {"name":"كوسوفو","code":"XK"},
    {"name":"الكويت","code":"KW"},
    {"name":"قيرغيزستان","code":"KG"},
    {"name":"جمهورية لاو الديمقراطية الشعبية","code":"LA"},
    {"name":"لاتفيا","code":"LV"},
    {"name":"لبنان","code":"LB"},
    {"name":"ليسوتو","code":"LS"},
    {"name":"ليبيريا","code":"LR"},
    {"name":"الجماهيرية العربية الليبية","code":"LY"},
    {"name":"ليختنشتاين","code":"LI"},
    {"name":"ليتوانيا","code":"LT"},
    {"name":"لوكسمبورغ","code":"LU"},
    {"name":"ماكاو","code":"MO"},
    {"name":"مقدونيا ، جمهورية يوغوسلافيا السابقة","code":"MK"},
    {"name":"مدغشقر","code":"MG"},
    {"name":"ملاوي","code":"MW"},
    {"name":"ماليزيا","code":"MY"},
    {"name":"جزر المالديف","code":"MV"},
    {"name":"مالي","code":"ML"},
    {"name":"مالطا","code":"MT"},
    {"name":"جزر مارشال","code":"MH"},
    {"name":"مارتينيك","code":"MQ"},
    {"name":"موريتانيا","code":"MR"},
    {"name":"موريشيوس","code":"MU"},
    {"name":"مايوت","code":"YT"},
    {"name":"المكسيك","code":"MX"},
    {"name":"ولايات ميكرونيزيا الموحدة","code":"FM"},
    {"name":"جمهورية مولدوفا","code":"MD"},
    {"name":"موناكو","code":"MC"},
    {"name":"منغوليا","code":"MN"},
    {"name":"الجبل الأسود","code":"ME"},
    {"name":"مونتسيرات","code":"MS"},
    {"name":"المغرب","code":"MA"},
    {"name":"موزمبيق","code":"MZ"},
    {"name":"ميانمار","code":"MM"},
    {"name":"ناميبيا","code":"NA"},
    {"name":"ناورو","code":"NR"},
    {"name":"نيبال","code":"NP"},
    {"name":"هولندا","code":"NL"},
    {"name":"جزر الأنتيل الهولندية","code":"AN"},
    {"name":"كاليدونيا الجديدة","code":"NC"},
    {"name":"نيوزيلاندا","code":"NZ"},
    {"name":"نيكاراغوا","code":"NI"},
    {"name":"النيجر","code":"NE"},
    {"name":"نيجيريا","code":"NG"},
    {"name":"نيوي","code":"NU"},
    {"name":"جزيرة نورفولك","code":"NF"},
    {"name":"جزر مريانا الشمالية","code":"MP"},
    {"name":"النرويج","code":"NO"},
    {"name":"سلطنة عمان","code":"OM"},
    {"name":"باكستان","code":"PK"},
    {"name":"بالاو","code":"PW"},
    {"name":"الأراضي الفلسطينية المحتلة","code":"PS"},
    {"name":"بنما","code":"PA"},
    {"name":"بابوا غينيا الجديدة","code":"PG"},
    {"name":"باراغواي","code":"PY"},
    {"name":"بيرو","code":"PE"},
    {"name":"فيلبيني","code":"PH"},
    {"name":"بيتكيرن","code":"PN"},
    {"name":"بولندا","code":"PL"},
    {"name":"البرتغال","code":"PT"},
    {"name":"بورتوريكو","code":"PR"},
    {"name":"دولة قطر","code":"QA"},
    {"name":"جمع شمل","code":"RE"},
    {"name":"رومانيا","code":"RO"},
    {"name":"الاتحاد الروسي","code":"RU"},
    {"name":"رواندا","code":"RW"},
    {"name":"سانت بارتيليمي","code":"BL"},
    {"name":"سانت هيلانة","code":"SH"},
    {"name":"سانت كيتس ونيفيس","code":"KN"},
    {"name":"القديسة لوسيا","code":"LC"},
    {"name":"القديس مارتن","code":"MF"},
    {"name":"سانت بيير وميكلون","code":"PM"},
    {"name":"سانت فنسنت وجزر غرينادين","code":"VC"},
    {"name":"ساموا","code":"WS"},
    {"name":"سان مارينو","code":"SM"},
    {"name":"ساو تومي وبرينسيبي","code":"ST"},
    {"name":"المملكة العربية السعودية","code":"SA"},
    {"name":"السنغال","code":"SN"},
    {"name":"صربيا","code":"RS"},
    {"name":"صربيا والجبل الأسود","code":"CS"},
    {"name":"سيشيل","code":"SC"},
    {"name":"سيرا ليون","code":"SL"},
    {"name":"سنغافورة","code":"SG"},
    {"name":"سينت مارتن","code":"SX"},
    {"name":"سلوفاكيا","code":"SK"},
    {"name":"سلوفينيا","code":"SI"},
    {"name":"جزر سليمان","code":"SB"},
    {"name":"الصومال","code":"SO"},
    {"name":"جنوب أفريقيا","code":"ZA"},
    {"name":"جورجيا الجنوبية وجزر ساندويتش الجنوبية","code":"GS"},
    {"name":"جنوب السودان","code":"SS"},
    {"name":"إسبانيا","code":"ES"},
    {"name":"سيريلانكا","code":"LK"},
    {"name":"السودان","code":"SD"},
    {"name":"سورينام","code":"SR"},
    {"name":"سفالبارد وجان ماين","code":"SJ"},
    {"name":"سوازيلاند","code":"SZ"},
    {"name":"السويد","code":"SE"},
    {"name":"سويسرا","code":"CH"},
    {"name":"الجمهورية العربية السورية","code":"SY"},
    {"name":"مقاطعة تايوان الصينية","code":"TW"},
    {"name":"طاجيكستان","code":"TJ"},
    {"name":"جمهورية تنزانيا المتحدة","code":"TZ"},
    {"name":"تايلاند","code":"TH"},
    {"name":"تيمور ليشتي","code":"TL"},
    {"name":"توجو","code":"TG"},
    {"name":"توكيلاو","code":"TK"},
    {"name":"تونغا","code":"TO"},
    {"name":"ترينداد وتوباغو","code":"TT"},
    {"name":"تونس","code":"TN"},
    {"name":"ديك رومى","code":"TR"},
    {"name":"تركمانستان","code":"TM"},
    {"name":"جزر تركس وكايكوس","code":"TC"},
    {"name":"توفالو","code":"TV"},
    {"name":"أوغندا","code":"UG"},
    {"name":"أوكرانيا","code":"UA"},
    {"name":"الإمارات العربية المتحدة","code":"AE"},
    {"name":"المملكة المتحدة","code":"GB"},
    {"name":"الولايات المتحدة","code":"US"},
    {"name":"جزر الولايات المتحدة البعيدة الصغرى","code":"UM"},
    {"name":"أوروغواي","code":"UY"},
    {"name":"أوزبكستان","code":"UZ"},
    {"name":"فانواتو","code":"VU"},
    {"name":"فنزويلا","code":"VE"},
    {"name":"فييت نام","code":"VN"},
    {"name":"جزر العذراء البريطانية","code":"VG"},
    {"name":"جزر فيرجن ، الولايات المتحدة","code":"VI"},
    {"name":"واليس وفوتونا","code":"WF"},
    {"name":"الصحراء الغربية","code":"EH"},
    {"name":"اليمن","code":"YE"},
    {"name":"زامبيا","code":"ZM"},
    {"name":"زيمبابوي","code":"ZW"}
];

app.get('/api/create', async (req, res) => {
await countriesJS.forEach(element => {
        countries.create({
        country_code: element.code,
        country_name: element.name,
        })
    });
}); */

app.get('/api/top', async (req, res) => {
    const countriesAPI = await countries.find()
    res.send(countriesAPI);
});

app.post('/api/start', jsonParser, async (req, res) => {
    var query = User.find({
        user_ip: req.body.ip
    }).lean().limit(1);
    
    // Find the document
    query.exec(async function(error, result) {
        var savedUser = null;
        if (error) { throw error; }
        // If the document doesn't exist
         if (!result.length) {
            // Create a new one
            const newUser =  new User({user_ip: req.body.ip, user_clicks: req.body.clicks,user_country: req.body.country});
            savedUser = await newUser.save();
            savedUser.save(function(error) {
                if (error) { return error; }
                // do something with the document here
            });
        }else{
            savedUser = await User.findOne({users_id: req.body.ip});
            res.status(200).json({ip: savedUser.user_ip, clicks: savedUser.user_clicks, country: savedUser.user_country});
        }
    });
    //new Total({total_clicks:0, total_countries:0}).save();
});


app.get('/api/countries', async (req, res) => {
    res.send(await countries.find());
});


app.get('/api/all', async (req, res) => {
    try{
    const all = await Total.find();
    res.status(200).json({clicks: all[0].total_clicks});
    }catch(err){
       //Handle
    }
});
app.get('/api/country/:code', async (req, res) => {
    try {
         const country = await countries.findOne({country_code: req.params.code});
         res.status(200).json({name: country.country_name, clicks: country.country_clicks});
         }catch(err){
            //Handle
         }
});

app.post('/api/click', jsonParser, (req, res) => {
    var query = {user_ip: req.body.ip},
    update = { 
        user_ip: req.body.ip,
        $inc: {user_clicks: req.body.clicks},
        user_country: req.body.country
    },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };
    // Find the User and update
    User.findOneAndUpdate(query, update, options, function(error, result) {
        if (error) return;

        // do something with the document

    });
    // Find the Total and update
    Total.findOneAndUpdate({_id: '6195592b70226a6cc73d9d29'}, {$inc: {total_clicks: req.body.clicks}}, options, function(error, result) {
        if (error) return;
        // do something with the document
    });
    // Find the Country and update
    countries.findOneAndUpdate({country_code: req.body.country}, {$inc: {country_clicks: req.body.clicks}}, options, function(error, result) {
        if (error) return;
        // do something with the document
    });
});



app.listen(process.env.PORT || 3000);



