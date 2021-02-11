//export const baseUrl = process.env.REACT_APP_API_HOST;
// export const BASE_URL = "http://127.0.0.1:8000/api/v1";
export const BASE_URL = process.env.REACT_APP_API_HOST;

export const PROFILE_ENDPOINT = `${BASE_URL}/me`;


// Endpoints

// projects
export const PROJECTS_LIST_ENDPOINT = `${BASE_URL}/isiolo_projects`;
export const AGENTS_LIST_ENDPOINT = `${BASE_URL}/agents`;

// Field Officer


// County Manager


// Regional Manager

// CEO


// Audit


// Finance

export const MARKERS_LIST_ENDPOINT = `${BASE_URL}/markers`;

export const COUNTIES_LIST_ENDPOINT = `${BASE_URL}/counties`;

export const ROADS_LIST_ENDPOINT = `${BASE_URL}/kenya_roads`;

export const RIVERS_LIST_ENDPOINT = `${BASE_URL}/kenya_rivers`;
