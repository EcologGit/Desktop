const BASE_URL_NAME = 'user_profiles'
export const userProfilesUrls = {
    getStatistics: (userId) => `${BASE_URL_NAME}/statistics/${userId}`,
    getUserReports: (userId) => `${BASE_URL_NAME}/reports/${userId}`
}