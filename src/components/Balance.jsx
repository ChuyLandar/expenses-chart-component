import Logo from './Logo';

function Balance() {
    return (
        <div className='balance-box'>
            <div>
                <p className='balance-title'>My balance</p>
                <p className='balance-total'>$921.48</p>
            </div>
            <div>
                <Logo />
            </div>
            
        </div>
    );
}

export default Balance;