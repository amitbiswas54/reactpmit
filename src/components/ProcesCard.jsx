
function ProcesCard({imgDark, imgLight, title, content }){
    return (
        <>
        <div className="col-lg-3 col-md-6">
        <div className="process-item fade-top">
          <div className="process-icon">
            <div className="icon-border" />
            <img
              className="dark-img"
              src={imgDark}
              alt="icon"
            />
            <img
              className="light-img"
              src={imgLight}
              alt="icon"
            />
          </div>
          <div className="process-content">
            <h3 className="title">{title}</h3>
            <p>
             {content}
            </p>
          </div>
        </div>
      </div>
        </>
    )
}

export default ProcesCard;