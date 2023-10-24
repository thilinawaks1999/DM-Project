import { Box, Grid, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import PoemCard from "../components/PoemCard";
import { Poem } from "../types/poems.type";
import NotFoundCard from "../components/NotFoundCard";
import FilterPanel from "../components/FilterPanel";

const poems: Poem[][] = [
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "yes",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
  [
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
    {
      _source: {
        poem_id: 0,
        poem_name: "අතුරුදහන් කළ මිනිසෙක්",
        poet: "සෝමවීර",
        line: "සියවසෙන් සියවස",
        metaphor_present_or_not: "no",
        count_of_the_metaphor: 0,
        metaphorical_terms: "unknown",
        year: 1974,
      },
    },
  ],
];

const items = [
  {
    key: "ගුණදාස අමරසේකර",
    doc_count: 48,
  },
  {
    key: "සිරි ගුනසිංහ",
    doc_count: 48,
  },
  {
    key: "මහගම සේකර",
    doc_count: 46,
  },
  {
    key: "සාගර පලන්සූරිය ",
    doc_count: 32,
  },
  {
    key: "දයාසේන ගුණසිංහ",
    doc_count: 31,
  },
  {
    key: "රුවන් බන්දුජීව",
    doc_count: 26,
  },
  {
    key: "එස්. මහින්ද හිමි",
    doc_count: 20,
  },
  {
    key: "වෑත්තෑවේ හිමි",
    doc_count: 19,
  },
  {
    key: "සෝමවීර",
    doc_count: 16,
  },
  {
    key: "කුමාරතුංග මුනිදාස",
    doc_count: 10,
  },
];

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        handleTabOne();
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

  function handleTabOne() {}

  function handleTabTwo() {}

  function handleTabThree() {}

  function handleTabFour() {}

  function handleTabFive() {}

  function handleFilterChange(value: string) {
    console.log(value);
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Poems" />
          <Tab label="Filter By Poet" />
          <Tab label="Filter By Poem Name" />
          <Tab label="Filter By Year" />
          <Tab label="Other" />
        </Tabs>
      </Box>
      {value !== 0 && (
        <Box>
          <Stack direction="row" spacing={2}>
            <FilterPanel
              data={items}
              onChange={handleFilterChange}
              value="Select a Value"
            />
            <FilterPanel
              data={items}
              onChange={handleFilterChange}
              value="Select a Value"
            />
          </Stack>
        </Box>
      )}
      <Box>
        <Grid container spacing={1}>
          {poems.map((poem: Poem[]) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={poem[0]._source.poem_id}
              >
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
