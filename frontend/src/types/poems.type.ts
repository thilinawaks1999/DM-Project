export interface Poem {
  _source: PoemSource;
}

interface PoemSource {
  poem_id: number;
  poem_name: string;
  poet: string;
  line: string;
  metaphor_present_or_not: string;
  count_of_the_metaphor: number;
  metaphorical_terms: string;
  year: number;
}
