import styled from 'styled-components';

const Container = styled.div`
  margin: 1.5em 0;
  max-width: 500px;
`;

const Select = () => {
  const options = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'america' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
  ];

  return (
    <Container>
      <select>
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;