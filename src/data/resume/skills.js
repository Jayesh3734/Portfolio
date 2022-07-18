const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'jQuery',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
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
    title: 'Kotlin',
    competency: 4,
    category: ['Android Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Flutter',
    competency: 2,
    category: ['Android Development'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Ajax',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React-Redux',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'NPM',
    competency: 3,
    category: ['Web Development', 'Tools'],
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
    competency: 2,
    category: ['Web Development', 'Android Development'],
  },
  {
    title: 'XML',
    competency: 3,
    category: ['Languages', 'Android Development'],
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
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
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
