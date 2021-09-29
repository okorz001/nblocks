import { NBlock } from './common'

import ONE from './001'
import TWO from './002'
import THREE from './003'
import FOUR from './004'
import FIVE from './005'
import SIX from './006'
import SEVEN from './007'
import EIGHT from './008'
import NINE from './009'
import TEN from './010'
import ELEVEN from './011'
import TWELVE from './012'
import THIRTEEN from './013'
import FOURTEEN from './014'
import FIFTEEN from './015'
import SIXTEEN from './016'
import SEVENTEEN from './017'
import EIGHTEEN from './018'
import NINETEEN from './019'
import TWENTY from './020'
import TWENTY_ONE from './021'
import TWENTY_TWO from './022'
import TWENTY_THREE from './023'
import TWENTY_FOUR from './024'
import TWENTY_FIVE from './025'
import TWENTY_SIX from './026'
import TWENTY_SEVEN from './027'
import TWENTY_EIGHT from './028'
import TWENTY_NINE from './029'
import THIRTY from './030'
import THIRTY_ONE from './031'
import THIRTY_TWO from './032'
import THIRTY_FIVE from './035'
import THIRTY_SIX from './036'
import FORTY from './040'
import FORTY_FIVE from './045'
import FORTY_NINE from './049'
import FIFTY from './050'
import FIFTY_FIVE from './055'
import SIXTY from './060'
import SIXTY_FOUR from './064'
import SEVENTY from './070'
import EIGHTY from './080'
import EIGHTY_ONE from './081'
import NINETY from './090'
import ONE_HUNDRED from './100'

export type { NBlock }

const NBLOCKS: NBlock[] = [
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN,
  TWELVE,
  THIRTEEN,
  FOURTEEN,
  FIFTEEN,
  SIXTEEN,
  SEVENTEEN,
  EIGHTEEN,
  NINETEEN,
  TWENTY,
  TWENTY_ONE,
  TWENTY_TWO,
  TWENTY_THREE,
  TWENTY_FOUR,
  TWENTY_FIVE,
  TWENTY_SIX,
  TWENTY_SEVEN,
  TWENTY_EIGHT,
  TWENTY_NINE,
  THIRTY,
  THIRTY_ONE,
  THIRTY_TWO,
  THIRTY_FIVE,
  THIRTY_SIX,
  FORTY,
  FORTY_FIVE,
  FORTY_NINE,
  FIFTY,
  FIFTY_FIVE,
  SIXTY,
  SIXTY_FOUR,
  SEVENTY,
  EIGHTY,
  EIGHTY_ONE,
  NINETY,
  ONE_HUNDRED,
]

const GROUP_TO_TAGS = new Map<string, string[]>()
GROUP_TO_TAGS.set('squares', ['square'])
GROUP_TO_TAGS.set('steps', ['step'])
GROUP_TO_TAGS.set('evens', ['even'])
GROUP_TO_TAGS.set('odds', ['odd'])
// TODO: maybe the alternate tag should be removed for consistency/simplicity
GROUP_TO_TAGS.set('ones', ['x1', '1x'])
GROUP_TO_TAGS.set('twos', ['x2', '2x'])
GROUP_TO_TAGS.set('threes', ['x3', '3x'])
GROUP_TO_TAGS.set('fours', ['x4', '4x'])
GROUP_TO_TAGS.set('fives', ['x5', '5x'])
// the tens times table is not shown ten blocks wide...
GROUP_TO_TAGS.set('tens', ['x10'])

export function getNBlocks(group: string): NBlock[] {
  const tags = GROUP_TO_TAGS.get(group)
  if (!tags) {
    return NBLOCKS
  }
  return NBLOCKS
    .map(block => {
      // find distinct forms for every tag
      const forms = distinct(tags.map(tag => block.forms.find(form => form.tags && form.tags.includes(tag))).filter(Boolean))
      return {
        ...block,
        forms,
      }
    })
    // filter blocks with no matching forms
    .filter(block => block.forms.length > 0)
}

function distinct<T>(xs: T[]): T[] {
  return Array.from(new Set(xs))
}
