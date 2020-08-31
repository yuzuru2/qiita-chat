import * as React from 'react';

import InputArea from 'src/component/inputArea';
import SubmitButton from 'src/component/submitButton';

export default () => {
  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
      <InputArea />
      <SubmitButton />
    </div>
  );
};
