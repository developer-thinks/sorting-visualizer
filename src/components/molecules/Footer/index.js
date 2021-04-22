import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and Developed by {' '}
        <a
          href="https://github.com/sammed-sankonatti"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Sammed.sankonatti
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://github.com/sammed-sankonatti/sort-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
