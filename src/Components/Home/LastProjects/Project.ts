export class Project {
    id: number;
    name: string;
    categories: string[];
    image: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Lorem Ipsum Vitnem Pro',
        categories: ['UX Design', 'UI Design'],
        image: 'test.png'
    },
    {
        id: 2,
        name: 'Lorem Ipsum Vitnem Pro',
        categories: ['PHP', 'Symfony'],
        image: 'test.png'
    },
    {
        id: 3,
        name: 'Lorem Ipsum Vitnem Pro',
        categories: ['PHP', 'Symfony'],
        image: 'test.png'
    }
]