import React from 'react';
import cn from 'classnames';
import './Card.css';
import catPic from '../assets/cat.png';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            selected: false,
        }
    }

    selectFood = (e) => {
        e.preventDefault();
        const { selected } = this.state;
        selected ? this.setState({ selected: !selected, hovered: true }) :
            this.setState({ selected: !selected, hovered: false });
    }

    hoverCard = (e) => {
        e.preventDefault();
        e.type === 'mouseenter' ?
            this.setState({ hovered: true }) : this.setState({ hovered: false });;
    }

    renderUnderInfo() {
        const { tasteName, selectedInfo, disabled } = this.props;
        const { selected } = this.state;
        if (disabled) {
            return <p className="underInfo">Печалька, {tasteName} закончился.</p>;
        } else if (!selected) {
            return (<p className="underInfo">Чего сидишь? Порадуй котэ, <button type='button' onClick={this.selectFood}
                onMouseEnter={this.hoverCard} onMouseLeave={this.hoverCard}>
                <span className="underLine">купи</span>.</button></p>)
        } else {
            return <p className="underInfo">{selectedInfo}</p>
        }
    }

    render() {
        const { tasteName, portions, addInfo, weight, disabled } = this.props;
        const { selected, hovered } = this.state;

        const fullCardClass = cn({
            fullCard: true,
            disabled,
            selected,
            hovered,
        });

        return (
            <div className={fullCardClass}>
                <div className='card' onClick={disabled ? null : this.selectFood}
                    onMouseEnter={disabled ? null : this.hoverCard} onMouseLeave={disabled ? null : this.hoverCard}>
                    <div className='description'>
                        {selected && hovered ?
                            <span className="cardHeadHovered">Котэ не одобряет?</span> :
                            <span className="cardHead">Сказачное заморское яство</span>}
                        <h2>Нямушка<span className='tasteName'>{tasteName}</span></h2>
                        <span className='info'>{portions} порций</span>
                        {addInfo.map((current, index) => <span className='info' key={index}>{current}</span>)}
                    </div>
                    <img src={catPic} alt='Cat' className='catPic'></img>
                    <div className='weight'>
                        <span>{weight}</span>
                        <span>кг</span>
                    </div>
                </div>
                {this.renderUnderInfo()}
            </div>
        )
    }
}

export default Card;
