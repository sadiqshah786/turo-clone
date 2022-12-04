import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <div className='main_header'>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className='content_header'>
                <a target="_blank" rel="noreferrer" href='https://turo.com/us/en/search?country=US&defaultZoomLevel=11&delivery=false&endDate=11%2F23%2F2022&endTime=10%3A00&isMapSearch=false&itemsPerPage=200&latitude=40.7127753&location=New%20York%2C%20NY%2C%20USA&locationType=CITY&longitude=-74.0059728&pickupType=ALL&region=NY&sortType=RELEVANCE&startDate=11%2F20%2F2022&startTime=10%3A00&useDefaultMaximumDistance=true'>Turo has launched in New York! Tap to explore cars.</a>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <div className='priamry_header'>
        <Header />
      </div>
      <div className='Banner'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='main_searchBar_wrapper'>
                <form>
                  <div className='form_detials'>
                    <div className='searchBar'>
                      <span className='text'>Where</span>
                    </div>
                    <div className='fromDate'>
                      <div>
                        <span className='text'>From</span>
                      </div>
                      <div className='datepicker_wrapper'>
                      </div>
                    </div>

                    <div className='EndDate'>
                      <div >
                        <span className='text'>Untill</span>
                      </div>
                      <div className='datepicker_wrapper'>
                      </div>
                    </div>
                    <div className='searchBarIcon'>
                     <button type="button" onClick={redirection}>
                      <span><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="searchIconLabel" class="seo-pages-1iuz9hb" role="img" version="1.1"><path d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="#fff"></path></svg></span>
                     </button>
                    </div>
                  </div>


                </form>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
function redirection(){
  window.location.href = "https://turo.com/us/en/search?delivery=false&endDate=11%2F26%2F2022&endTime=10%3A00&location=Current%20location&locationType=CURRENT_LOCATION&startDate=11%2F23%2F2022&startTime=10%3A00"
}
export default App;
