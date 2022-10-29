import React from 'react';
import Link from '@docusaurus/Link';

export function Button({ 
  title,
  to,
}) {
  return (
    <Link to={to} className="button">
        {title}
    </Link>
  );
}