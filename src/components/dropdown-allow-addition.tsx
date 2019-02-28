import React, {Component, SyntheticEvent} from 'react'
import {Dropdown, DropdownProps} from 'semantic-ui-react'

const pattern = /[a-z]+:[0-9]+/i;
class DropdownAllowAdditions extends Component<{maxElement : Number, protocol : String},any> {
    constructor(props : any) {
        super(props);
        var recent =  localStorage.getItem(this.props.protocol.concat('Recent'));
        var recentArray = recent !== null ? recent.split(';') : [];
        var options : any[] = [];
        for(var i=0;i<recentArray.length;i++)
        {
            options[i]= {key: recentArray[i], text: recentArray[i], value: recentArray[i]}
        }
        this.state = { options };
    }

    // @ts-ignore
    handleAddition = (e : KeyboardEvent<HTMLElement>, { value } : DropdownProps) => {
        if (value == null) return;
        if(pattern.test(value.toString())) {
            if (this.props.maxElement <= this.state.options.length) {
                this.state.options.splice(-1, 1);
            }
            this.setState({
                options: [{key: value, text: value, value: value}, ...this.state.options],
            })
            var save = "";
            for(var i=0;i<this.state.options.length;++i) {
                save = save + this.state.options[i].text+';';
            }
            save = save.substring(0, save.length - 1);
            localStorage.setItem(this.props.protocol.concat('Recent'), save);
        }
    };

    handleChange = (e : SyntheticEvent<HTMLElement, Event>, { value } : DropdownProps) => 
    this.setState({ currentValue: value });

    render() {
        const { currentValue } : any = this.state;

        return (
            <Dropdown
                options={this.state.options}
                placeholder='Select host'
                search
                selection
                fluid
                allowAdditions
                value={currentValue}
                onAddItem={this.handleAddition}
                onChange={this.handleChange}
            />
        )
    }
}

export default DropdownAllowAdditions