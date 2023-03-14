import Select from 'react-select'
import { Container } from './styles'

type SelectInputProps = {
  placeholder: string
  defaultValue: any
  onChange: (value: any) => void
  options: any[]
}

export default function SelectInput ({ defaultValue, onChange, options, placeholder }: SelectInputProps) {
  const selectStyles = {
    control: (base: any) => ({
      ...base,
      padding: '0 12px',
      background: '#FFFFFF',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
      boxShadow: 'none',
      height: 40,
      minHeight: 40,
      '&:hover': {
        borderColor: '#1797ff'
      }
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#343434',
      fontWeight: '400',
      fontSize: 14,
      letterSpacing: 'normal',
      marginTop: '-2px'
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      color: '#343434',
      cursor: 'pointer'
    }),
    option: (base: any, { isSelected }: { isSelected: any }) => {
      return {
        ...base,
        fontSize: 14,
        fontWeight: '400',
        '&:hover': {
          backgroundColor: isSelected ? '#ccc' : '#fff'
        },
        backgroundColor: isSelected ? '#ddd' : '#fff',
        color: '#343434',
        cursor: 'pointer'
      }
    },
    menuList: (base: any) => ({
      ...base,
      padding: 0
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
      paddingRight: 0
    }),
    valueContainer: (base: any) => ({
      ...base,
      paddingLeft: 0,
      fontSize: 14,
      fontWeight: '400',
      height: 30
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      paddingRight: 0
    }),
    singleValue: (base: any) => ({
      ...base,
      color: '#323232',
      fontWeight: '400',
      marginTop: '-1px',
      fontSize: '16px',
      textTransform: 'capitalize'
    }),
    indicatorsContainer: (base: any) => ({
      ...base,
      color: '#343434'
    })
  }
  return (
    <Container>
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        styles={selectStyles}
        placeholder={placeholder}
        isSearchable={false} />
    </Container>
  )
}
