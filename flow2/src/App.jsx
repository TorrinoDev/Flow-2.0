import Homepage from "./sections/homepage/Homepage"
import { HopeProvider, NotificationsProvider } from '@hope-ui/solid'

function App() {
  
  return (
    <div>
       <HopeProvider>
      <NotificationsProvider>

      </NotificationsProvider>
      <Homepage/>

      </HopeProvider>
    </div>
  );
}

export default App;
