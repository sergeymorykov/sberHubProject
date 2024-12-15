import * as React from 'react';
import { useState } from 'react';
import { InterestsStyled } from './index.style';

const Interests = ({options, placeholder = "Выберите..."}): React.ReactElement => {

    const [selectedInterests, setSelectedInterests] = useState<string | null>(null);

    const handleChange = (selectedInterests) => {
        setSelectedInterests(selectedInterests);
    };

    return (
        <InterestsStyled
            onChange={handleChange}
            closeMenuOnSelect={false}
            isMulti
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder={placeholder}
            value={selectedInterests}
        />
    );
}

export default Interests;