import Banner from "./components/banner/Banner";
import Benefits from "./components/benefits/Benefits";
import PlacesToVisit from "./components/places-to-visit/PlacesToVisit";
import TheApartment from "./components/the-apartment/TheApartment";
import BookingAvailability from "./components/booking-availability/BookingAvailability";

function Home() {
  return (
    <>
      <Banner />
      <Benefits />
      <PlacesToVisit />
      <TheApartment />
      <BookingAvailability />
    </>
  );
}

export default Home;