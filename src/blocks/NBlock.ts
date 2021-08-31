import * as React from 'react'

interface Form {
  width: number,
  height: number,
  svg: React.FC,
  tags?: string[],
}

interface NBlock {
  number: number,
  forms: Form[],
}

export default NBlock
