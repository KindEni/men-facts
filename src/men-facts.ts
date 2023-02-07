import shuffle from "lodash.shuffle";
import { data } from "./data";

export type MenFactsType = {
    id: number,
    fact: string
}

export const fetchFacts = (n: number): Promise<MenFactsType[]> => {
    return Promise.resolve(data).then((facts) => shuffle(facts).slice(0, n));
}


