import PropTypes from "prop-types";
import styled from "./Button.module.css";
// xxx.module.css => css 파일을 모듈화 시킴, object로 사용할 수 있게 해준다.
// 다른 css 파일에서 같은 클래스 네임을 가질수 있다.
function Button({ text }) {
  return <button className={styled.title}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
