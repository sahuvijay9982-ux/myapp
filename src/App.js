import "./App.css";
import Gallery from "./component/Gallery";
import Card from "./component/Card";
import Services from "./component/Services";
import About from "./component/About";
import {
  Form,
  Navigate, Route
  
  , Routes
} from "react-router-dom";
import Layout from "./component/Layout";
import Input from "./component/Input";
import Searchdata from "./component/Searchdata";
import Cards from "./Cards";
import MyForm from "./component/MyForm";
import Sample from "./component/Sample";
import FormApplication from "./component/Formapplication";
import Regestration from "./component/Regestration";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Cards />
            </Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/input"
          element={
            <Layout>
              <Input />
            </Layout>
          }
        />
        <Route
          path="/searchdata"
          element={
            <Layout>
              <Searchdata />
            </Layout>
          }
        />

        <Route
          path="/myform"
          element={
            <Layout>
              <MyForm />
            </Layout>
          }
        />

        <Route
          path="/sample"
          element={
            <Layout>
              <Sample />
            </Layout>
          }
        />

        <Route
          path="/formapplication"
          element={
            <Layout>
              <FormApplication />
            </Layout>
          }
        />

        <Route
          path="/regestration"
          element={
            <Layout>
              <Regestration/>
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
