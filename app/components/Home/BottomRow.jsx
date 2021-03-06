import React from 'react'
import ImageLink from './ImageLink'
import CategoryLink from './CategoryLink'

export default ({ category, imageIds }) => (
  <div>
    <div className="fl w-100 w-50-m w-25-ns">
      <CategoryLink category={category}/>
      <ImageLink category={category} image={`/images/${category}/${imageIds[1]}.jpg`}/>
    </div>
    <div className="fl w-100 w-50-m w-25-l">
      <div className="fl w-100">
        <div className="fl w-50">
         <ImageLink category={category} image={`/images/${category}/${imageIds[2]}.jpg`}/>
        </div>
        <div className="fl w-50">
          <ImageLink category={category} image={`/images/${category}/${imageIds[3]}.jpg`}/>
        </div>
        <div className="fl w-50">
          <ImageLink category={category} image={`/images/${category}/${imageIds[4]}.jpg`}/>
        </div>
        <div className="fl w-50">
          <ImageLink category={category} image={`/images/${category}/${imageIds[5]}.jpg`}/>
        </div>
      </div>
      <div className="fl w-100">
        <ImageLink category={category} image={`/images/${category}/${imageIds[0]}.jpg`}/>
      </div>
    </div>
    <div className="fl w-100 w-50-l">
      <ImageLink category={category} image={`/images/${category}/${imageIds[6]}.jpg`}/>
    </div>
  </div>
)

