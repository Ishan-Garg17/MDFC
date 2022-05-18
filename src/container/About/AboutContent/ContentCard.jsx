import React from 'react'

const ContentCard = ({title,content,imageURL}) => {
    console.log(title)
  return (
        <section id='section-1'>

                    <div className="section__image">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="section__content section_1">
                       <p>{title}</p>
                        <ul className='content__list'>
                          <li>{content[0]}</li>
                          <li>{content[1]}</li>
                          <li>{content[2]}</li>
                          <li>{content[3]}</li>
                          <li>{content[4]}</li>
                        </ul>
                    </div>

         </section>
  )
}

export default ContentCard