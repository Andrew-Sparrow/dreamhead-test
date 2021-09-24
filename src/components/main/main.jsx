import {React} from 'react';
import {useSelector} from 'react-redux';

// import RoomList from '../room-list/room-list';
import withLayout from '../hocs/with-layout';
import Tabs from '../tabs/tabs';
import Util from '../../util/util';
import MainEmpty from '../main-empty/main-empty';
import {getContacts, getActiveGroupName} from '../../store/places/selectors';

function Main() {
  const activeGroupName = useSelector(getActiveGroupName);
  const places = useSelector(getContacts);

  const filteredPlaces = Util.getFilteredPlaces(activeGroupName, places);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        filteredPlaces.length === 0
          ? <MainEmpty activeGroupName={activeGroupName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredPlaces.length} places to stay in {activeGroupName}</b>
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
