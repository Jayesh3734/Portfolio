import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Skills',
];

const Resume = () => (
  <Main
    title="Resume"
    description="I'm a junior undergrad – Final year student at IITRAM, majoring in Mechanical Engineering and pursuing minors in Computer Science. I aspire to become a Software Engineer, not because it’s in vogue, but simply because I love the endless possibilities and novelties that this domain holds. A student at heart - continuously evolving and looking to learn new things."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Resume;
