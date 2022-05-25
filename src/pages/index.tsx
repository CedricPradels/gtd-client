import { NextPage } from "next";
import { Contexts } from "../components/contexts";
import { Projects } from "../components/projects";
import { NextActions } from "../components/nextActions";

const HomePage: NextPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Contexts />
      <Projects />
      <NextActions />
    </div>
  );
};

export default HomePage;
