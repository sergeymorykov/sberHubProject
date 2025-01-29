import * as React from 'react';
import { useState } from 'react';
import { InterestsStyled } from './index.style';
import { useGetInterestsQuery } from '../../../../service/api';
import { InterestsItem } from '../../../../service/interests/types';
import { InterestsProps } from './types';

const Interests = ({ id, name, defaultValues = null }: InterestsProps): React.ReactElement => {
  const { data, isLoading, error } = useGetInterestsQuery(undefined);

  const [selectedInterests, setSelectedInterests] = useState<InterestsItem[]>(defaultValues);

  const handleChange = (selectedInterests) => {
    setSelectedInterests(selectedInterests);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Произошла ошибка</div>}
      {data && (
        <InterestsStyled
          id={id}
          name={name}
          onChange={handleChange}
          closeMenuOnSelect={false}
          isMulti
          options={data}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Выберите интересы..."
          value={selectedInterests}
        />
      )}
    </>
  );
};

export default Interests;
