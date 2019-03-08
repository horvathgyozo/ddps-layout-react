import React, {SyntheticEvent, useEffect, useState, KeyboardEvent} from 'react'
import {Dropdown, DropdownProps, DropdownItemProps} from 'semantic-ui-react'

interface IProps {
    maxElement : number, 
    protocol : string
};
const pattern = /[a-z]+:[0-9]+/i;

export const DropdownAllowAdditions = ({maxElement, protocol}: IProps) => {
    const [currentValue, setCurrentValue] = useState('')
    const [options, setOptions] = useState<DropdownItemProps[]>([])

    useEffect(() => {
        const recent =  localStorage.getItem(protocol.concat('Recent')) || ""
        const recentArray = recent.split(';')
        setOptions(recentArray.map(e => ({key: e, text: e, value: e})))
    }, [protocol])

    const handleAddition = (e : KeyboardEvent<HTMLElement>, { value } : DropdownProps) => {
        if (value == null) return;
        if(pattern.test(value.toString())) {
            if (maxElement <= options.length) {
                options.splice(-1, 1);
            }
            const newOptions = [{key: value as string, text: value as string, value: value as string}, ...options]
            setOptions(newOptions)
            const save = newOptions.map(e => e.text).join(';')
            localStorage.setItem(protocol.concat('Recent'), save);
        }
    };

    const handleChange = (e : SyntheticEvent<HTMLElement, Event>, { value } : DropdownProps) => {
        setCurrentValue(value as string);
    } 

    return (
        <Dropdown
            options={options}
            placeholder='Select host'
            search
            selection
            fluid
            allowAdditions
            value={currentValue}
            onAddItem={handleAddition}
            onChange={handleChange}
        />
    )
}
