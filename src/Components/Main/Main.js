import React from 'react';
import Card from '../Card/Card';
import './Main.css'

class Main extends React.Component {

    render() {
        return (
            <main className='main'>
                <Card tasteName={'с фуа-гра'} portions={'10'}
                    addInfo={['мышь в подарок']}
                    weight={'0,5'} selectedInfo={'Печень утки разварная с артишоками.'}
                    disabled={false} />
                <Card tasteName={'с рыбой'} portions={'40'}
                    addInfo={['2 мыши в подарок']}
                    weight={'2'} selectedInfo={'Головы щучьи с чесноком да свежайшая сёмгушка.'}
                    disabled={false} />
                <Card tasteName={'с курой'} portions={'100'}
                    addInfo={['5 мышей в подарок', 'заказчик доволен']}
                    weight={'5'} selectedInfo={'Филе из цыплят с труфелями в бульоне.'}
                    disabled={true} />
            </main>
        );
    }
}

export default Main;
