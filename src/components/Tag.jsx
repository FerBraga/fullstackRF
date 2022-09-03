import React from 'react';

function Tag({titulo}) {
    // const [ler, setar] = useState('');
// useState(() => {},[])

  return (
      <div className="tags">
        <h5>Titulo do produto</h5>
        <h6>Categoria</h6>
        <h6>Preço</h6>
      </div>
  );
};

export default Tag;