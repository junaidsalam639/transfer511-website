import { BrowserRouter } from "react-router"
import AppRoutes from "./routes"
import { GOOGLE_MAPS_API_KEY } from "./components/home/HomeHeroSection"
import { LoadScript } from "@react-google-maps/api"

function App() {

  return (
    <>
      <BrowserRouter>
        <LoadScript
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          libraries={["places"]}
        >
          <AppRoutes />
        </LoadScript>
      </BrowserRouter>
    </>
  )
}

export default App
