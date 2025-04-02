import React from 'react'
import ContentHeading from '../utilities/ContentHeading'

const AboutMe = () => {
  return (
    <div id='ABOUT ME' className='flex justify-center pt-4'>
      <div className='w-[80vw] md:w-[60vw]'>
        <div className='bg-transparent'>
          <ContentHeading>ABOUT ME</ContentHeading>
        </div>
        <br />
        <p className='text-cyan-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum rerum excepturi? Obcaecati a nihil iusto quam repellat similique itaque, quae, tempora minus vel, commodi sit? Dolor, alias voluptate architecto eligendi iure nostrum earum, ex praesentium porro quisquam veritatis quas?</p>
        <br />
        <p className='text-cyan-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, quidem. Harum exercitationem cupiditate, maiores pariatur dicta aliquam? Vel iusto perferendis, veritatis reiciendis cumque reprehenderit distinctio possimus eius, omnis aperiam atque ipsa molestiae debitis iure nulla porro commodi ullam rerum explicabo.</p>
      </div>
    </div>
  )
}

export default AboutMe