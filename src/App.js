import React, { useEffect, useState } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
  CardContent,
  Card,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData, prettyPrintStat } from './util';
import LineGraph from './LineGraph';
import 'leaflet/dist/leaflet.css';
import './InfoBox.css';
import Footer from './Footer';

export default function App() {
  return (
    <React.Fragment>
      <div className="app">
        <div className="app__left">
          <div className="app__header">
            <h1>🔬 COVID-19 WORLD SMART TRACKER</h1>
          </div>
          <div className="app__stats"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

