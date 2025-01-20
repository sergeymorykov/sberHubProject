import React, { useState } from 'react';
import { InputStyled} from '../../../../components/input/index.style';

const EventDate = (): React.ReactElement => {
  const [eventDate, setEventDate] = useState('');

  return (
    <InputStyled
      required      
      fullWidth
      id="date"
      label=""
      type="datetime-local"
      value={eventDate}
      onChange={(e) => setEventDate(e.target.value)}
    />
  );
};

export default EventDate;
