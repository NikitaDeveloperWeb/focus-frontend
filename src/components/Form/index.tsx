import React from 'react';

interface FormProps {
  id: string | undefined;
  title?: string;
  method: 'POST' | 'GET';
  action?: string;
  enctype?: string;
  className?: string;
  children?: JSX.Element | Element | JSX.Element[] | Element[];
}

function Form({ id, method, action, enctype, className, title,children}: FormProps,) {
  return (
    <form action={action} method={method} encType={enctype} className={className} id={id}>
      <h2>{title}</h2>
        {children}
    </form>
  );
}

export default Form;
