import { useEffect, useState, Suspense, useCallback } from "react";
import styled from "styled-components";
import BasicDateRangePicker from "../../muiComponents/BasicDateRangePicker";
import DropDownBasicSelect from "../../muiComponents/DropDown";
import Button from "../../muiComponents/Button";
import {
  getCountries,
  getProducts,
  baseAPi,
} from "../../../constants/apiEndpoints";
import {
  countryFilterSelect,
  ghgFilterSelect,
  startDateFilterSelect,
  endDateFilterSelect,
} from "../../../features/filtersSlice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setBarChartData } from "../../../features/chartsDataSlice";

const FiltersContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  > div {
    padding: 20px 0 20px 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filters = () => {
  const dispatch = useAppDispatch();
  const [countries, setCountries] = useState<any>();
  const [GHGTypes, setGHGTypes] = useState<any>();
  const { country, ghg, startDate, endDate } = useAppSelector(
    (state) => state.filters
  );

  useEffect(() => {
    fetch(getCountries)
      .then((response) => response.json())
      .then((data) => {
        //TODO get unique countries with correct country codes
        const normalizedData = Object.keys(data).map((k, index) => {
          return { id: index, label: data[k], value: k, type: "country" };
        });

        setCountries(normalizedData);
      });
  }, []);

  useEffect(() => {
    fetch(getProducts)
      .then((response) => response.json())
      .then((data) => {
        type Props = {
          description: string;
          name: string;
          product_variable: string;
        };

        const normalizedData = data.map((k: Props, index: number) => {
          return { id: index, label: k["name"], value: k["name"], type: "ghg" };
        });

        setGHGTypes(normalizedData);
      });
  }, []);

  const handleDropDownChange = (type: string, value: string) => {
    type === "country"
      ? dispatch(countryFilterSelect(value))
      : dispatch(ghgFilterSelect(value));
  };

  const handleDateRangePickerChange = useCallback(
    (startDate: string, endDate: string) => {
      dispatch(startDateFilterSelect(startDate));
      dispatch(endDateFilterSelect(endDate));
    },
    []
  );

  const handleExportDataButtonClick = useCallback(() => {
    const apiToFetch = `${baseAPi}/${ghg}/average.json?country=${country}&begin=${startDate}&end=${endDate}`;
    fetch(apiToFetch)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setBarChartData(data));
      });
  }, [country, ghg, startDate, endDate]);

  return (
    <FiltersContainer>
      <BasicDateRangePicker
        handleDateRangePickerChange={handleDateRangePickerChange}
      />
      <Suspense fallback={<div>Load</div>}>
        <DropDownBasicSelect
          inputInfo={{ name: "Country", label: "country" }}
          menuItems={countries && countries}
          handleDropDownChange={handleDropDownChange}
        />
      </Suspense>
      <DropDownBasicSelect
        inputInfo={{ name: "GHG", label: "ghg" }}
        menuItems={GHGTypes}
        handleDropDownChange={handleDropDownChange}
      />
      <ButtonsContainer>
        <Button
          handleOnClick={handleExportDataButtonClick}
          name="Export information"
        ></Button>
      </ButtonsContainer>
    </FiltersContainer>
  );
};

export default Filters;
