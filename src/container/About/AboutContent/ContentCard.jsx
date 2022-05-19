import React from 'react'

const ContentCard = ({title,content,imageURL,specialClass}) => {
    //  console.log(specialClass)
   if(specialClass==='about_mdfc')
      {
        return(
          <section id='section-1' className={`${specialClass}`}>
            <div className="section__content section_1">
                       <span>{title}</span>
                       <p>{content[0]}</p>
                       <p>{content[1]}</p>
                       <p>{content[2]}</p>
                    </div>
          </section>
        )
      }
      else if(typeof(content)==='object')
      {
        return( 
        <section id='section-1' className={`${specialClass}`}>
                    <div className="section__image">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="section__content section_1">
                       <span>{title}</span>
                        <ul className={`content__list`}>
                          {
                            content.map((item)=>(
                              <li key={item}>{item}</li>
                            ))
                          }
                        </ul>
                    </div>
         </section>
        )
      }
   
      else{
        return(
        <section id='section-1' className={`${specialClass}`}>

                    <div className="section__image">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="section__content section_1">
                       <span>{title}</span>
                       <p>{content}</p>
                    </div>
         </section>
        )
      }
}

export default ContentCard