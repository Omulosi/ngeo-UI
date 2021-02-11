
import Page from 'material-ui-shell/lib/containers/Page/Page';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import useSWR from 'swr'
import { useIntl } from 'react-intl';
import MapView from './MapView';
// import axiosWithAuth from '../../utils/axiosAuth';

import kenya_counties from "../../dummy_data/counties";
import narok from "../../dummy_data/narok_county_data";
import ngare_mara from "../../dummy_data/ngare_mara";
import isiolo_projects from "../../dummy_data/isiolo_projects";
import foo_projects from "../../dummy_data/projects";
import isiolo_installations from "../../dummy_data/isiolo_key_installations";
import foo_installations from "../../dummy_data/installations";
import sample_markers from "../../dummy_data/markers";

const AREA_NAME_ENDPOINT = 'http://127.0.0.1:8000/api/v1/sublocations/name/'

const fetcher = url => axios.get(url).then(res => res.data)

const Map = () => {
  const intl = useIntl();

  const defaultGeoJsonData = {
    "type": "FeatureCollection",
    "features": [
    ]
  }

  const [counties, setCounties] = useState(defaultGeoJsonData);
  const [sublocations, setSublocations] = useState(defaultGeoJsonData);
  const [area, setArea] = useState(defaultGeoJsonData);
  const [projects, setProjects] = useState(defaultGeoJsonData);
  const [installations, setInstallations] = useState(defaultGeoJsonData);
  const [markers, setMarkers] = useState(defaultGeoJsonData);

  let url = `${AREA_NAME_ENDPOINT}narok/`
  // const { data, error } = useSWR(url, fetcher)
  // setArea(data);

  // const fetchArea = useCallback(() => {
  //   //Axios call to remote API
  //   axios
  //   .get(url)
  //   .then( ({ data }) => {
  //     setArea(data.data.results);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [setArea, url]);


  const fetchCounties = useCallback(() => {
    setCounties(kenya_counties);
  }, [])

  const fetchArea = useCallback(() => {
    setArea(ngare_mara);
  }, [])

  const fetchProjects = useCallback(() => {
    setProjects(isiolo_projects);
  }, [])

  const fetchInstallations = useCallback(() => {
    // setInstallations(isiolo_installations);
    setInstallations(foo_installations);
  }, [])

  const fetchMarkers = useCallback(() => {
    // setMarkers(sample_markers);
    setMarkers(foo_projects);
  }, [])

   useEffect(() => {
    fetchCounties();
    fetchArea();
    fetchProjects();
    fetchInstallations();
    fetchMarkers();
  }, [fetchCounties, fetchArea, fetchProjects, fetchInstallations, fetchMarkers]);

  console.log("======================================================================")
  console.log(area);
  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'map',
        defaultMessage: 'Map',
      })}
    >
    <MapView counties={counties} area={area} projects={projects} installations={installations} markers={markers}/>
    </Page>
  )
}

export default Map;
