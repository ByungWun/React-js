
/**
 * @title     React js 샘플
 * @filename  index.js
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
 * 
 */


import React from 'react';
import Basic from './components/basic';     //basic.js를 import하고, 바벨로 render.js를 컴파일한다.(컴포넌트 이름 일치 확인하기)

import { render } from 'react-dom';

//render(<Basic />, document.getElementById('root')); //root 아이디를 가진 태그에 basic 컴포넌트를 넣는다. 
render(<Basic name="Zero" birth={1994} />, document.getElementById('root')); //

