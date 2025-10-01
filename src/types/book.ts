export type Chapter = {
    title: string;
    content: string;
    id: number;
}

export type Book = {
    title: String;
    author: String;
    //id: number;
    description: string;
    content: Chapter[];
    createdBy: String;
};