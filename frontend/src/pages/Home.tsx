import { Box, Grid, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import PoemCard from "../components/PoemCard";
import { Poem } from "../types/poems.type";
import NotFoundCard from "../components/NotFoundCard";
import FilterPanel from "../components/FilterPanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { poemsActions } from "../redux/slice";
import SearchPanel from "../components/SearchPanel";

function Home() {
  const [value, setValue] = React.useState(0);
  const dispatch = useAppDispatch();
  const poemsReducer = useAppSelector((state) => state.poemsReducer);
  const { poems, poets, poemNames, years } = poemsReducer;

  useEffect(() => {
    dispatch(poemsActions.fetchAllPoems());
    dispatch(poemsActions.fetchAllPoets());
    dispatch(poemsActions.fetchPoemsNames());
    dispatch(poemsActions.fetchYears());
  }, [dispatch]);

  const handleChange = async (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        await handleTabOne();
        break;
      case 1:
        handleTabTwo();
        break;
      case 2:
        handleTabThree();
        break;
      case 3:
        handleTabFour();
        break;
      case 4:
        handleTabFive();
        break;
      default:
        handleTabOne();
        break;
    }
  };

  async function handleTabOne() {
    dispatch(poemsActions.fetchAllPoems());
  }

  async function handleTabTwo() {
    dispatch(poemsActions.fetchAllPoems());
    dispatch(poemsActions.fetchAllPoets());
  }

  async function handleTabThree() {
    dispatch(poemsActions.fetchAllPoems());
    dispatch(poemsActions.fetchPoemsNames());
  }

  function handleTabFour() {
    dispatch(poemsActions.fetchAllPoems());
    dispatch(poemsActions.fetchYears());
  }

  function handleTabFive() {
    dispatch(poemsActions.fetchAllPoems());
  }

  function handleFilterChange(valueIn: string) {
    if (value === 0) {
      dispatch(poemsActions.fetchAllPoems());
    }
    if (value === 1) {
      dispatch(poemsActions.fetchPoemsByPoet(valueIn));
    }
    if (value === 2) {
      dispatch(poemsActions.fetchPoemsByPoemName(valueIn));
    }
    if (value === 3) {
      dispatch(poemsActions.fetchPoemsByYear(valueIn));
    }
    if (value === 4) {
      if (valueIn === "") return dispatch(poemsActions.fetchAllPoems());
      dispatch(poemsActions.fetchPoemsByText(valueIn));
    }
  }

  return (
    <Box>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Poems" />
          <Tab label="Filter By Poet" />
          <Tab label="Filter By Poem Name" />
          <Tab label="Filter By Year" />
          <Tab label="Search Text" />
        </Tabs>
      </Box>
      {value === 1 && (
        <Box>
          <Stack direction="row" spacing={2}>
            <FilterPanel
              data={poets}
              onChange={handleFilterChange}
              value="Select a Poet"
            />
          </Stack>
        </Box>
      )}
      {value === 2 && (
        <Box>
          <Stack direction="row" spacing={2}>
            <FilterPanel
              data={poemNames}
              onChange={handleFilterChange}
              value="Select a Poem Name"
            />
          </Stack>
        </Box>
      )}
      {value === 3 && (
        <Box>
          <Stack direction="row" spacing={2}>
            <FilterPanel
              data={years}
              onChange={handleFilterChange}
              value="Select a Year"
            />
          </Stack>
        </Box>
      )}
      {value === 4 && (
        <Box>
          <Stack direction="row" spacing={2}>
            <SearchPanel
              onChange={handleFilterChange}
              value="Search by Poet, Poem Name, or Content"
            />
          </Stack>
        </Box>
      )}
      <Box
        sx={{
          p: 1,
          pt: 2,
        }}
      >
        <Grid container spacing={1}>
          {poems.length > 0 &&
            poems.map((poem: Poem[], index: number) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <PoemCard poems={poem} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
      {poems.length === 0 && <NotFoundCard />}
    </Box>
  );
}

export default Home;
