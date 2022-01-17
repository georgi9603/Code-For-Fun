import styled from "styled-components";
import Filters from "../../components/customComponents/Filters";
import BarChart from "../../components/chartJsComponents/BarChart";

const LandingContainer = styled.div`
  height: 70vh;
  padding: 40px;
  display: flex;
  @media (max-width: 1023px) {
    flex-direction: column;
    width: 70vw;
    align-items: center;
    margin: 0 auto;
  }
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <BarChart></BarChart>
      <Filters></Filters>
    </LandingContainer>
  );
};

export default LandingPage;
