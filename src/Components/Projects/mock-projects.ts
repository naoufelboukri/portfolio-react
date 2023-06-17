import Projets from "../../Models/Project";

const imgPath: string = 'imgs/projects';

const MockProjects: Projets[] = [
    {
        name: 'Cisway',
        description: "Initiation au développement avec NodeJs et Angular sur une application de gestion et vente de produits par utilisateur.",
        tag: ['FRONT-END', 'BACK-END', 'Angular', 'Node Js'],
        git: 'https://rendu-git.etna-alternance.net/module-9231/activity-50328/group-994538',
        image: imgPath + '/cisway.png',
    },
    {
        name: 'MrBooks',
        description: "Réalisation en équipe de 4 d'un site de gestion de bibliothèque répondant aux fonctionnalités demandées par les professeurs responsables.",
        tag: ['FRONT-END', 'BACK-END', 'Symfony 5'],
        git: 'http://naandev.com/ressources/assets/img/icons/git.svg',
        image: imgPath + '/book.png',
    }
];

export default MockProjects;