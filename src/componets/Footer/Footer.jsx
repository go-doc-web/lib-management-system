import React from 'react';
import clsx from 'clsx';
import { LiaGithub } from 'react-icons/lia';
import { FaRegCopyright } from 'react-icons/fa6';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className={clsx('container', styles.footerContainer)}>
        <div className={styles.gitHubLink}>
          <LiaGithub className={styles.gitHubIcon} />
          <a
            href="https://github.com/go-doc-web/lib-management-system"
            target="_blank"
            rel="noreferrer noopener"
          >
            Library Management System
          </a>
        </div>

        <div className={styles.copyLink}>
          <FaRegCopyright className={styles.copyIcon} />
          <a
            href="https://github.com/go-doc-web"
            target="_blank"
            rel="noreferrer noopener"
          >
            Oleh Hubskiy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
