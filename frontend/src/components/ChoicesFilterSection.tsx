import React from 'react';

import { TitledSection } from 'src/components';
import { Typography, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import {
  CheckCircle,
  CheckCircleOutline,
  CheckBox,
  CheckBoxOutlineBlank,
} from '@material-ui/icons';

interface Props {
  title: string;
  value: string;
  choices: Record<string, string>;
  multipleChoice: boolean;
  onChange: (value: string) => void;
}

const ChoicesFilterSection = ({
  title,
  value,
  choices,
  multipleChoice = false,
  onChange,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (multipleChoice) {
      // Multiple values allowed
      let all_values = value ? value.split(',') : [];

      if (event.target.checked) {
        // Add the checked value
        all_values.push(event.target.name);
      } else {
        // Remove the unchecked value
        all_values = all_values.filter((item) => item !== event.target.name);
      }
      onChange(all_values.join(','));
    } else {
      // Only one value allowed
      if (event.target.checked) {
        onChange(event.target.name);
      } else {
        onChange('');
      }
    }
  };

  const valuesList = multipleChoice ? value.split(',') : [value];

  return (
    <TitledSection title={title}>
      <Box display="flex" flexDirection="column">
        {Object.entries(choices).map(([choiceValue, choiceLabel]) => {
          const checked = valuesList.includes(choiceValue);

          return (
            <FormControlLabel
              control={
                <Checkbox
                  icon={
                    multipleChoice ? (
                      <CheckBoxOutlineBlank />
                    ) : (
                      <CheckCircleOutline />
                    )
                  }
                  checkedIcon={multipleChoice ? <CheckBox /> : <CheckCircle />}
                  checked={checked}
                  onChange={handleChange}
                  name={choiceValue}
                  size="small"
                  data-testid={title + ': ' + choiceLabel}
                />
              }
              label={
                <Typography
                  variant="body2"
                  color={checked ? 'secondary' : 'textPrimary'}
                >
                  {choiceLabel}
                </Typography>
              }
              key={choiceValue}
            />
          );
        })}
      </Box>
    </TitledSection>
  );
};

export default ChoicesFilterSection;