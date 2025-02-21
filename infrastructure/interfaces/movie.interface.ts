export interface Movie {
    id:number;
    title:string;
    description:string;
    releaseDate:Date;
    poster: string;
    rating:number;
    backdrop:string;
}


export interface CompleteMovie extends Movie {
    genres: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    ProductionCompany: string[];

}
