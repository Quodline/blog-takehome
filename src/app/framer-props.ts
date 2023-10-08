import {MotionProps} from 'framer-motion'

export const cardListProps: MotionProps = {
    initial: 'hidden',
    animate: 'visible',
    variants: {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    },
}

export const cardProps: MotionProps = {
    variants: {
        visible: {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
        },
        hidden: {
            opacity: 0,
            rotateX: 180,
            rotateY: -180,
        }
    },
    transition: {
        duration: .3,
    },
    whileHover: {
        scale: 1.4,
        rotateZ: -2,
        zIndex: 1,
    },
}

export const pageLinkProps: MotionProps = {
    whileHover: {
        scale: 1.4,
        zIndex: 1,
    },
}
