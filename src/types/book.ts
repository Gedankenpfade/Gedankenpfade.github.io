export type Chapter = {
    title: string;
    content: string;
    id: number;
}

export type Book = {
    title: string;
    author: string;
    id: number;
    description: string;
    content: Chapter[];
    createdBy: string;
    category: string;
};