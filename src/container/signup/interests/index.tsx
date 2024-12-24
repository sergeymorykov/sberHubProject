import * as React from 'react';
import { useState } from 'react';
import { InterestsStyled } from './index.style';
import { useGetInterestQuery } from '../../../store/api';

const Interests = ({placeholder = "Выберите..."}): React.ReactElement => {

    const {data, isLoading, error} = useGetInterestQuery(undefined);

    const [selectedInterests, setSelectedInterests] = useState<string | null>(null);

    const handleChange = (selectedInterests) => {
        setSelectedInterests(selectedInterests);
    };

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка</div>}
            {data && <InterestsStyled
                    onChange={handleChange}
                    closeMenuOnSelect={false}
                    isMulti
                    options={data}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder={placeholder}
                    value={selectedInterests}
                />
                }
        </>
    );
}

export default Interests;