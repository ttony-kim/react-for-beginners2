import { useState, useEffect } from "react";
function CoinList() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSelectChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input type="number" value={value} onChange={onChange}></input>
          <h3>${value * selected}</h3>
          <select onChange={onSelectChange} value={selected}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default CoinList;
