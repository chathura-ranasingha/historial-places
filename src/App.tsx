import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Atoms/Loading";

const PlaceDetailsScreen = lazy(() => import("./screens/PlaceDetails.screen"));
const PlacesListScreen = lazy(() => import("./screens/PlacesList.screen"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PlacesListScreen />} />
          <Route path="/place/:placeId" element={<PlaceDetailsScreen />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
