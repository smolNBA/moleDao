import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  
   return (
    <div>
     <button onClick={connectWithMetamask}>Connect with Metamask</button>
     <p>Your address: {address}</p>
    </div>
  )
}

export default App;
