import Vue from 'vue'
import {
  Button,
  Header,
  Footer,
  Container,
  Main,
  Menu,
  MenuItem,
  Form,
  FormItem,
  Input,
  DatePicker,
  Col,
  Card,
  Row,
  Submenu,
  Dialog,
  InputNumber,
  Alert
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Header)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Col)
Vue.use(Card)
Vue.use(Row)
Vue.use(Submenu)
Vue.use(Dialog)
Vue.use(InputNumber)
Vue.use(Alert)
