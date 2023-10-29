const BASE_URL_NAME = 'favorites'

export const favoritesUrls = {
    getFavoritesForUser: (object_type, userId) => `${BASE_URL_NAME}/${object_type}/${userId}/`,
}