import React from 'react';

export function Reviewer(props) {
  const reviewer = props.reviewer || '';

  return (
    <span className="pull-request-reviewer" title={reviewer}>
      {reviewer}
    </span>
  );
}

Reviewer.propTypes = {
  reviewer: React.PropTypes.string,
};
