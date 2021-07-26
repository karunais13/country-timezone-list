#Timezone List [![GitHub license](https://img.shields.io/github/license/vvo/tzdb?style=flat)](https://github.com/vvo/tzdb/blob/master/LICENSE)

## NPM package

Installation:
### npm
```bash
npm install country-timezone-list
```

### yarn
```bash
yarn add country-timezone-list
```

Usage:

```js
import { getTimezoneList, getTimezoneByCountry, getTimezoneGroupByCountryCode } from "country-timezone-list";
```

## API

### getTimezoneList()

```js
const tz = getTimezoneList();
```

This method returns an array of time zones objects:

```js
[
  // ...
  {
    name: 'Pacific/Niue',
    alternativeName: 'Niue Time',
    countryName: 'Niue',
    countryCode: 'NU',
    abbreviation: 'NUT',
    offset: '-11:00',
    rawOffsetInMinutes: -660,
    fullName: '(UTC-11:00) Pacific/Niue',
    fullAlternativeName: '(UTC-11:00) Niue Time'
  },
  // ...
];
```

### getTimezoneByCountry( String countryCode )

```js
const tz = getTimezoneByCountry('MY' || ['MY', 'ID']);
```

This method returns an array of time zones objects for particular country:

```js
[
  {
    name: 'Asia/Kuala_Lumpur',
    alternativeName: 'Malaysia Time',
    countryName: 'Malaysia',
    countryCode: 'MY',
    abbreviation: 'MYT',
    offset: '+08:00',
    rawOffsetInMinutes: 480,
    fullName: '(UTC+08:00) Asia/Kuala_Lumpur',
    fullAlternativeName: '(UTC+08:00) Malaysia Time'
  },
  // ...
];
```

### getTimezoneGroupByCountryCode()

```js
const tz = getTimezoneGroupByCountryCode();
```

This method returns an array of time zones objects group by country:

```js
[
  // ...
  {
    name: 'Indonesia',
    code: 'ID',
    data: [
      {
        name: 'Asia/Jakarta',
        alternativeName: 'Western Indonesia Time',
        countryName: 'Indonesia',
        countryCode: 'ID',
        abbreviation: 'WIB',
        offset: '+07:00',
        rawOffsetInMinutes: 420,
        fullName: '(UTC+07:00) Asia/Jakarta',
        fullAlternativeName: '(UTC+07:00) Western Indonesia Time'
      },
      {
        name: 'Asia/Makassar',
        alternativeName: 'Central Indonesia Time',
        countryName: 'Indonesia',
        countryCode: 'ID',
        abbreviation: 'WITA',
        offset: '+08:00',
        rawOffsetInMinutes: 480,
        fullName: '(UTC+08:00) Asia/Makassar',
        fullAlternativeName: '(UTC+08:00) Central Indonesia Time'
      },
      {
        name: 'Asia/Jayapura',
        alternativeName: 'Eastern Indonesia Time',
        countryName: 'Indonesia',
        countryCode: 'ID',
        abbreviation: 'WIT',
        offset: '+09:00',
        rawOffsetInMinutes: 540,
        fullName: '(UTC+09:00) Asia/Jayapura',
        fullAlternativeName: '(UTC+09:00) Eastern Indonesia Time'
      }
    ]
  },
  // ...
];
```
