import React from 'react';
import css from './titleSection.module.css';

const Section = ({ title, children }) => (
  <section>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);

export default Section;
