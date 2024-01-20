const BASE_URL_NAME = 'report'

export const reportUrls = {
    getAllEventsName: `${BASE_URL_NAME}/events-search-line/`,
    getAllPlacesName: `${BASE_URL_NAME}/nature-objects-search-line/`,
    getAllRoutesName: `${BASE_URL_NAME}/routes-search-line/`,
    getAllSortPointsName: `${BASE_URL_NAME}/sort-points/`,
    getWasteTypes: `${BASE_URL_NAME}/waste-types/`,
    createReport: `${BASE_URL_NAME}/create_report/`,
    getReportData: (id) => `${BASE_URL_NAME}/report/${id}/`,
    updateReport: (id) => `${BASE_URL_NAME}/edit/${id}/`,
}