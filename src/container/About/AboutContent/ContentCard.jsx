import React from 'react'

const ContentCard = ({title,content,imageURL,specialClass}) => {
     
    if(typeof(content)==='object')
      {
        return( 
        <section id='section-1'>
                    <div className="section__image">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="section__content section_1">
                       <span>{title}</span>
                        <ul className={`content__list ${specialClass}`}>
                          {
                            content.map((item)=>(
                              <li>{item}</li>
                            ))
                          }
                          
                          {/* <li>{content[0]}</li>
                          <li>{content[1]}</li>
                          <li>{content[2]}</li>
                          <li>{content[3]}</li>
                          <li>{content[4]}</li> */}
                        </ul>
                    </div>
         </section>
        )
      }
      else{
        return(
        <section id='section-1'>

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