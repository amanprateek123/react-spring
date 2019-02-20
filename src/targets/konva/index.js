import * as Globals from '../../animated/Globals'
import Controller from '../../animated/Controller'
import { interpolate } from '../../animated/AnimatedInterpolation'
import animated from '../../animated/createAnimatedComponent'
import createInterpolation from '../../shared/interpolation'
import colorNames from '../../shared/colors'
import { config } from '../../shared/constants'
import { useSpring } from '../../useSpring'
import { useTrail } from '../../useTrail'
import { useTransition } from '../../useTransition'
import { useChain } from '../../useChain'
import { useSprings } from '../../useSprings'
import { Spring, Trail, Transition } from '../../classes'

Globals.injectDefaultElement('Group')
Globals.injectInterpolation(createInterpolation)
Globals.injectColorNames(colorNames)
Globals.injectApplyAnimatedValues(
  (instance, props) => {
    if (instance.nodeType) {
      instance._applyProps(instance, props)
    } else return false
  },
  style => style
)

const konvaElements = [
  'Layer',
  'FastLayer',
  'Group',
  'Label',
  'Rect',
  'Circle',
  'Ellipse',
  'Wedge',
  'Line',
  'Sprite',
  'Image',
  'Text',
  'TextPath',
  'Star',
  'Ring',
  'Arc',
  'Tag',
  'Path',
  'RegularPolygon',
  'Arrow',
  'Shape',
  'Transformer',
]

Object.assign(
  animated,
  konvaElements.reduce(
    (acc, element) => ({ ...acc, [element]: animated(element) }),
    {}
  )
)

export {
  config,
  animated,
  interpolate,
  Globals,
  useSpring,
  useTrail,
  useTransition,
  useChain,
  useSprings,
  Spring,
  Trail,
  Transition,
}
