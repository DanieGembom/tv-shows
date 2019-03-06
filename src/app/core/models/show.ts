import { Days } from './days';

export class Show {
    public constructor(
        public id: number,
        public name: string,
        public status: string,
        public image: { medium: string; original: string },
        public time: { time: Date; days: Days[] },
        public officialSite: string,
        public externals: { imdb: string },
        public language: string,
        public genres: string,
        public rating: { average: string },
        public summary: string
    ) { }
}