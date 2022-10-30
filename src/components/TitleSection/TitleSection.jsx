import PropTypes from 'prop-types';

// import css from './TitleSection.module.css';
//  className={css.title}
const Section = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default Section;
