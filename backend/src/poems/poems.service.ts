import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { SearchBody } from "src/types/search-body.type";

@Injectable()
export class PoemsService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService
  ) {}

  async search(inputBody: SearchBody): Promise<{
    hits: Record<string, any>[];
    aggs: Record<string, any>;
  }> {
    const body = {
      size: 1000,
      from: 0,
      query: inputBody.query,
      aggs: inputBody.aggs,
    };
    const result = await this.esService.search({
      index: this.configService.get("ELASTICSEARCH_INDEX"),
      body,
    });
    return {
      hits: result.hits.hits,
      aggs: result.aggregations,
    };
  }

  async getAllPoems(): Promise<Record<string, any>[][]> {
    try {
      const metaphors = await this.search({
        query: {
          match_all: {},
        },
        //get distinct poem names
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
      });
      const poems = [];
      for (const key of metaphors.aggs.distinct_poem_names.buckets) {
        const poem = await this.search({
          query: {
            match: {
              poem_name: key.key,
            },
          },
        });
        const onePoem = [];
        for (const poemItem of poem.hits) {
          onePoem.push(poemItem._source);
        }
        poems.push(onePoem);
      }
      return poems;
    } catch (error) {
      throw error;
    }
  }

  async getAllPoemsNames(): Promise<any> {
    // Implement logic to retrieve all poems from your database.
    try {
      // Use an aggregation to get distinct poem names
      const PoemNames = await this.search({
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
      });

      return PoemNames.aggs.distinct_poem_names.buckets;
    } catch (error) {
      throw error;
    }
  }

  async getPoemByName(poemName: string): Promise<Record<string, any>[][]> {
    try {
      const poem = await this.search({
        query: {
          match: {
            poem_name: poemName,
          },
        },
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
      });
      const poems = [];
      for (const key of poem.aggs.distinct_poem_names.buckets) {
        const poem = await this.search({
          query: {
            match: {
              poem_name: key.key,
            },
          },
        });
        const onePoem = [];
        for (const poemItem of poem.hits) {
          onePoem.push(poemItem._source);
        }
        poems.push(onePoem);
      }
      return poems;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsWithMetaphors(): Promise<Record<string, any>[][]> {
    try {
      const metaphors = await this.search({
        query: {
          match: {
            metaphor_present_or_not: "yes",
          },
        },
      });
      const poems = [];
      for (const metaphor of metaphors.hits) {
        const poem = await this.search({
          query: {
            match: {
              poem_name: (metaphor._source as any).poem_name,
            },
          },
        });
        const onePoem = [];
        for (const poemItem of poem.hits) {
          onePoem.push(poemItem._source);
        }
        poems.push(onePoem);
      }
      return poems;
    } catch (error) {
      throw error;
    }
  }

  async getPoetNames(): Promise<any> {
    try {
      const poetNames = await this.search({
        aggs: {
          distinct_poet_names: {
            terms: {
              field: "poet",
            },
          },
        },
      });
      return poetNames.aggs.distinct_poet_names.buckets;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByPoet(poetName: string): Promise<Record<string, any>[][]> {
    try {
      const poems = await this.search({
        query: {
          match: {
            poet: poetName,
          },
        },
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
      });
      const poemsByPoet = [];
      for (const key of poems.aggs.distinct_poem_names.buckets) {
        const poem = await this.search({
          query: {
            match: {
              poem_name: key.key,
            },
          },
        });
        const onePoem = [];
        for (const poemItem of poem.hits) {
          onePoem.push(poemItem._source);
        }
        poemsByPoet.push(onePoem);
      }
      return poemsByPoet;
    } catch (error) {
      throw error;
    }
  }

  async getYears(): Promise<any> {
    try {
      const years = await this.search({
        aggs: {
          distinct_years: {
            terms: {
              field: "year",
            },
          },
        },
      });
      return years.aggs.distinct_years.buckets;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByYear(year: string): Promise<Record<string, any>[][]> {
    try {
      const poems = await this.search({
        query: {
          match: {
            year,
          },
        },
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
      });
      const poemsByYear = [];
      for (const key of poems.aggs.distinct_poem_names.buckets) {
        const poem = await this.search({
          query: {
            match: {
              poem_name: key.key,
            },
          },
        });
        const onePoem = [];
        for (const poemItem of poem.hits) {
          onePoem.push(poemItem._source);
        }
        poemsByYear.push(onePoem);
      }
      return poemsByYear;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByPoetAndYear(
    poetName: string,
    year: string
  ): Promise<Record<string, any>[]> {
    try {
      const poems = await this.search({
        query: {
          bool: {
            must: [
              {
                match: {
                  poet: poetName,
                },
              },
              {
                match: {
                  year,
                },
              },
            ],
          },
        },
      });
      return poems.hits;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByPoetAndPoemName(
    poetName: string,
    poemName: string
  ): Promise<Record<string, any>[]> {
    try {
      const poems = await this.search({
        query: {
          bool: {
            must: [
              {
                match: {
                  poet: poetName,
                },
              },
              {
                match: {
                  poem_name: poemName,
                },
              },
            ],
          },
        },
      });
      return poems.hits;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByYearAndPoemName(
    year: string,
    poemName: string
  ): Promise<Record<string, any>[]> {
    try {
      const poems = await this.search({
        query: {
          bool: {
            must: [
              {
                match: {
                  year,
                },
              },
              {
                match: {
                  poem_name: poemName,
                },
              },
            ],
          },
        },
      });
      return poems.hits;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByPoetAndYearAndPoemName(
    poetName: string,
    year: string,
    poemName: string
  ): Promise<Record<string, any>[]> {
    try {
      const poems = await this.search({
        query: {
          bool: {
            must: [
              {
                match: {
                  poet: poetName,
                },
              },
              {
                match: {
                  year,
                },
              },
              {
                match: {
                  poem_name: poemName,
                },
              },
            ],
          },
        },
      });
      return poems.hits;
    } catch (error) {
      throw error;
    }
  }

  async getYearsByPoet(poetName: string): Promise<any> {
    try {
      const years = await this.search({
        aggs: {
          distinct_years: {
            terms: {
              field: "year",
            },
          },
        },
        query: {
          match: {
            poet: poetName,
          },
        },
      });
      return years.aggs.distinct_years.buckets;
    } catch (error) {
      throw error;
    }
  }

  async getPoemNamesByPoet(poetName: string): Promise<Record<string, any>[]> {
    try {
      const poemNames = await this.search({
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
        query: {
          match: {
            poet: poetName,
          },
        },
      });
      return poemNames.aggs.distinct_poem_names.buckets;
    } catch (error) {
      throw error;
    }
  }

  async getPoemsByInputText(
    inputText: string
  ): Promise<Record<string, any>[][]> {
    try {
      const poems = await this.search({
        query: {
          //add match for fields poem_name, poet, year and line
          multi_match: {
            query: inputText,
            type: "best_fields",
            operator: "and",
            fields: ["poem_name", "poet", "year", "line"],
            //add fuzziness to match words that are similar to the input text
            fuzziness: "AUTO",
          },
        },
        aggs: {
          distinct_poem_names: {
            terms: {
              field: "poem_name",
            },
          },
        },
      });
      const poemsByInputText = [];
      for (const key of poems.aggs.distinct_poem_names.buckets) {
        const poem = await this.search({
          query: {
            match: {
              poem_name: key.key,
            },
          },
        });
        const onePoem = [];
        for (const poemItem of poem.hits) {
          onePoem.push(poemItem._source);
        }
        poemsByInputText.push(onePoem);
      }
      return poemsByInputText;
    } catch (error) {
      throw error;
    }
  }
}
