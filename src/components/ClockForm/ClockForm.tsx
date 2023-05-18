import  { useState }  from "react";
import { Clock }  from "../../models/Clocks";
import AnalogClock from "analog-clock-react";




export function ClockForm(props: {clock: Clock}) { 
  let aryIannaTimeZones = [
    'Europe/Andorra',
     'Asia/Dubai',
     'Asia/Kabul',
     'Europe/Tirane',
     'Asia/Yerevan',
     'Antarctica/Casey',
     'Antarctica/Davis',
     'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
     'Antarctica/Mawson',
     'Antarctica/Palmer',
     'Antarctica/Rothera',
     'Antarctica/Syowa',
     'Antarctica/Troll',
     'Antarctica/Vostok',
     'America/Argentina/Buenos_Aires',
     'America/Argentina/Cordoba',
     'America/Argentina/Salta',
     'America/Argentina/Jujuy',
     'America/Argentina/Tucuman',
     'America/Argentina/Catamarca',
     'America/Argentina/La_Rioja',
     'America/Argentina/San_Juan',
     'America/Argentina/Mendoza',
     'America/Argentina/San_Luis',
     'America/Argentina/Rio_Gallegos',
     'America/Argentina/Ushuaia',
     'Pacific/Pago_Pago',
     'Europe/Vienna',
     'Australia/Lord_Howe',
     'Antarctica/Macquarie',
     'Australia/Hobart',
     'Australia/Currie',
     'Australia/Melbourne',
     'Australia/Sydney',
     'Australia/Broken_Hill',
     'Australia/Brisbane',
     'Australia/Lindeman',
     'Australia/Adelaide',
     'Australia/Darwin',
     'Australia/Perth',
     'Australia/Eucla',
     'Asia/Baku',
     'America/Barbados',
     'Asia/Dhaka',
     'Europe/Brussels',
     'Europe/Sofia',
     'Atlantic/Bermuda',
     'Asia/Brunei',
     'America/La_Paz',
     'America/Noronha',
     'America/Belem',
     'America/Fortaleza',
     'America/Recife',
     'America/Araguaina',
     'America/Maceio',
     'America/Bahia',
     'America/Sao_Paulo',
     'America/Campo_Grande',
     'America/Cuiaba',
     'America/Santarem',
     'America/Porto_Velho',
     'America/Boa_Vista',
     'America/Manaus',
     'America/Eirunepe',
     'America/Rio_Branco',
     'America/Nassau',
     'Asia/Thimphu',
     'Europe/Minsk',
     'America/Belize',
     'America/St_Johns',
     'America/Halifax',
     'America/Glace_Bay',
     'America/Moncton',
     'America/Goose_Bay',
     'America/Blanc-Sablon',
     'America/Toronto',
     'America/Nipigon',
     'America/Thunder_Bay',
     'America/Iqaluit',
     'America/Pangnirtung',
     'America/Atikokan',
     'America/Winnipeg',
     'America/Rainy_River',
     'America/Resolute',
     'America/Rankin_Inlet',
     'America/Regina',
     'America/Swift_Current',
     'America/Edmonton',
     'America/Cambridge_Bay',
     'America/Yellowknife',
     'America/Inuvik',
     'America/Creston',
     'America/Dawson_Creek',
     'America/Fort_Nelson',
     'America/Vancouver',
     'America/Whitehorse',
     'America/Dawson',
     'Indian/Cocos',
     'Europe/Zurich',
     'Africa/Abidjan',
     'Pacific/Rarotonga',
     'America/Santiago',
     'America/Punta_Arenas',
     'Pacific/Easter',
     'Asia/Shanghai',
     'Asia/Urumqi',
     'America/Bogota',
     'America/Costa_Rica',
     'America/Havana',
     'Atlantic/Cape_Verde',
     'America/Curacao',
     'Indian/Christmas',
     'Asia/Nicosia',
     'Asia/Famagusta',
     'Europe/Prague',
     'Europe/Berlin',
     'Europe/Copenhagen',
     'America/Santo_Domingo',
     'Africa/Algiers',
     'America/Guayaquil',
     'Pacific/Galapagos',
     'Europe/Tallinn',
     'Africa/Cairo',
     'Africa/El_Aaiun',
     'Europe/Madrid',
     'Africa/Ceuta',
     'Atlantic/Canary',
     'Europe/Helsinki',
     'Pacific/Fiji',
     'Atlantic/Stanley',
     'Pacific/Chuuk',
     'Pacific/Pohnpei',
     'Pacific/Kosrae',
     'Atlantic/Faroe',
     'Europe/Paris',
     'Europe/London',
     'Asia/Tbilisi',
     'America/Cayenne',
     'Africa/Accra',
     'Europe/Gibraltar',
     'America/Godthab',
     'America/Danmarkshavn',
     'America/Scoresbysund',
     'America/Thule',
     'Europe/Athens',
   'Atlantic/South_Georgia',
     'America/Guatemala',
     'Pacific/Guam',
     'Africa/Bissau',
     'America/Guyana',
     'Asia/Hong_Kong',
     'America/Tegucigalpa',
     'America/Port-au-Prince',
     'Europe/Budapest',
     'Asia/Jakarta',
     'Asia/Pontianak',
     'Asia/Makassar',
     'Asia/Jayapura',
     'Europe/Dublin',
     'Asia/Jerusalem',
     'Asia/Kolkata',
     'Indian/Chagos',
     'Asia/Baghdad',
     'Asia/Tehran',
     'Atlantic/Reykjavik',
     'Europe/Rome',
     'America/Jamaica',
     'Asia/Amman',
     'Asia/Tokyo',
     'Africa/Nairobi',
     'Asia/Bishkek',
     'Pacific/Tarawa',
     'Pacific/Enderbury',
     'Pacific/Kiritimati',
     'Asia/Pyongyang',
     'Asia/Seoul',
     'Asia/Almaty',
     'Asia/Qyzylorda',
     'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
     'Asia/Aqtobe',
     'Asia/Aqtau',
     'Asia/Atyrau',
     'Asia/Oral',
     'Asia/Beirut',
     'Asia/Colombo',
     'Africa/Monrovia',
     'Europe/Vilnius',
     'Europe/Luxembourg',
     'Europe/Riga',
     'Africa/Tripoli',
     'Africa/Casablanca',
     'Europe/Monaco',
     'Europe/Chisinau',
     'Pacific/Majuro',
     'Pacific/Kwajalein',
     'Asia/Yangon',
     'Asia/Ulaanbaatar',
     'Asia/Hovd',
     'Asia/Choibalsan',
     'Asia/Macau',
     'America/Martinique',
     'Europe/Malta',
     'Indian/Mauritius',
     'Indian/Maldives',
     'America/Mexico_City',
     'America/Cancun',
     'America/Merida',
     'America/Monterrey',
     'America/Matamoros',
     'America/Mazatlan',
     'America/Chihuahua',
     'America/Ojinaga',
     'America/Hermosillo',
     'America/Tijuana',
     'America/Bahia_Banderas',
     'Asia/Kuala_Lumpur',
     'Asia/Kuching',
     'Africa/Maputo',
     'Africa/Windhoek',
     'Pacific/Noumea',
     'Pacific/Norfolk',
     'Africa/Lagos',
     'America/Managua',
     'Europe/Amsterdam',
     'Europe/Oslo',
     'Asia/Kathmandu',
     'Pacific/Nauru',
     'Pacific/Niue',
     'Pacific/Auckland',
     'Pacific/Chatham',
     'America/Panama',
     'America/Lima',
     'Pacific/Tahiti',
     'Pacific/Marquesas',
     'Pacific/Gambier',
     'Pacific/Port_Moresby',
     'Pacific/Bougainville',
     'Asia/Manila',
     'Asia/Karachi',
     'Europe/Warsaw',
     'America/Miquelon',
     'Pacific/Pitcairn',
     'America/Puerto_Rico',
     'Asia/Gaza',
     'Asia/Hebron',
     'Europe/Lisbon',
     'Atlantic/Madeira',
     'Atlantic/Azores',
     'Pacific/Palau',
     'America/Asuncion',
     'Asia/Qatar',
     'Indian/Reunion',
     'Europe/Bucharest',
     'Europe/Belgrade',
     'Europe/Kaliningrad',
     'Europe/Moscow',
     'Europe/Simferopol',
     'Europe/Kirov',
     'Europe/Astrakhan',
     'Europe/Volgograd',
     'Europe/Saratov',
     'Europe/Ulyanovsk',
     'Europe/Samara',
     'Asia/Yekaterinburg',
     'Asia/Omsk',
     'Asia/Novosibirsk',
     'Asia/Barnaul',
     'Asia/Tomsk',
     'Asia/Novokuznetsk',
     'Asia/Krasnoyarsk',
     'Asia/Irkutsk',
     'Asia/Chita',
     'Asia/Yakutsk',
     'Asia/Khandyga',
     'Asia/Vladivostok',
     'Asia/Ust-Nera',
     'Asia/Magadan',
     'Asia/Sakhalin',
     'Asia/Srednekolymsk',
     'Asia/Kamchatka',
     'Asia/Anadyr',
     'Asia/Riyadh',
     'Pacific/Guadalcanal',
     'Indian/Mahe',
     'Africa/Khartoum',
     'Europe/Stockholm',
     'Asia/Singapore',
     'America/Paramaribo',
     'Africa/Juba',
     'Africa/Sao_Tome',
     'America/El_Salvador',
     'Asia/Damascus',
     'America/Grand_Turk',
     'Africa/Ndjamena',
     'Indian/Kerguelen',
     'Asia/Bangkok',
     'Asia/Dushanbe',
     'Pacific/Fakaofo',
     'Asia/Dili',
     'Asia/Ashgabat',
     'Africa/Tunis',
     'Pacific/Tongatapu',
     'Europe/Istanbul',
     'America/Port_of_Spain',
     'Pacific/Funafuti',
     'Asia/Taipei',
     'Europe/Kiev',
     'Europe/Uzhgorod',
     'Europe/Zaporozhye',
     'Pacific/Wake',
     'America/New_York',
     'America/Detroit',
     'America/Kentucky/Louisville',
     'America/Kentucky/Monticello',
     'America/Indiana/Indianapolis',
     'America/Indiana/Vincennes',
     'America/Indiana/Winamac',
     'America/Indiana/Marengo',
     'America/Indiana/Petersburg',
     'America/Indiana/Vevay',
     'America/Chicago',
     'America/Indiana/Tell_City',
     'America/Indiana/Knox',
     'America/Menominee',
     'America/North_Dakota/Center',
     'America/North_Dakota/New_Salem',
     'America/North_Dakota/Beulah',
     'America/Denver',
     'America/Boise',
     'America/Phoenix',
     'America/Los_Angeles',
     'America/Anchorage',
     'America/Juneau',
     'America/Sitka',
     'America/Metlakatla',
     'America/Yakutat',
     'America/Nome',
     'America/Adak',
     'Pacific/Honolulu',
     'America/Montevideo',
     'Asia/Samarkand',
     'Asia/Tashkent',
     'America/Caracas',
     'Asia/Ho_Chi_Minh',
     'Pacific/Efate',
     'Pacific/Wallis',
     'Pacific/Apia',
     'Africa/Johannesburg'];

     const [options, setOptions] = useState({
      useCustomTime: true,
      width: "300px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "#459cff",
      centerBorderColor: "#ffffff",
      handColors: {
        second: "#d81c7a",
        minute: "#ffffff",
        hour: "#ffffff"
      },
      "seconds": 1,
      "minutes": 10,
      "hours": 22
  })

  const [selected, setSelected] = useState('')
     
  function refreshClock() {
    let ausTime = new Date().toLocaleString("en-US", { 
      timeZone: selected,
    });
    
    let newDate = new Date(ausTime);
    
    
     setOptions({
       useCustomTime: true,
       width: "300px",
       border: true,
       borderColor: "#2e2e2e",
       baseColor: "#17a2b8",
       centerColor: "#459cff",
       centerBorderColor: "#ffffff",
       handColors: {
         second: "#d81c7a",
         minute: "#ffffff",
         hour: "#ffffff"
       },
       seconds:  newDate.getSeconds(),
       minutes: newDate.getMinutes(),
       hours: newDate.getHours(),
     });
   }
  



   return (
     <div>
       <label htmlFor="timeZone">Select your timezone</label>
       <select name = "timeZone" id="timeZone" onChange={(e) =>setSelected(e.target.value)}>
       {aryIannaTimeZones.map((timezone, i) => (
           <option key={i} value={timezone}>
             {timezone}
           </option>
           ))} 
           <AnalogClock {...options}/>
           
           </select>
       </div>
   )
       }
       
   
   
   
   
   
// props: {clock: Clock, updateClock: (clock: Clock) => void}

   
   
   
   
   
   
   
   
   
   

  
  

// props: {clock: Clock, updateClock: (clock: Clock) => void}

/*const [timeZones, setTimeZones] = useState([
  {
  id: 1,
  timeZone: "Eniwetok, Kwajalein",
  isDigital: false
  },
  {
  id: 2,
  timeZone: "Midway Island, Samoa",
  isDigital: false
  },
  {
  id: 3,
  timeZone: "Hawaii",
  isDigital: false
  },
  {
  id: 4,
  timeZone: "Taiohae",
  isDigital: false
  },
  {
  id: 5,
  timeZone: "Alaska",
  isDigital: false
  },
  {
  id: 6,
  timeZone: "Pacific Time",
  isDigital: false
  },
  {
  id: 7,
  timeZone: "Mountain Time",
  isDigital: false
  },
  {
  id: 8,
  timeZone: "Central Time",
  isDigital: false
  },
  {
  id: 9,
  timeZone: "Eastern Time",
  isDigital: false
  },
  {
  id: 10,
  timeZone: "Caracas",
  isDigital: false
  },
  {
  id: 11,
  timeZone: "Atlantic Time",
  isDigital: false
  },
  {
  id: 12,
  timeZone: "Newfoundland",
  isDigital: false
  },
  {
  id: 13,
  timeZone: "Brazil, Buenos Aires, Georgetown",
  isDigital: false
  },
  {
  id: 14,
  timeZone: "Mid-Atlantic",
  isDigital: false
  },
  {
  id: 15,
  timeZone: "Azores, Cape Verde Islands",
  isDigital: false
  },
  {
  id: 16,
  timeZone: "Western Europe Time, London",
  isDigital: false
  },
  {
  id: 17,
  timeZone: "Brussels, Copenhagen, Madrid, Paris",
  isDigital: false
  },
  {
  id: 18,
  timeZone: "Kaliningrad, South Africa",
  isDigital: false
  },
  {
  id: 19,
  timeZone: "Baghdad, Riyadh, Moscow, St. Petersburg",
  isDigital: false
  },
  {
  id: 20,
  timeZone: "Tehran",
  isDigital: false
  },
  {
  id: 21,
  timeZone: "Abu Dhabi, Muscat, Baku, Tbilisi",
  isDigital: false
  },
  {
  id: 22,
  timeZone: "Kabul",
  isDigital: false
  },
  {
  id: 23,
  timeZone: "Ekaterinburg, Islamabad, Karachi, Tashkent",
  isDigital: false
  },
  {
  id: 24,
  timeZone: "Bombay, Calcutta, Madras, New Delhi",
  isDigital: false
  },
  {
  id: 25,
  timeZone: "Katmandu, Pokhara",
  isDigital: false
  },
  {
  id: 26,
  timeZone: "Almaty, Dhaka, Colombo",
  isDigital: false
  },
  {
  id: 27,
  timeZone: "Yangon, Mandalay",
  isDigital: false
  },
  {
  id: 28,
  timeZone: "Bangkok, Hanoi, Jakarta",
  isDigital: false
  },
  {
  id: 29,
  timeZone: "Beijing, Pertgit h, Singapore, Hong Kong",
  isDigital: false
  },
  {
  id: 30,
  timeZone: "Eucla",
  isDigital: false
  },
  {
  id: 31,
  timeZone: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
  isDigital: false
  },
  {
  id: 32,
  timeZone: "Adelaide, Darwin",
  isDigital: false
  },
  {
  id: 33,
  timeZone: "Eastern Australia, Guam, Vladivostok",
  isDigital: false
  },
  {
  id: 34,
  timeZone: "Lord Howe Island",
  isDigital: false
  },
  {
  id: 35,
  timeZone: "Magadan, Solomon Islands, New Caledonia",
  isDigital: false
  },
  {
  id: 36,
  timeZone: "Norfolk Island",
  isDigital: false
  },
  {
  id: 37,
  timeZone: "Auckland, Wellington, Fiji, Kamchatka",
  isDigital: false
  },
  {
  id: 38,
  timeZone: "Chatham Islands",
  isDigital: false
  },
  {
  id: 39,
  timeZone: "Apia, Nukualofa",
  isDigital: false
  },
  {
  id: 40,
  timeZone: "Line Islands, Tokelau",
  isDigital: false
  },

]);
return (
  <div id="time-zone-container">
    <form>
      <button onClick={ClockForm}>Add Clock</button>
      {/* /* <p onClick={() => {console.log(key);removeData(key)}} key={key}>{value.name1}</p>
    ))} */ 
      /*<label>Choose a TimeZone: </label>
      <select
        name="time-zones"
        id="time-zones"
        value="selectTimeZone"
        onChange={handleTimeZoneChange}
      >
        <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
        <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
        <option value="-10:00">(GMT -10:00) Hawaii</option>
        <option value="-09:50">(GMT -9:30) Taiohae</option>
        <option value="-09:00">(GMT -9:00) Alaska</option>
        <option value="-08:00">
          (GMT -8:00) Pacific Time (US &amp; Canada)
        </option>
        <option value="-07:00">
          (GMT -7:00) Mountain Time (US &amp; Canada)
        </option>
        <option value="-06:00">
          (GMT -6:00) Central Time (US &amp; Canada), Mexico City
        </option>
        <option value="-05:00">
          (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
        </option>
        <option value="-04:50">(GMT -4:30) Caracas</option>
        <option value="-04:00">
          (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
        </option>
        <option value="-03:50">(GMT -3:30) Newfoundland</option>
        <option value="-03:00">
          (GMT -3:00) Brazil, Buenos Aires, Georgetown
        </option>
        <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
        <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
        <option value="+00:00">(GMT) Western Europe Time, London</option>
        <option value="+01:00">
          (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
        </option>
        <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
        <option value="+03:00">
          (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
        </option>
        <option value="+03:50">(GMT +3:30) Tehran</option>
        <option value="+04:00">
          (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
        </option>
        <option value="+04:50">(GMT +4:30) Kabul</option>
        <option value="+05:00">
          (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
        </option>
        <option value="+05:50">
          (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
        </option>
        <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
        <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
        <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
        <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
        <option value="+08:00">
          (GMT +8:00) Beijing, Pertgit h, Singapore, Hong Kong
        </option>
        <option value="+08:75">(GMT +8:45) Eucla</option>
        <option value="+09:00">
          (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
        </option>
        <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
        <option value="+10:00">
          (GMT +10:00) Eastern Australia, Guam, Vladivostok
        </option>
        <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
        <option value="+11:00">
          (GMT +11:00) Magadan, Solomon Islands, New Caledonia
        </option>
        <option value="+11:50">(GMT +11:30) Norfolk Island</option>
        <option value="+12:00">
          (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
        </option>
        <option value="+12:75">(GMT +12:45) Chatham Islands</option>
        <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
        <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
      </select>
      <div>
        <label>
          <input type="checkbox" />
          Switch to digital clock?
        </label>
      </div>
    </form>
  </div>
);*/