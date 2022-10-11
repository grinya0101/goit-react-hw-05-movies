import React from 'react';

export default function TrendMovie({ trends }) {
  return (
    <ul>
      {trends.map(({ original_title }) => {
        return <li key={original_title}>{original_title}</li>;
      })}
    </ul>
  );
}
