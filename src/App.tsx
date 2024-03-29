import { uniqBy } from 'lodash'
import { useEffect, useState } from 'react'
import './App.css'
import VerySimpleBarGraph from './components/VerySimpleBarGraph';

function App() {
    const [grantsList, setGrantsList] = useState([]);

  useEffect(() => {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://funds.effectivealtruism.org/_next/data/39mwWfB1Nr2GzNLFW5UcY/grants.json')
      .then((res) => res.json())
      .then((data) => {
        setGrantsList(data.pageProps.GrantsList);
      });
    }, [])

    function getFilterValues(filterName: String) {
      // TODO: find a more efficient algorithm that avoids double iterating - maybe use `.reduce`
      // https://stackoverflow.com/a/15125941/3984943
      return uniqBy(grantsList, filterName)
        .map((x) => x[filterName]);
    }

    // console.log('grantsList: ', grantsList)
    console.log('grantsList[0]: ', grantsList[0])
    console.log("getFilterValues('fund'): ", getFilterValues('fund'))
    console.log("getFilterValues('grantee'): ", getFilterValues('grantee'))
    console.log("getFilterValues('round'): ", getFilterValues('round'))

  return (
    <div className="App">
      <h2>EA Funds: Graphs</h2>
      <VerySimpleBarGraph grantsList={grantsList} />
    </div>
  )
}

export default App
