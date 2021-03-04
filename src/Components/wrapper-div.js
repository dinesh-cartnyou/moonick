import React from 'react';

export default function WrapperDiv({className,isFooterPresent = false,footerHeight,headerHeight = '65px',children,customStyle,innerWrapper}){
    const styles = {
        overflow: 'scroll',
        height: isFooterPresent ? `calc(100% - ${headerHeight} - ${footerHeight})` : `calc(100% - ${headerHeight})`
    }
    return(
        <section className={`bodypanelmian ${className}`} style={{height: (isFooterPresent && footerHeight) ? (innerWrapper ? `calc(100% - ${headerHeight} - ${footerHeight})` : `calc(100vh - ${headerHeight} - ${footerHeight})`) : (innerWrapper ? `calc(100% - ${headerHeight})` : `calc(100vh - ${headerHeight})`),overflow: 'scroll',...customStyle}}>
            {children}
        </section>
    )
}
