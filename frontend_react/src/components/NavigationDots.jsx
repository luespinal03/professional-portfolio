import React from 'react'

// the props {active} is dynamic, it returns the information of what section of the website we are in I.E the dots on the right side of the page. So it tells us in which section we are currently. 
const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'contact', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (

                // the <a></a> below is controlling the dots on the right. if active === the item then the bubble changes colors to whats specified
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots