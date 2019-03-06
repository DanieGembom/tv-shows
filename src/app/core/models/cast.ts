export class Cast {
    public constructor(
        public person: {
            id: number;
            name: string;
            image: {
                medium: string;
            },
            country: {
                name: string;
            }
        },
        public character: {
            name: string;
        }) { }
}
