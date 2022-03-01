import {
    Col,
    Row
} from 'vant';
import {
    Layout,
    Header,
    Content,
    Footer,
    Aside
} from './layout';
import {
    Columns
} from './columns'
import {
    BoxSkin
} from './box-skin/index.js';
import {
    BoxCenter
} from './box-center';
import {
    Launch
} from './launch';
import {
    Search
} from './search';
import {
    Magezine
} from './magazine';
import {
    FooterNav
} from './footer-nav';



const components = {
    CCol: Col,
    CRow: Row,
    Layout,
    Header,
    Content,
    Footer,
    Aside,
    Columns,
    BoxSkin,
    BoxCenter,
    Launch,
    Search,
    Magezine,
    FooterNav
}

const install = (app) => {
    Object.keys(components).forEach(key => {
        // 使用第三方组件
        if (key === 'CRow' || key === 'CCol') {
            app.component(key, components[key])
        } else {
            // 第一个参数获取当前vue中的name 赋值给组件的key
            app.component(components[key]['name'], components[key])
        }
    });
}

const mgjUI = {
    install
}

export default mgjUI