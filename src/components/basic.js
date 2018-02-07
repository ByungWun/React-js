
/**
 * @title     React js 샘플
 * @filename  basic.js
 * @author    ESE 강병운
 * @since     2018.02.07
 * @version   1.0
 * 
 * == Modification Information ==
 * 
 * DATA     AUTHOR      NOTE
 * ----------------------------
 * 2강       강병운     정적
 * 3강       강병운     동적
 * 4강       강병운     바인딩
 * 
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types'; // props를 사용하려면 prop-types라는 패키지를 추가해야한다.

class Basic extends Component { //컴포넌트 이름 : Basic => 부모컴포넌트에서 <Basic />으로 사용할 수 있다.
  constructor(...args){
    super(...args);
    this.state = { //해당 컴포넌트에만 적용되는 상태
      hidden : false
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(){
    this.setState(() => ( { hidden : true } ));
  }

  render() { //컴포넌트마다 render메소드를 가지고, 이 메소드가 반환하는 것이 실제로 보여지는 DOM이 됩니다.
    return (
      <div>
        <span>저는 {this.props.lang} 전문 {this.props.name}입니다!</span>
        {!this.state.hidden && <span>{this.props.birth}년에 태어났습니다.</span>}
        <button onClick={this.onClickButton}>숨기기</button>
      </div>
    );
  }
}

Basic.propTypes = { //React의 props(부모컴포넌트들로부터 물려받는 속성) 자료형 검사법
  name: PropTypes.string.isRequired, //string형이고 반드시 필요함.
  birth: PropTypes.number.isRequired, //number형이고 반드시 필요함.
  lang: PropTypes.string, //string형이고 반드시 필요하지 않음.
};

Basic.defaultProps = { //부모컴포넌트에서 값을 따로 주지 않을 경우에 적용할 default값을 지정할 수 있다.
  lang: 'Javascript',
};

export default Basic;