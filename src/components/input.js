import React, {memo} from 'react';
import { TextField } from "@material-ui/core";

export const InputComponent = memo(({id, label, onChange, error}) => {
  return (
    <div className="input-wrapper">
      <TextField
      id={id}
      onChange={onChange}
      label={label}
      error={!!error}
      helperText={error}
      variant="outlined"
    />
    </div>
  );
});
