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

const components = {
    CCol: Col,
    CRow: Row,
    Layout,
    Header,
    Content,
    Footer,
    Aside
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