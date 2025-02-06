import React from 'react';
import { FaXTwitter, FaFacebook, FaGithub } from 'react-icons/fa6';

function Social({ className }) {
  return (
    <div className={`flex gap-5 text-4xl py-5 ${className}`}>
      <a
        href='https://www.facebook.com/profile.php?id=61561407596784'
        target='_blank'>
        <FaFacebook />
      </a>
      <a href='https://x.com/Tahmid_Jihan' target='_blank'>
        <FaXTwitter />
      </a>
      <a href='https://github.com/tahmidjihan' target='_blank'>
        <FaGithub />
      </a>
    </div>
  );
}

export default Social;
