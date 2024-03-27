
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


import PropTypes from 'prop-types';

const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animation = useAnimation();
    const slideControls= useAnimation();
    useEffect(() => {
        console.log(isInView);
        if(isInView){
            animation.start("visible");
            slideControls.start("visible");
        }
    },[isInView]);

    return (
        <div ref={ref} style={{overflow:'hidden',position:'relative'}} >
            <motion.div
                variants={{
                    hidden:{
                        opacity:0, y:75
                    },
                    visible:{
                        opacity:1,
                        y:0
                    }
                }}
                initial="hidden"
                animate={animation}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                    position:'relative',
                    right:0,
                    zIndex: 20
                }}
            >
                {children}
            </motion.div>

            {/* <motion.div
                variants={{
                    hidden:{left:0},
                    visible:{left:"100%"}
                }}
                initial="hidden"
                animate={animation}
                transition={{ duration: 0.5, ease:'easeIn'}}
                style={{
                    position:'absolute',
                    top:4,
                    right:0,
                    bottom:4,
                    left:0,
                    background:"gray",
                    zIndex: 20
                }}
            >
                
            </motion.div> */}

        </div>
    )

}

Reveal.propTypes = {
    children: PropTypes.node.isRequired
}
export default Reveal;
