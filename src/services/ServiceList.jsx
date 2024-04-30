import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Cheap Prices',
    desc: " Experience unparalleled value with our budget-friendly rates.",
  },
  {
    imgUrl: guideImg,
    title: 'Attend in VR',
    desc: " Step into the future with VR attendance, where distance is dissolved and experiences are unlimited.",
  },
  {
    imgUrl: customizationImg,
    title: 'A-Z Planning',
    desc: " From A to Z, we've got your planning needs covered, ensuring every detail is flawlessly executed.",
  },

]



const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) =>
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      )}
    </>
  )
}

export default ServiceList