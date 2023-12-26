import React, { useEffect, useRef } from 'react'

const Offer = () => {
    const inputRef = useRef()

    useEffect(() => {
        const value = inputRef.current
        const update = value.innerHTML.replace(/\./g, '<span class="text-red-600">.</span>')
        inputRef.current.innerHTML = update
    }, [])

    return (
        <div className='mt-20'>
            <p ref={inputRef} className='mx-auto w-[1100px] max-w-full p-6 bg-slate-50 shadow-xl rounded-[40px] text-justify hyphens-auto text-lg'>
                Lorem. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget. Vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Quam viverra orci sagittis eu volutpat odio. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Elit ut aliquam purus sit amet luctus venenatis. Eu non diam phasellus vestibulum. In hac habitasse platea dictumst quisque sagittis purus. Luctus accumsan tortor posuere ac ut consequat. Interdum velit euismod in pellentesque massa placerat duis ultricies. In metus vulputate eu scelerisque felis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Integer feugiat scelerisque varius morbi enim. A arcu cursus vitae congue mauris rhoncus aenean. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc sed blandit libero volutpat sed cras ornare.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget. Vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Quam viverra orci sagittis eu volutpat odio. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Elit ut aliquam purus sit amet luctus venenatis. Eu non diam phasellus vestibulum. In hac habitasse platea dictumst quisque sagittis purus. Luctus accumsan tortor posuere ac ut consequat. Interdum velit euismod in pellentesque massa placerat duis ultricies. In metus vulputate eu scelerisque felis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Integer feugiat scelerisque varius morbi enim. A arcu cursus vitae congue mauris rhoncus aenean. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc sed blandit libero volutpat sed cras ornare.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget. Vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Quam viverra orci sagittis eu volutpat odio. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Elit ut aliquam purus sit amet luctus venenatis. Eu non diam phasellus vestibulum. In hac habitasse platea dictumst quisque sagittis purus. Luctus accumsan tortor posuere ac ut consequat. Interdum velit euismod in pellentesque massa placerat duis ultricies. In metus vulputate eu scelerisque felis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Integer feugiat scelerisque varius morbi enim. A arcu cursus vitae congue mauris rhoncus aenean. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc sed blandit libero volutpat sed cras ornare.
            </p>
        </div>
    )
}

export default Offer