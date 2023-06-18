import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import MusicPage from "./MusicPage";
import Resume from "./ResumePage";

const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="myMusic" element={<MusicPage />}></Route>
          <Route path="resume" element={<Resume/>}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SiteRouter;
