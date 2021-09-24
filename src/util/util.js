import nanoid from 'nanoid';

class Util {
  static adaptToClient(offerFromServer) {
    const adaptedOfferForClient = Object.assign(
      {},
      offerFromServer,
      {
        host: Object.assign(
          {},
          offerFromServer.host,
          {
            avatarUrl: offerFromServer.host.avatar_url,
            isPro: offerFromServer.host.is_pro,
          },
        ),
        isFavorite: offerFromServer.is_favorite,
        isPremium: offerFromServer.is_premium,
        maxAdults: offerFromServer.max_adults,
        previewImage: offerFromServer.preview_image,
      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedOfferForClient.host.avatar_url;
    delete adaptedOfferForClient.host.is_pro;

    delete adaptedOfferForClient.is_favorite;
    delete adaptedOfferForClient.is_premium;
    delete adaptedOfferForClient.max_adults;
    delete adaptedOfferForClient.preview_image;

    return adaptedOfferForClient;
  }

  static adaptPlacesToClient(placesFromServer) {
    return placesFromServer.map((place) => this.adaptToClient(place));
  }

  static adaptCommentToClient(commentFromServer) {
    const adaptedCommentForClient = Object.assign(
      {},
      commentFromServer,
      {
        comment: commentFromServer.comment,
        date: commentFromServer.date,
        id: commentFromServer.id,
        rating: commentFromServer.rating,
        user: Object.assign(
          {},
          commentFromServer.user,
          {
            avatarUrl: commentFromServer.user.avatar_url,
            isPro: commentFromServer.user.is_pro,
            id: commentFromServer.user.id,
            name: commentFromServer.user.name,
          },
        ),
      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedCommentForClient.user.avatar_url;
    delete adaptedCommentForClient.user.is_pro;

    return adaptedCommentForClient;
  }

  static getFavoritePlacesSeparatedByCity(places) {
    const favoritePlaces = new Map();

    places.forEach((place) => {
      if (place.isFavorite) {
        if (favoritePlaces.has(place.city.name)) {
          favoritePlaces.get(place.city.name).push(place);
        } else {
          favoritePlaces.set(place.city.name, []);
          favoritePlaces.get(place.city.name).push(place);
        }
      }
    });

    return favoritePlaces;
  }

  static getFilteredPlaces(activeCity, places) {
    let filteredPlaces = [];
    filteredPlaces = places.filter((item) => item.city.name === activeCity);
    return filteredPlaces;
  }

  static formatDate = (dateString) => {
    const DATE_OPTIONS = {year: 'numeric', month: 'short'};

    return (new Date(dateString)).toLocaleDateString('en-US', DATE_OPTIONS);
  }

  static generateIdKeys(listLength) {
    const list = new Array(listLength).fill('');
    const generatedIdList = list.map(() => nanoid(10));
    return generatedIdList;
  }

  static getUpdatedPlaces(id, places, newPlace) {
    const adaptedPlaceForClient = this.adaptToClient(newPlace);
    const newPlaces = [...places];
    const index = newPlaces.findIndex((place) => place.id === id);
    newPlaces[index].isFavorite = adaptedPlaceForClient.isFavorite;
    return newPlaces;
  }

  static resetFavoriteStates(places) {
    return places.map((place) => {
      place = {...place, isFavorite: false};
      return place;
    });
  }
}

export default Util;
