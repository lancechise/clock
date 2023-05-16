import { useState } from "react";
import { Clock } from "../../models/Clocks";
import "./ClockForm.css";

export function ClockForm() {
  const [timeZones, setTimeZones] = useState([
    {
      id: 1,
      timeZone: "Eniwetok, Kwajalein",
      isDigital: false,
    },
    {
      id: 2,
      timeZone: "Midway Island, Samoa",
      isDigital: false,
    },
    {
      id: 3,
      timeZone: "Hawaii",
      isDigital: false,
    },
    {
      id: 4,
      timeZone: "Taiohae",
      isDigital: false,
    },
    {
      id: 5,
      timeZone: "Alaska",
      isDigital: false,
    },
    {
      id: 6,
      timeZone: "Pacific Time",
      isDigital: false,
    },
    {
      id: 7,
      timeZone: "Mountain Time",
      isDigital: false,
    },
    {
      id: 8,
      timeZone: "Central Time",
      isDigital: false,
    },
    {
      id: 9,
      timeZone: "Eastern Time",
      isDigital: false,
    },
    {
      id: 10,
      timeZone: "Caracas",
      isDigital: false,
    },
    {
      id: 11,
      timeZone: "Atlantic Time",
      isDigital: false,
    },
    {
      id: 12,
      timeZone: "Newfoundland",
      isDigital: false,
    },
    {
      id: 13,
      timeZone: "Brazil, Buenos Aires, Georgetown",
      isDigital: false,
    },
    {
      id: 14,
      timeZone: "Mid-Atlantic",
      isDigital: false,
    },
    {
      id: 15,
      timeZone: "Azores, Cape Verde Islands",
      isDigital: false,
    },
    {
      id: 16,
      timeZone: "Western Europe Time, London",
      isDigital: false,
    },
    {
      id: 17,
      timeZone: "Brussels, Copenhagen, Madrid, Paris",
      isDigital: false,
    },
    {
      id: 18,
      timeZone: "Kaliningrad, South Africa",
      isDigital: false,
    },
    {
      id: 19,
      timeZone: "Baghdad, Riyadh, Moscow, St. Petersburg",
      isDigital: false,
    },
    {
      id: 20,
      timeZone: "Tehran",
      isDigital: false,
    },
    {
      id: 21,
      timeZone: "Abu Dhabi, Muscat, Baku, Tbilisi",
      isDigital: false,
    },
    {
      id: 22,
      timeZone: "Kabul",
      isDigital: false,
    },
    {
      id: 23,
      timeZone: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      isDigital: false,
    },
    {
      id: 24,
      timeZone: "Bombay, Calcutta, Madras, New Delhi",
      isDigital: false,
    },
    {
      id: 25,
      timeZone: "Katmandu, Pokhara",
      isDigital: false,
    },
    {
      id: 26,
      timeZone: "Almaty, Dhaka, Colombo",
      isDigital: false,
    },
    {
      id: 27,
      timeZone: "Yangon, Mandalay",
      isDigital: false,
    },
    {
      id: 28,
      timeZone: "Bangkok, Hanoi, Jakarta",
      isDigital: false,
    },
    {
      id: 29,
      timeZone: "Beijing, Pertgit h, Singapore, Hong Kong",
      isDigital: false,
    },
    {
      id: 30,
      timeZone: "Eucla",
      isDigital: false,
    },
    {
      id: 31,
      timeZone: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      isDigital: false,
    },
    {
      id: 32,
      timeZone: "Adelaide, Darwin",
      isDigital: false,
    },
    {
      id: 33,
      timeZone: "Eastern Australia, Guam, Vladivostok",
      isDigital: false,
    },
    {
      id: 34,
      timeZone: "Lord Howe Island",
      isDigital: false,
    },
    {
      id: 35,
      timeZone: "Magadan, Solomon Islands, New Caledonia",
      isDigital: false,
    },
    {
      id: 36,
      timeZone: "Norfolk Island",
      isDigital: false,
    },
    {
      id: 37,
      timeZone: "Auckland, Wellington, Fiji, Kamchatka",
      isDigital: false,
    },
    {
      id: 38,
      timeZone: "Chatham Islands",
      isDigital: false,
    },
    {
      id: 39,
      timeZone: "Apia, Nukualofa",
      isDigital: false,
    },
    {
      id: 40,
      timeZone: "Line Islands, Tokelau",
      isDigital: false,
    },
  ]);

  return (
    <div id="time-zone-container">
      <form>
        <button onClick={ClockForm}>Add Clock</button>
        {/* /* <p onClick={() => {console.log(key);removeData(key)}} key={key}>{value.name1}</p>
      ))} */ */}

        <label>Choose a TimeZone: </label>
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
  );
}

// props: {clock: Clock, updateClock: (clock: Clock) => void}
