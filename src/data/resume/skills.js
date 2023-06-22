const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'ExpressJS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'NodeJS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'ReactJS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'jQuery',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C/C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Android Development', 'Languages'],
  },
  {
    title: 'Dart',
    competency: 3,
    category: ['Android Development', 'Languages'],
  },
  {
    title: 'Kotlin',
    competency: 4,
    category: ['Android Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Machine Learning',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Flutter',
    competency: 2,
    category: ['Android Development'],
  },
  {
    title: 'Ajax',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'NPM',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Insomnia',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MS Azure',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Web Development', 'Android Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  // '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
