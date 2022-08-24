import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './assets/scss/style.scss';
import reportWebVitals from "./reportWebVitals";
// import './index.css'
//Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./page/Contact/Contact";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import ReactForm from "./page/ReactForm/ReactForm";
import ReactLifeCycle from "./page/ReactLifeCycle/ReactLifeCycle";
//cài đặt Redux
import { Provider } from "react-redux";
import { store } from "./redux/ConfigStore";
import DemoTangGiamSL from "./page/DemoRedux/DemoTangGiamSL/DemoTangGiamSL";
import DemoChonXe from "./page/DemoRedux/DemoChonXe/DemoChonXe";
import DemoFormComment from "./page/DemoRedux/DemoFormComment/DemoFormComment";
import FormSinhVien from "./BaitapReactBuoi3/FormSinhVien";
import DemoBuger from "./page/DemoRedux/DemoBuger/DemoBuger";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          {/* <Route path='' element={<Home />}> </Route> */}
          <Route index element={<Home />}>
          </Route>
          <Route path="contact" element={<Contact />}>
          </Route>
          <Route path="about" element={<About />}>
          </Route>
          <Route path="reactform" element={<ReactForm />}>
          </Route>
          <Route path="lifecycle" element={<ReactLifeCycle />}>      
          </Route>
          <Route path="demonumber" element={<DemoTangGiamSL/>}>
          </Route>
          <Route path="demochonxe" element={<DemoChonXe/>}>
          </Route>
          <Route path="demoformcomment" element={<DemoFormComment/>}>
          </Route>
          <Route path="thongtinhsinhvien" element={<FormSinhVien/>}>      
          </Route>
          <Route path="demobuger" element={<DemoBuger/>}>      
          </Route>
          <Route path="*" element={<Navigate to="" />}>
          </Route>
        </Route>
        {/* <Route path='contact' element={<Contact />}>

      </Route> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);
