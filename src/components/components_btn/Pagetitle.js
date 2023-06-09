function Pagetitle({value,svalue,main,center}) {

    return (
      <div className={center? 'pageTCbox':"pageTbox"}>
        <h1 className={main? 'pagetitle mpgt' : "pagetitle"}>{value}
          <span className="pagesub">{svalue}</span>
        </h1>
      </div>
    );
  }
  
  export default Pagetitle;

