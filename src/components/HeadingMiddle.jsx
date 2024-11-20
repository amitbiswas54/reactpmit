

function HeadingMiddle ({mainHeading,subHeading}) {
    return (
        <>
            <div className="section-heading text-center">
                <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">{mainHeading}</h4>
                <h2 className="section-title overflow-hidden" data-text-animation data-split="word" data-duration="1">{subHeading}</h2>
            </div>
        </>
    )
}


export default HeadingMiddle;
