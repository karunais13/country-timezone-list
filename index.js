const RawData   = require('./rawData.json'),
    Abb = require('./abbreviationList.json');

const zeroPad = (num, places) => {
  let _place = 1;
  const str = num.toString();
  if( str[0] === '-' || str[0] === '+' )
    _place = 2;

  let zero = places - str.length + _place;
  const _num = num.toString().slice(_place-1, num.length);
  return Array(+(zero > 0 && zero)).join("0") + _num;
}

const formateResponse = (data) => {

  const _offset = data.rawOffsetInMinutes;
  let offset = _offset > 0 ? `+` : `-`;

  const _devide = _offset/60;
  const _remainder = _offset % 60;

  const _h = zeroPad(Math.ceil(_devide), 2);
  const _i = _remainder > 0 ? '30' : '00';


  offset =  `${offset}${_h}:${_i}`

  return {
    name : data.name,
    alternativeName : data.alternativeName,
    countryName : data.countryName,
    countryCode : data.countryCode,
    abbreviation : Abb[data.alternativeName] ?? offset,
    offset,
    rawOffsetInMinutes : data.rawOffsetInMinutes,
    fullName : `(UTC${offset}) ${data.name}`,
    fullAlternativeName : `(UTC${offset}) ${data.alternativeName}`,
  }
}

const getTimezoneByCountry = (cn) => {
  const result = [];

  RawData.forEach(item => item.countryCode.toLowerCase() === cn.toLowerCase() && result.push(formateResponse(item)))

  return result;
}

const getTimezoneGroupByCountryCode = () => {
  const result = {};

  RawData.forEach(item => {
    if( !result[item.countryCode] )
      result[item.countryCode] = {name : item.countryName, code : item.countryCode, data: []};

    result[item.countryCode].data.push(formateResponse(item))

  })

  return result;
}

const getTimezoneList = () => {
  const result = [];

  RawData.forEach(item => result.push(formateResponse(item)))

  return result;
}

module.exports = {
  getTimezoneList,
  getTimezoneByCountry,
  getTimezoneGroupByCountryCode
};