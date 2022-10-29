import React from 'react';
import Link from '@docusaurus/Link';

export function Card({ 
  id, 
  icon, 
  title, 
  description, 
  to,
}) {
  return (
    <Link to={to} className="tutorial-card">
      {icon && <div className="icon">{icon}</div>}
      <div className="card-content">
        <div className="title" id={id && paramCase(title)}>
          {title}
        </div>
        <div className="description">{description}</div>
      </div>
    </Link>
  );
}