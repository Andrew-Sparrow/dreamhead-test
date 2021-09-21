import {React} from 'react';
import {useSelector} from 'react-redux';

// import RoomList from '../room-list/room-list';
import withLayout from '../hocs/with-layout';
import Tabs from '../tabs/tabs';
import Util from '../../util/util';
import MainEmpty from '../main-empty/main-empty';
import {getPlaces, getActiveCityName} from '../../store/places/selectors';

function Main() {
  const activeCityName = useSelector(getActiveCityName);
  const places = useSelector(getPlaces);

  const filteredPlaces = Util.getFilteredPlaces(activeCityName, places);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        filteredPlaces.length === 0
          ? <MainEmpty activeCityName={activeCityName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredPlaces.length} places to stay in {activeCityName}</b>
                  {/* <RoomList places={filteredPlaces} /> */}
                </section>
              </div>
            </div>
          )
      }
    </main>
  );
}

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
