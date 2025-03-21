import React, { useEffect } from 'react';

function Message(props) {

    useEffect(() => {
        console.log('Message mounted')

        const onMouseMove = ({x, y}) => {
            const coords = {x, y};
            console.log(coords)
        };

        window.addEventListener('mousemove', onMouseMove)
        return () => {
            //When the component is destroyed
            window.removeEventListener('mousemove', onMouseMove)
            console.log('Message un-mounted')
        }
    }, []);

    return (
        <>
            <h3 className="h3-primary">The user already exist!</h3>
        </>
    );
}

export default Message;