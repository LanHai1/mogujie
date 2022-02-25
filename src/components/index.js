import {
    Col,
    Row
} from 'vant';

const components = {
    CCol: Col,
    CRow: Row
}

const install = (app) => {
    Object.keys(components).forEach(key => {
        app.component(key, components[key])
    });
}

const mgjUI = {
    install
}

export default mgjUI