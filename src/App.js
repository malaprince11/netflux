import "./App.css";
import Row from "./component/Row/Row";
import request from "./controller/request";
import Banner from "./component/Banner/Banner";
import NavBar from "./component/NavBar/NavBar";


function App() {
  
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="Netflix orignals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action" fetchUrl={request.fetchActinMovies} />
      <Row title="Comedie" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horreur" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaire" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
