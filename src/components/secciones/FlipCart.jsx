import React from 'react';
import Image from 'next/image';
import foto from '../../../public/imagenes/2.jpg';
const FlipCart = () => {
    return (
        <div className='group h-96 w-96 [perspective:1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0'>
                    <Image src={foto} alt={'doctor imagen'} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" />
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam eligendi, temporibus adipisci deserunt, velit quibusdam 
                        iusto consequatur nihil nostrum pariatur facere, laudantium corporis. 
                        Molestiae hic obcaecati quidem sapiente rerum minus!</p>
                </div>
            </div>


        </div>
    )
}

export default FlipCart