import { useState, useEffect } from "react";
function Hello() {
  // Hello 컴포넌트가 그려지지 않을 때는 'destroy' 됐기 때문에 아래 코드가 실행 되지 않는다.
  // Hello 컴포넌트가 그려질때는 '생성'되는 것이기 때문에 아래 코드가 실행 된다.
  useEffect(() => {
    console.log("CREATED :)");
    // cleanup function: component가 destroy 될때 실행시켜주는 함수
    return () => console.log("DESTROYED :(");
  }, []);

  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
function UseEffectCleanTest() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default UseEffectCleanTest;
