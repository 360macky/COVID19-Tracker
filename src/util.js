import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

const casesTypeColors = {
  cases: {
    hex: '#ff4c4c',
    mulitiplier: 800,
  },

  recovered: {
    hex: '#0abf53',
    mulitiplier: 1200,
  },

  deaths: {
    hex: '#52565e',
    mulitiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => b.cases - a.cases);

  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format('0.0a')}` : '+0';

export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType] / 10) *
        casesTypeColors[casesType].mulitiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            <b>Cases:</b> {numeral(country.cases).format('0,0')}
          </div>
          <div className="info-recovered">
            <b>Recovered:</b> {numeral(country.recovered).format('0,0')}
          </div>
          <div className="info-deaths">
            <b>Deaths:</b> {numeral(country.deaths).format('0,0')}
          </div>
	  <div></div>
        </div>
      </Popup>
    </Circle>
  ));

