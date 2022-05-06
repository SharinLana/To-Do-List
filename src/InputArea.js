
import { Component } from 'react';
import trash from './trash.png';
import done from './done.png';


export class InputArea extends Component {
    constructor() {
        super();

        this.state = {
            inputField: '',
            listArray: [], 
        }
    }
    
    onChangeEvent(event) {
        this.setState({inputField: event});
    }

    addItem(input) {
        if (input === '') {
            alert(`Please enter affairs`);
        }
        else {
            let items = this.state.listArray;
            items.push(input);
            this.setState({listArray: items, inputField: ''});
           
        }
    }

    enterPressed = (e) => {
        e.preventDefault();
    }

    removeItem(itemIndex) {
        let array = this.state.listArray;
        let removedItem = array.splice(itemIndex, 1, null);
        console.log(removedItem)

        if (removedItem) {
            let list = document.querySelectorAll('li');
            let singleLi = list[itemIndex];
            singleLi.style.display = 'none';
        }
        
        this.setState({listArray: array});
        console.log(array)
        console.log(itemIndex)
        
    }

    crossedItem = (i) => {
        let list = document.querySelectorAll('li');
        let singleLi = list[i];
        
        singleLi.classList.toggle('crossed');
    }

    render() {
        return (
            <div className='InputArea-main-container'>
                <form onSubmit={this.enterPressed}> 
                <div className='InputArea-container'>
                    <div className='InputArea-input-container'>
                        <input type='text' placeholder='What are you up to today?'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}/>

                        <button className='InputArea-add-btn'
                        onClick={() => {this.addItem(this.state.inputField)}}
                        >ADD</button>
                    </div>



                    <ul>
                        {this.state.listArray.map((item, index) => (
                            <li  key={index}> <span>{item}</span>

                            <div>
                            <img className='InputArea-done-icon' src={done} alt='icon1'
                            onClick={() => this.crossedItem(index)}/>

                            <img className='InputArea-trash-icon' src={trash} alt='icon2'
                            onClick={() => {this.removeItem(index)}}/>
                            </div>
                            </li>
                         ))}
                    </ul>




                </div>
                </form>
            </div>
        )
    }
}